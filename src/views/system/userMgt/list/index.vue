<!--

-->

<template>
  <div class="page-warp">
    <div class="search-container">
      <el-form :inline="true" :model="searchForm">
        <el-form-item label="用户名称">
          <el-input v-model="searchForm.userName" placeholder="请输入用户名称" />
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
      border
      style="width: 100%"
      height="100px"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" class="child-table-expand">
            <el-form-item label="用户角色：">
              <el-tag v-for="(item,index) in props.row.roles || []" :key="index" style="margin-right:5px;">
                {{ item.roleName }}
              </el-tag>
            </el-form-item>
            <el-form-item label="用户描述：">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="创建用户：">
              <span>{{ props.row.createName }}</span>
            </el-form-item>
            <el-form-item label="创建时间：">
              <span>{{ props.row.createTime }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="用户ID"
        prop="userId"
        width="80"
      />
      <el-table-column
        label="用户名称"
        prop="userName"
      />

      <el-table-column
        label="用户状态"
        width="100"
        prop="status"
      >
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status?'有效':'无效' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="用户性别"
        prop="userSex"
        width="80"
      >
        <template slot-scope="{row}">
          {{ row.userSex?'男':'女' }}
        </template>
      </el-table-column>

      <el-table-column
        label="用户电话"
        prop="userMobile"
      />

      <el-table-column
        label="用户邮箱"
        prop="userEmali"
      />

      <el-table-column label="操作" align="center" width="180" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="handleAction(row)">
            编辑
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row)">
            删除
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="tableQuery.page" :limit.sync="tableQuery.limit" @pagination="getList" />

    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
    >
      <div>
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">

          <el-row>
            <el-col :span="12">
              <el-form-item label="用户公司" prop="userName">
                <treeselect
                  v-model="ruleForm.companyId"
                  style="width: 100%;"
                  :options="coptions"
                  :normalizer="cnormalizer"
                  placeholder="请选择公司"
                  @select="selectCompany"
                  @input="clearCompany"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="用户部门" prop="roleName">
                <treeselect
                  v-model="ruleForm.departId"
                  style="width: 100%;"
                  :options="doptions"
                  :normalizer="dnormalizer"
                  placeholder="请选择部门"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="用户名称" prop="userName">
                <el-input v-model="ruleForm.userName" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="用户角色" prop="roleName">
                <el-select
                  v-model="ruleForm.roleName"
                  style="width:100%;"
                  multiple
                  filterable
                  allow-create
                  default-first-option
                  placeholder="请选择角色"
                >
                  <el-option
                    v-for="item in roleList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>

              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="用户电话" prop="userMobile">
                <el-input v-model="ruleForm.userMobile" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="用户邮箱" prop="userEmali">
                <el-input v-model="ruleForm.userEmali" />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="用户状态">
                <div class="swatch-body">
                  <el-switch
                    v-model="ruleForm.status"
                    style="display: block;margin:auto auto auto 10px;"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="启用"
                    inactive-text="禁用"
                  />
                </div>

              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="用户性别">
                <div class="swatch-body">
                  <el-switch
                    v-model="ruleForm.userSex"
                    style="display: block;margin:auto auto auto 10px;"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="男"
                    inactive-text="女"
                  />
                </div>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row v-if="is_edit">
            <el-col :span="12">
              <el-form-item label="用户密码" prop="userPassword">
                <el-input v-model="ruleForm.userPassword" />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <el-form-item label="用户备注">
                <el-input
                  v-model="ruleForm.desc"
                  type="textarea"
                  :rows="2"
                />
              </el-form-item>
            </el-col>
          </el-row>

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
  name: 'UserMgtList',
  components: { Pagination, Treeselect },
  filters: {
    statusFilter(status) {
      return status ? 'success' : 'info'
    }
  },
  data() {
    return {
      searchForm: {
        userName: ''
      },
      total: 0,
      tableQuery: {
        page: 1,
        limit: 20
      },
      tableData: [],
      roleList: [],
      dialogTitle: '',
      dialogVisible: false,
      is_edit: false,
      ruleForm: {
        userName: '',
        status: true,
        userSex: true,
        userPassword: '',
        roleName: [],
        desc: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名称', trigger: 'blur' }
        ],
        userPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        roleName: [
          { required: true, message: '请选择用户角色', trigger: 'blur' }
        ]
      },
      coptions: [],
      cnormalizer(node) {
        return {
          id: node.companyId,
          label: node.companyName,
          children: node.children
        }
      },
      doptions: [],
      dnormalizer(node) {
        return {
          id: node.departId,
          label: node.departName,
          children: node.children
        }
      }
    }
  }, created() {
    this.getList()
    this.getRole()
    this.getCompanyList()
    this.getDepartList()
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
      this.dialogTitle = row ? '编辑用户' : '新增用户'
      this.is_edit = !row
      if (row) {
        const roleArr = []
        row.roles.map((item) => {
          roleArr.push(item.roleId)
        })
        this.selectCompany(row)
        row.roleName = roleArr
        this.ruleForm = JSON.parse(JSON.stringify(row))
      } else {
        this.ruleForm = {
          userName: '',
          status: true,
          userSex: true,
          userPassword: '',
          roleName: [],
          desc: ''
        }
      }

      this.dialogVisible = true
    },
    resetForm() {
      this.$refs.ruleForm.resetFields()
      this.dialogVisible = false
    },
    saveForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$store.dispatch('system/userMgt/handleAction', this.ruleForm)
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
    handleDelete(row) {
      this.$confirm(`是否删除【${row.userName}】用户?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('system/userMgt/handleDelete', {
          userId: row.userId
        })
          .then((res) => {
            if (res.code === 20000) {
              this.tableData = this.tableData.filter((item) => {
                return item.userId !== row.userId
              })
              // this.getList()
            }
          })
          .catch(() => {

          })
      })
    },
    getRole() {
      this.$store.dispatch('system/roleMgt/getRolelist')
        .then((res) => {
          if (res.code === 20000) {
            this.roleList = res.data.map((item) => {
              return {
                value: item.roleId,
                label: item.roleName
              }
            })
          }
        })
        .catch(() => {

        })
    },
    getList() {
      const parmas = Object.assign({}, this.tableQuery, this.searchForm)
      this.$store.dispatch('system/userMgt/getUserlist', parmas)
        .then((res) => {
          if (res.code === 20000) {
            this.tableData = res.data
            this.total = res.total
          }
        })
        .catch(() => {

        })
    },
    getCompanyList() {
      this.$store.dispatch('system/companyMgt/getList')
        .then((res) => {
          if ((res.code === 20000) && res.data) {
            this.coptions = res.data
          }
        })
        .catch(() => {

        })
    },
    rebuildData(value, arr) {
      const newarr = []
      arr.forEach(element => {
        if (element.departId === value) {
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
    getDepartList(companyId) {
      this.$store.dispatch('system/departMgt/getList', { companyId: companyId })
        .then((res) => {
          if ((res.code === 20000) && res.data) {
            this.doptions = this.rebuildData(companyId, res.data)
          }
        })
        .catch(() => {

        })
    },
    selectCompany(node) {
      this.getDepartList(node.companyId)
    },
    clearCompany() {
      if (!this.ruleForm.companyId) {
        this.doptions = []
      }
    }
  }
}
</script>

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
