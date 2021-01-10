<!--

-->

<template>
  <div class="page-warp">
    <div class="search-container">
      <el-form :inline="true" :model="searchForm">
        <el-form-item label="公司名称">
          <el-input v-model="searchForm.departName" placeholder="请输入公司名称" />
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
        label="部门状态"
        prop="status"
      >
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status?'有效':'无效' }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column
        label="所属公司"
        prop="companyName"
      />

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

          <el-button type="primary" size="mini" @click="handleAction(row)">
            编 辑
          </el-button>
          <el-button type="primary" size="mini" @click="handleAction(row,true)">
            新增子部门
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
          <el-form-item label="所属公司">
            <treeselect
              v-model="handleForm.companyId"
              :disabled="is_child"
              style="width: 100%;"
              :options="options"
              :normalizer="normalizer"
              placeholder="请选择所属公司"
            />
          </el-form-item>
          <el-form-item v-if="is_child" label="父级部门">
            <el-input v-model="handleForm.departPName" :disabled="is_child" />
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
      return status ? 'success' : 'info'
    }
  },
  data() {
    return {
      searchForm: {
        departName: '',
        departCode: ''
      },
      total: 0,
      tableQuery: {
        page: 1,
        limit: 20
      },
      tableData: [],
      dialogVisible: false,
      handleForm: {
        departName: '',
        departCode: '',
        status: true,
        desc: ''
      },
      pageTreedata: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      roleId: '',
      dialogTitle: '',
      rules: {
        departName: [
          { required: true, message: '请输入部门名称', trigger: 'blur' }
        ],
        departCode: [
          { required: true, message: '请输入部门编码', trigger: 'blur' }
        ]
      },
      options: [],
      normalizer(node) {
        return {
          id: node.companyId,
          label: node.companyName,
          children: node.children
        }
      },
      is_edit: false,
      is_child: false
    }
  }, created() {
    this.getList()
    this.getCompanyList()
  },

  methods: {

    searchAction() {
      this.getList()
    },
    resetSearch() {
      this.tableQuery.page = 1
      this.getList()
    },

    handleAction(row, type) {
      if (type) {
        this.dialogTitle = '新增子部门'
      } else {
        this.dialogTitle = row ? '编辑部门' : '新增部门'
      }
      if (type || row.departpId) {
        this.is_child = true
      }

      this.is_edit = !!row
      if (row && (!type)) {
        this.handleForm = JSON.parse(JSON.stringify(row))
      } else if (row && type) {
        this.handleForm = {
          departpId: row.departId,
          companyId: row.companyId,
          departPName: row.departName,
          departCode: '',
          departName: '',
          status: true,
          desc: ''
        }
      } else {
        this.handleForm = {
          departpId: '',
          companyId: undefined,
          departName: '',
          status: true,
          desc: ''
        }
      }

      this.dialogVisible = true
    },

    handleDelete(row) {
      this.$confirm(`是否删除【${row.companyName}】的部门?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('system/departMgt/handleDelete', {
          roleId: row.roleId
        })
          .then((res) => {
            if (res.code === 20000) {
              this.tableData = this.tableData.filter((item) => {
                return item.departId !== row.departId
              })
              // this.getList()
            }
          })
          .catch(() => {

          })
      }).catch(() => {})
    },

    getList() {
      const parmas = Object.assign({}, this.tableQuery, this.searchForm)
      this.$store.dispatch('system/departMgt/getList', parmas)
        .then((res) => {
          if ((res.code === 20000) && res.data) {
            this.tableData = res.data
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
          this.$store.dispatch('system/departMgt/handleAction', this.handleForm)
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
    },
    getCompanyList() {
      this.$store.dispatch('system/companyMgt/getList')
        .then((res) => {
          if ((res.code === 20000) && res.data) {
            this.options = res.data
          }
        })
        .catch(() => {

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
