<!--

-->

<template>
  <div class="page-warp">
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
    <div class="table-action-body">
      <el-button type="primary" @click="handleAction()">
        新增
      </el-button>
    </div>
    <el-table
      v-tableHeight="{bottomOffset: 110}"
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
              :check-strictly="true"
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
        label="角色名称"
        prop="roleName"
      />

      <el-table-column
        label="角色状态"
        prop="status"
      >
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status?'有效':'无效' }}
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

      <el-table-column label="操作" align="center" width="220" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="handleAction(row)">
            编 辑
          </el-button>
          <el-button type="primary" size="mini" @click="permissionsMenus(row)">
            授 权
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row)">
            删 除
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="tableQuery.page" :limit.sync="tableQuery.limit" @pagination="getList" />

    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      class="role_mgt_dialog"
    >
      <div>
        <el-form ref="dialog_form" :model="handleForm" :rules="rules" label-width="80px">
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
          :show-checkbox="true"
          node-key="id"
          :check-strictly="true"
          @node-click="handleNodeClick"
        />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogMenus = false">取 消</el-button>
        <el-button type="primary" @click="confirmMenus">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'RoleMgtList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      return status ? 'success' : 'info'
    }
  },
  data() {
    return {
      searchForm: {
        roleName: ''
      },
      total: 0,
      tableQuery: {
        page: 1,
        limit: 20
      },
      tableData: [],
      dialogVisible: false,
      handleForm: {
        roleName: '',
        status: true,
        desc: ''
      },
      dialogMenus: false,
      treeList: [],
      pageTreedata: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      searchKey: '',
      roleId: '',
      dialogTitle: '',
      rules: {
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' }
        ]
      }
    }
  }, created() {
    this.getList()
  },

  methods: {

    searchAction() {
      this.getList()
    },
    resetSearch() {
      this.tableQuery.page = 1
      this.getList()
    },

    handleAction(row) {
      this.dialogTitle = row ? '编辑角色' : '新增角色'
      if (row) {
        this.handleForm = JSON.parse(JSON.stringify(row))
      } else {
        this.handleForm = {
          roleName: '',
          status: true,
          desc: ''
        }
      }

      this.dialogVisible = true
    },

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
            }
          })
          .catch(() => {

          })
      }).catch(() => {})
    },

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

    searchKeyFn() {
      if (this.searchKey) {
        const key = this.searchKey
        const data = JSON.parse(JSON.stringify(this.treeList))
        this.treeList = this.rebuildData(key, data)
      } else {
        this.treeList = this.pageTreedata
      }
    },

    permissionsMenus(row) {
      this.dialogMenus = true
      this.roleId = row.roleId
      this.getMenus(row)
    },

    handleNodeClick(v) {
      console.log(v)
    },

    confirmMenus() {
      const res = this.$refs.tree.getCheckedKeys()
      this.$store.dispatch('system/roleMgt/setRolemenus', {
        roleId: this.roleId,
        menuIds: res
      })
        .then((res) => {
          this.dialogMenus = false
        })
        .catch(() => {

        })
    },

    getMenus(row) {
      this.$store.dispatch('system/roleMgt/getMenus')
        .then((res) => {
          if (res.code === 20000) {
            this.treeList = res.data
            this.pageTreedata = res.data
            this.$refs.tree.setCheckedKeys(row.menuIds)
          }
        }).catch(() => {

        })
    },

    fiterMenusIds(ids, data) {
      if (!data) return ids

      for (const i in data) {
        ids.push(data[i].id)
        if (data[i].children && data[i].children.length) {
          this.fiterMenusIds(ids, data[i].children)
        }
      }

      return ids
    },

    getList() {
      const parmas = Object.assign({}, this.tableQuery, this.searchForm)
      this.$store.dispatch('system/roleMgt/getRolelist', parmas)
        .then((res) => {
          if ((res.code === 20000) && res.data) {
            this.tableData = res.data.map((item) => {
              const ids = []
              return {
                menuIds: this.fiterMenusIds(ids, item.menusTree),
                ...item
              }
            })
            this.total = res.total
          }
        })
        .catch(() => {

        })
    },
    resetForm() {
      this.$refs.dialog_form.resetFields()
      this.dialogVisible = false
    },
    saveForm() {
      this.$refs.dialog_form.validate((valid) => {
        if (valid) {
          this.$store.dispatch('system/roleMgt/handleAction', this.handleForm)
            .then((res) => {
              if (res.code === 20000) {
                this.dialogVisible = false
              }
            })
            .catch(() => {

            })
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
.page-warp {
  margin: 10px 20px 10px 20px;
  padding: 20px;
  background-color: #FFF;
  border-radius: 4px;
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
