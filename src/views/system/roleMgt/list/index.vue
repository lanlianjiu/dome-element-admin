<!--

-->

<template>
  <div>
    <div class="search-container">
      <el-form :inline="true" :model="searchForm">
        <el-form-item label="角色名称">
          <el-input v-model="searchForm.roleName" placeholder="请输入角色名称" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchAction">查询</el-button>
          <el-button @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="page-warp">

      <div class="table-action-body">
        <el-button type="primary" @click="handleAction()">
          新增
        </el-button>
      </div>
      <el-table
        v-tableHeight="{bottomOffset: 80}"
        :data="tableData"
        height="100px"
        border
        style="width: 100%"
      >

        <el-table-column type="expand">
          <template slot-scope="props">
            <div style="margin-bottom: 5px;">授权菜单:</div>
            <div>
              <el-tree
                :ref="`${props.row.id}_tree`"
                :data="props.row.menusTree"
                :props="defaultProps"
                :show-checkbox="false"
                node-key="id"
              />
            </div>
          </template>
        </el-table-column>

        <el-table-column
          label="角色ID"
          prop="roleId"
          width="180"
        />
        <el-table-column
          label="角色编码"
          prop="roleCode"
          width="180"
        />
        <el-table-column
          label="角色名称"
          prop="roleName"
        />

        <el-table-column
          label="角色状态"
          prop="status"
          align="center"
        >
          <template slot-scope="{row}">
            <el-tag :type="row.status | statusFilter">
              {{ statusMap[row.status] ||'' }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column
          label="创建人"
          prop="createName"
        />

        <el-table-column
          label="创建时间"
          prop="createTime"
        />

        <el-table-column label="操作" align="center" width="240" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <el-button type="text" size="mini" @click="handleAction(row)">
              编 辑
            </el-button>
            <el-button type="text" size="mini" @click="permissionsMenus(row)">
              授 权
            </el-button>
            <el-button size="mini" type="text" class="danger-color" @click="handleDelete(row)">
              删 除
            </el-button>
          </template>
        </el-table-column>

      </el-table>
      <pagination v-show="total>0" :total="total" :page.sync="tableQuery.page" :limit.sync="tableQuery.limit" @pagination="getList" />

      <!-- 新增、编辑 -->
      <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogVisible"
        class="role_mgt_dialog"
      >
        <div>
          <el-form ref="dialog_form" :model="handleForm" :rules="rules" label-width="80px">
            <el-form-item label="角色编码" prop="roleCode">
              <el-input v-model="handleForm.roleCode" :disabled="is_edit" />
            </el-form-item>
            <el-form-item label="角色名称" prop="roleName">
              <el-input v-model="handleForm.roleName" />
            </el-form-item>
            <el-form-item label="角色状态">
              <div class="swatch-body">
                <el-switch
                  v-model="handleForm.status"
                  style="display: block;margin:auto auto auto 10px;"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  active-text="启用"
                  inactive-text="禁用"
                  :active-value="1"
                  :inactive-value="2"
                />
              </div>
            </el-form-item>
            <el-form-item label="角色描述">
              <el-input v-model="handleForm.desc" type="textarea" />
            </el-form-item>

          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="resetForm">取 消</el-button>
          <el-button type="primary" @click="saveForm">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 授权 -->
      <el-dialog
        title="授权"
        :visible.sync="dialogMenus"
      >
        <div>
          <el-input
            v-model="searchKey"
            placeholder="请输入内容"
            clearable
            @input="searchKeyFn"
          />
          <el-tree
            ref="tree"
            style="height:50vh;overflow: auto;"
            :data="treeList"
            :props="defaultProps"
            :default-expanded-keys="expandedKeys"
            :show-checkbox="true"
            node-key="id"
            :check-strictly="false"
            @node-click="handleNodeClick"
          />
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogMenus = false">取 消</el-button>
          <el-button type="primary" @click="confirmMenus">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>

import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'RoleMgtList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const map = {
        1: 'success',
        2: 'info'
      }
      return map[status] || ''
    }
  },
  data() {
    return {
      searchForm: { // 搜索数据对象
        roleName: ''
      },
      total: 0, // 总页数
      tableQuery: {
        page: 1,
        limit: 20
      },
      tableData: [], // 表格数据
      dialogVisible: false, // 新增、编辑弹窗标识
      handleForm: { // 表单数据
        roleName: '',
        status: 1,
        desc: ''
      },
      dialogMenus: false, // 授权弹窗标识
      treeList: [], // 树图数据
      expandedKeys: [], // 默认展开id
      pageTreedata: [], // 树图数据
      defaultProps: { // 树图组件参数配置
        children: 'children',
        label: 'name'
      },
      searchKey: '', // 授权弹窗搜索
      roleId: '', // 存储角色id
      dialogTitle: '', // 弹窗标题
      rules: { // 表单规则
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' }
        ],
        roleCode: [
          { required: true, message: '请输入角色编码', trigger: 'blur' }
        ]
      },
      statusMap: { // 状态对象
        1: '有效',
        2: '无效'
      },
      is_edit: false // 是否编辑标识
    }
  }, created() {
    this.getList()
  },

  methods: {

    // 搜索
    searchAction() {
      this.getList()
    },

    // 重置
    resetSearch() {
      this.tableQuery.page = 1
      this.getList()
    },

    // 新增、编辑操作
    handleAction(row) {
      this.dialogTitle = row ? '编辑角色' : '新增角色'
      this.is_edit = !!row
      if (row) {
        this.handleForm = JSON.parse(JSON.stringify(row))
      } else {
        this.handleForm = {
          roleName: '',
          status: 1,
          desc: ''
        }
      }

      this.dialogVisible = true
    },

    // 删除操作
    handleDelete(row) {
      this.$confirm(`是否删除【${row.roleName}】角色?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('system/roleMgt/handleDelete', {
          roleId: row.roleId
        })
          .then((res) => {
            if (res.code === 20000) {
              this.tableData = this.tableData.filter((item) => {
                return item.roleId !== row.roleId
              })
              // this.getList()
            } else {
              this.$message({
                message: res.msg,
                type: 'error'
              })
            }
          }).catch(() => {})
      }).catch(() => {})
    },

    // 树图数据搜索处理
    rebuildData(value, arr) {
      const newarr = []
      arr.forEach(element => {
        if (element.name.indexOf(value) > -1) {
          newarr.push(element)
        } else {
          if (element.children && element.children.length > 0) {
            const ab = this.rebuildData(value, element.children)
            const obj = {
              ...element,
              children: ab
            }
            if (ab && ab.length > 0) {
              newarr.push(obj)
            }
          }
        }
      })
      return newarr
    },

    // 树图数据搜索函数
    searchKeyFn() {
      if (this.searchKey) {
        const key = this.searchKey
        const data = JSON.parse(JSON.stringify(this.treeList))
        this.treeList = this.rebuildData(key, data)
      } else {
        this.treeList = this.pageTreedata
      }
    },

    // 点击授权操作
    permissionsMenus(row) {
      this.dialogMenus = true
      this.roleId = row.roleId
      this.getMenus(row)
    },

    // 勾选树图节点触发函数
    handleNodeClick(v) {
      console.log(v)
    },

    // 授权保存
    confirmMenus() {
      const res = this.$refs.tree.getCheckedKeys()
      this.$store.dispatch('system/roleMgt/setRolemenus', {
        roleId: this.roleId,
        menuIds: res
      }).then((res) => {
        if (res.code === 20000) {
          this.dialogMenus = false
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }).catch(() => {})
    },

    // 获取树图数据
    getMenus(row) {
      this.$store.dispatch('system/roleMgt/getMenus')
        .then((res) => {
          if (res.code === 20000) {
            this.treeList = res.data
            this.pageTreedata = res.data
            this.expandedKeys = []
            for (const i in res.data) {
              this.expandedKeys.push(res.data[i].id)
            }
            this.$refs.tree.setCheckedKeys(row.menuIds)
          }
        }).catch(() => {})
    },

    // 获取角色列表数据
    getList() {
      const parmas = Object.assign({}, this.tableQuery, this.searchForm)
      this.$store.dispatch('system/roleMgt/getList', parmas)
        .then((res) => {
          if ((res.code === 20000) && res.data) {
            this.tableData = res.data
            this.total = res.total
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }).catch(() => {})
    },

    // 重置表单
    resetForm() {
      this.$refs.dialog_form.resetFields()
      this.dialogVisible = false
    },

    // 保存角色操作
    saveForm() {
      this.$refs.dialog_form.validate((valid) => {
        if (valid) {
          this.$store.dispatch('system/roleMgt/handleAction', this.handleForm)
            .then((res) => {
              if (res.code === 20000) {
                this.dialogVisible = false
              } else {
                this.$message({
                  message: res.msg,
                  type: 'error'
                })
              }
            }).catch(() => {})
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
  .role_mgt_dialog{
    .el-dialog{
      width: 500px;
    }
  }
</style>
<style scoped lang="scss">
.search-container{
  margin: 10px 15px 0px 15px;
  padding: 15px 20px 0 20px;
  background-color: #FFF;
  border-radius: 2px;
  .el-form-item{
      margin-bottom: 15px;
  }

}
.page-warp {
  margin: 5px 15px 0px 15px;
  padding: 10px 20px 0px 20px;
  background-color: #FFF;
  border-radius: 2px;
  .table-action-body{
    margin-bottom: 10px;
  }
  .child-table-expand {
    font-size: 0;
  }
  .child-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .child-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .swatch-body{
    line-height: 36px;
    height: 36px;
    display: flex;
  }
}
</style>
