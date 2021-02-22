<!--

-->

<template>
  <div>
    <div class="search-container">
      <el-form :inline="true" :model="searchForm">
        <el-form-item label="部门编码">
          <el-input v-model="searchForm.departCode" placeholder="请输入部门编码" />
        </el-form-item>
        <el-form-item label="部门名称">
          <el-input v-model="searchForm.departName" placeholder="请输入部门名称" />
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
        row-key="departId"
      >
        <el-table-column
          label="部门ID"
          prop="departId"
          width="150"
        />

        <el-table-column
          label="部门编码"
          prop="departCode"
        />

        <el-table-column
          label="部门名称"
          prop="departName"
        />

        <el-table-column
          label="所属公司"
          prop="companyName"
        />

        <el-table-column
          label="部门状态"
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

        <el-table-column label="操作" align="center" width="260" class-name="small-padding fixed-width">
          <template slot-scope="{row}">

            <el-button type="text" size="mini" @click="handleAction(row)">
              编 辑
            </el-button>
            <el-button type="text" size="mini" @click="handleAction(row,true)">
              新增子部门
            </el-button>
            <el-button size="mini" type="text" class="danger-color" @click="handleDelete(row)">
              删 除
            </el-button>
          </template>
        </el-table-column>

      </el-table>

      <pagination
        v-show="total>0"
        :total="total"
        :page.sync="tableQuery.page"
        :limit.sync="tableQuery.limit"
        @pagination="getList"
      />

      <!-- 新增、编辑 -->
      <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogVisible"
        class="role_mgt_dialog"
        @closed="resetForm"
      >
        <div>
          <el-form ref="dialog_form" :model="handleForm" :rules="rules" label-width="80px">

            <el-form-item label="所属公司" prop="companyId">
              <treeselect
                v-model="handleForm.companyId"
                :disabled="is_child"
                style="width: 100%;"
                :options="options"
                :default-expand-level="1"
                :normalizer="normalizer"
                placeholder="请选择所属公司"
              />
            </el-form-item>

            <el-form-item v-if="is_child&&handleForm.departpName" label="父级部门">
              <el-input v-model="handleForm.departpName" :disabled="is_child" />
            </el-form-item>

            <el-form-item label="部门编码" prop="departCode">
              <el-input v-model="handleForm.departCode" :disabled="is_edit&&(!is_child)" />
            </el-form-item>

            <el-form-item label="部门名称" prop="departName">
              <el-input v-model="handleForm.departName" />
            </el-form-item>

            <el-form-item label="部门状态">
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

            <el-form-item label="部门描述">
              <el-input v-model="handleForm.desc" type="textarea" />
            </el-form-item>

          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="resetForm">取 消</el-button>
          <el-button type="primary" @click="saveForm">确 定</el-button>
        </span>
      </el-dialog>

    </div>
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'RoleMgtList',
  components: { Pagination, Treeselect },
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
      searchForm: { // 表格搜素对象
        departName: '',
        departCode: ''
      },
      total: 0, // 总页数
      tableQuery: { // 分页参数对象
        page: 1,
        limit: 20
      },
      tableData: [], // 表格数据
      dialogVisible: false, // 弹窗开启关闭标识
      handleForm: { // 提交信息对象
        departName: '',
        departCode: '',
        status: 1,
        desc: ''
      },
      pageTreedata: [], // 公司树图数组
      defaultProps: { // 树图配置选项
        children: 'children',
        label: 'name'
      },
      departpId: '', // 用于存储点击列表的部门
      dialogTitle: '', // 弹窗标题
      rules: { // 表单校验规则
        companyId: [
          { required: true, message: '请选择公司', trigger: 'blur' }
        ],
        departName: [
          { required: true, message: '请输入部门名称', trigger: 'blur' }
        ],
        departCode: [
          { required: true, message: '请输入部门编码', trigger: 'blur' }
        ]
      },
      options: [], // 树图数据
      expandedKeys: [], // 默认展开id
      normalizer(node) { // 树图自定义展示键名
        return {
          id: node.companyId,
          label: node.companyName,
          children: node.children
        }
      },
      is_edit: false, // 是否是编辑标识
      is_child: false, // 是否是子级标识
      statusMap: {
        1: '有效',
        2: '无效'
      }

    }
  }, created() {
    this.getList()
    this.getCompanyList()
  },

  methods: {

    // 搜索
    searchAction() {
      this.getList()
    },

    // 重置
    resetSearch() {
      this.tableQuery.page = 1
      this.searchForm = {
        departName: '',
        departCode: ''
      }
      this.getList()
    },

    // 新增（子部门）、编辑操作
    handleAction(row, type) {
      if (type) {
        this.dialogTitle = '新增子部门'
      } else {
        this.dialogTitle = row ? '编辑部门' : '新增部门'
      }
      if (type || (row && row.departpId)) {
        this.is_child = true
      } else {
        this.is_child = false
      }

      this.is_edit = !!row
      if (row && (!type)) {
        this.handleForm = JSON.parse(JSON.stringify(row))
      } else if (row && type) {
        this.handleForm = {
          departpId: row.departId,
          companyId: row.companyId,
          departpName: row.departName,
          departCode: '',
          departName: '',
          status: 1,
          desc: ''
        }
      } else {
        this.handleForm = {
          departpId: '',
          companyId: undefined,
          departName: '',
          status: 1,
          desc: ''
        }
      }

      this.dialogVisible = true
    },

    // 删除操作
    handleDelete(row) {
      this.$confirm(`是否删除【${row.companyName}】的部门?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('system/departMgt/handleDelete', {
          departpId: row.departpId
        }).then((res) => {
          if (res.code === 20000) {
            this.getList()
            this.$message({
              message: res.msg,
              type: 'success'
            })
          }
        }).catch(() => {})
      }).catch(() => {})
    },

    // 获取部门列表数据
    getList() {
      const parmas = Object.assign({}, this.tableQuery, this.searchForm)
      this.$store.dispatch('system/departMgt/getList', parmas)
        .then((res) => {
          if ((res.code === 20000) && res.data) {
            this.tableData = res.data
            this.total = res.pageTotal
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
        .catch(() => {

        })
    },

    // 取消弹窗操作
    resetForm() {
      this.$refs.dialog_form.resetFields()
      this.dialogVisible = false
    },

    // 弹窗保存操作
    saveForm() {
      this.$refs.dialog_form.validate((valid) => {
        if (valid) {
          this.$store.dispatch('system/departMgt/handleAction', this.handleForm).then((res) => {
            if (res.code === 20000) {
              this.dialogVisible = false
              this.$message({
                message: res.msg,
                type: 'success'
              })
            }
          }).catch(() => {})
        } else {
          return false
        }
      })
    },

    // 获取树图数据
    getCompanyList() {
      this.$store.dispatch('system/companyMgt/getList').then((res) => {
        if ((res.code === 20000) && res.data) {
          this.options = res.data
          this.expandedKeys = []
          for (const i in res.data) {
            this.expandedKeys.push(res.data[i].companyId)
          }
        }
      }).catch(() => {})
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
