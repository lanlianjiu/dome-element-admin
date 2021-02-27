<!--

-->

<template>
  <div>
    <div class="search-container">
      <el-form ref="search_Form" :inline="true" :model="searchForm">
        <el-form-item label="公司编码">
          <el-input v-model="searchForm.companyCode" placeholder="请输入公司编码" />
        </el-form-item>
        <el-form-item label="公司名称">
          <el-input v-model="searchForm.companyName" placeholder="请输入公司名称" />
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
        v-loading="tableLoading"
        v-tableHeight="{bottomOffset: 80}"
        :data="tableData"
        height="100px"
        border
        style="width: 100%"
        row-key="companyId"
        :default-expand-all="true"
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
          align="center"
          width="90"
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

        <el-table-column label="操作" align="center" width="200" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <el-button type="text" size="mini" @click="handleAction(row)">
              编 辑
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
        class="company_mgt_dialog"
        @closed="resetForm"
      >
        <div>
          <el-form ref="dialog_form" :model="handleForm" :rules="rules" label-width="80px">
            <el-form-item v-if="(handleForm.companypId&&is_edit) || (!is_edit)" label="上级公司" prop="companypId">
              <treeselect
                v-model="handleForm.companypId"
                :disabled="is_edit"
                style="width: 100%;"
                :default-expand-level="1"
                :options="options"
                :normalizer="normalizer"
                placeholder="请选择父级公司"
                @select="selectCompany"
              />
            </el-form-item>
            <el-form-item label="公司编码" prop="companyCode">
              <el-input
                v-model="handleForm.companyCode"
                placeholder="请输入公司编码，编码唯一性"
                maxlength="20"
                show-word-limit
                clearable
                :disabled="is_edit"
              />
            </el-form-item>
            <el-form-item label="公司名称" prop="companyName">
              <el-input
                v-model="handleForm.companyName"
                maxlength="50"
                show-word-limit
                placeholder="请输入公司名称"
                clearable
              />
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
                  :active-value="1"
                  :inactive-value="2"
                />
              </div>
            </el-form-item>
            <el-form-item label="公司描述">
              <el-input
                v-model="handleForm.desc"
                maxlength="200"
                show-word-limit
                type="textarea"
                placeholder="请输入公司描述"
              />
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
      searchForm: { // 搜索参数对象
        companyName: '',
        companyCode: ''
      },
      total: 0, // 总页数
      tableQuery: { // 表格分页参数
        page: 1,
        limit: 20
      },
      tableData: [], // 表格数据
      dialogVisible: false,
      handleForm: { // 表单对象
        companyName: '',
        companyCode: '',
        status: 1,
        desc: ''
      },
      pageTreedata: [], // 树图数组
      defaultProps: { // 树图默认参数
        children: 'children',
        label: 'name'
      },
      dialogTitle: '', // 弹窗标题
      rules: { // 表单校验规则
        companypId: [
          { required: true, message: '请选择上级公司', trigger: 'blur' }
        ],
        companyName: [
          { required: true, message: '请输入公司名称', trigger: 'blur' }
        ],
        companyCode: [
          { required: true, message: '请输入公司编码', trigger: 'blur' }
        ]
      },
      options: [], // 父级公司数组
      selectComcode: '', // 选择父级时的code
      normalizer(node) { // 下拉树图自定义字段
        return {
          id: node.companyId,
          label: node.companyName,
          children: node.children
        }
      },
      is_edit: false, // 是否为编辑标识
      statusMap: { // 状态字典数据
        1: '有效',
        2: '无效'
      },
      expandRowKeys: [1],
      tableLoading: false
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
      this.searchForm = {
        companyName: '',
        companyCode: ''
      }
      this.tableQuery.page = 1
      this.getList()
    },

    // 新增、编辑操作
    handleAction(row) {
      this.dialogTitle = row ? '编辑公司' : '新增公司'
      this.is_edit = !!row
      this.selectComcode = ''
      if (row) {
        this.handleForm = JSON.parse(JSON.stringify(row))
      } else {
        this.handleForm = {
          companyName: '',
          status: 1,
          desc: ''
        }
      }

      this.dialogVisible = true
    },

    // 删除操作
    handleDelete(row) {
      this.$confirm(`是否删除【${row.companyName}】的公司?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('system/companyMgt/handleDelete', {
          companyId: row.companyId
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

    getTreeids(data, resarr) {
      data.forEach(item => {
        resarr.push(item.companyId)
        if (item.children && item.children.length) {
          this.getTreeids(item.children, resarr)
        }
      })
    },

    // 获取列表数据
    getList() {
      this.tableLoading = true
      const parmas = Object.assign({}, this.tableQuery, this.searchForm)
      this.$store.dispatch('system/companyMgt/getList', parmas)
        .then((res) => {
          if ((res.code === 20000) && res.data) {
            this.options = res.data
            this.tableData = res.data
            this.total = res.pageTotal
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
          this.tableLoading = false
        }).catch(() => {
          this.tableLoading = false
        })
    },

    // 重置表单
    resetForm() {
      this.$refs.dialog_form.resetFields()
      this.dialogVisible = false
    },

    // 选择父级公司
    selectCompany(node) {
      this.selectComcode = node.companyCode || ''
    },

    // 保存表单
    saveForm() {
      this.$refs.dialog_form.validate((valid) => {
        if (valid) {
          const saveData = JSON.parse(JSON.stringify(this.handleForm))
          if (this.selectComcode) {
            saveData.companyCode = `${this.selectComcode}_${saveData.companyCode}`
          } else if (this.is_edit) {
            saveData.companyCode = null
          }
          this.$store.dispatch('system/companyMgt/handleAction', saveData)
            .then((res) => {
              if (res.code === 20000) {
                this.dialogVisible = false
                this.$message({
                  message: res.msg,
                  type: 'success'
                })
              }
            }).catch(() => {

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
  .company_mgt_dialog{
    .el-dialog{
      width: 500px;

    }
    .vue-treeselect__single-value,.vue-treeselect__placeholder{
      line-height: 40px !important;
    }
    .el-dialog__body{
      padding: 10px 20px;
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
