<!--

-->

<template>
  <div class="page-warp">
    <div class="search-container">
      <el-form :inline="true" :model="searchForm">
        <el-form-item label="公司名称">
          <el-input v-model="searchForm.companyName" placeholder="请输入公司名称" />
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
      row-key="companyId"
    >
      <el-table-column
        label="公司ID"
        prop="companyId"
        width="180"
      />
      <el-table-column
        label="公司编码"
        prop="companyCode"
        width="180"
      />
      <el-table-column
        label="公司名称"
        prop="companyName"
      />

      <el-table-column
        label="公司状态"
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

      <el-table-column label="操作" align="center" width="200" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="handleAction(row)">
            编 辑
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
          <el-form-item v-if="handleForm.companypId" label="上级公司">
            <treeselect
              v-model="handleForm.companypId"
              style="width: 100%;"
              :options="options"
              :normalizer="normalizer"
              placeholder="请选择父级公司"
            />
          </el-form-item>
          <el-form-item label="公司编码" prop="companyCode">
            <el-input v-model="handleForm.companyCode" :disabled="is_edit" />
          </el-form-item>
          <el-form-item label="公司名称" prop="companyName">
            <el-input v-model="handleForm.companyName" />
          </el-form-item>
          <el-form-item label="公司状态">
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
          <el-form-item label="公司描述">
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
        companyName: '',
        companyCode: ''
      },
      total: 0,
      tableQuery: {
        page: 1,
        limit: 20
      },
      tableData: [],
      dialogVisible: false,
      handleForm: {
        companyName: '',
        companyCode: '',
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
        companyName: [
          { required: true, message: '请输入公司名称', trigger: 'blur' }
        ],
        companyCode: [
          { required: true, message: '请输入公司编码', trigger: 'blur' }
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
      is_edit: false
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
      this.dialogTitle = row ? '编辑公司' : '新增公司'
      this.is_edit = !!row
      if (row) {
        this.handleForm = JSON.parse(JSON.stringify(row))
      } else {
        this.handleForm = {
          companyName: '',
          status: true,
          desc: ''
        }
      }

      this.dialogVisible = true
    },

    handleDelete(row) {
      this.$confirm(`是否删除【${row.companyName}】的公司?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('system/companyMgt/handleDelete', {
          roleId: row.roleId
        })
          .then((res) => {
            if (res.code === 20000) {
              this.tableData = this.tableData.filter((item) => {
                return item.companyId !== row.companyId
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

    getList() {
      const parmas = Object.assign({}, this.tableQuery, this.searchForm)
      this.$store.dispatch('system/companyMgt/getList', parmas)
        .then((res) => {
          if ((res.code === 20000) && res.data) {
            this.options = res.data
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
          this.$store.dispatch('system/companyMgt/handleAction', this.handleForm)
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
