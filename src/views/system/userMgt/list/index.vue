<!--

-->

<template>
  <div>
    <div class="search-container">
      <el-form :inline="true" :model="searchForm">
        <el-form-item label="用户名称">
          <el-input v-model="searchForm.name" placeholder="请输入用户名称" size="small" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="searchAction">查询</el-button>
          <el-button size="small" @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="page-warp">
      <div class="table-action-body">
        <el-button type="primary" size="small" @click="handleAction()">
          新增
        </el-button>
      </div>
      <el-table
        v-loading="tableLoading"
        v-tableHeight="{bottomOffset: 80}"
        :data="tableData"
        border
        style="width: 100%"
        height="100px"
      >
        <el-table-column type="expand">

          <template slot-scope="props">
            <el-form label-position="left" class="child-table-expand">

              <el-row>
                <el-col :span="12">
                  <el-form-item label="所属公司：">
                    <span>{{ props.row.companyName }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="所属部门：">
                    <span>{{ props.row.departName }}</span>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label="用户角色：">
                    <el-tag v-for="(item,index) in props.row.roles || []" :key="index" style="margin-right:5px;" size="small">
                      {{ item.roleName }}
                    </el-tag>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="用户描述：">
                    <span>{{ props.row.introduction }}</span>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="12">
                  <el-form-item label="创建用户：">
                    <span>{{ props.row.createName }}</span>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="创建时间：">
                    <span>{{ props.row.createTime }}</span>
                  </el-form-item>
                </el-col>
              </el-row>

            </el-form>
          </template>
        </el-table-column>

        <el-table-column
          label="用户ID"
          prop="userId"
          width="80"
        />

        <el-table-column
          label="用户账号"
          prop="userName"
        />

        <el-table-column
          label="用户昵称"
          prop="nickName"
        />

        <el-table-column
          label="用户状态"
          width="100"
          prop="status"
          align="center"
        >
          <template slot-scope="{row}">
            <el-tag :type="row.status | statusFilter" size="small">
              {{ statusMap[row.status] ||'' }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column
          label="用户性别"
          prop="userSex"
          width="80"
          align="center"
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

        <el-table-column label="操作" align="center" width="240" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <el-button type="text" size="mini" @click="handleAction(row)">
              编 辑
            </el-button>
            <el-button type="text" size="mini" @click="changeOpen(row)">
              修改密码
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

    </div>
    <!-- 新增、编辑 -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      custom-class="userMgt-dialog-body"
      @close="resetForm"
    >
      <div>
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">
          <el-row>
            <el-col :span="4">
              <el-upload
                class="avatar-uploader"
                :show-file-list="false"
                action="auto"
                accept="image/*"
                :headers="null"
                :http-request="uploadImg"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="ruleForm.avatar" :src="ruleForm.avatar" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon" />
              </el-upload>
            </el-col>
            <el-col :span="20">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="用户公司" prop="companyId">
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
                  <el-form-item label="用户部门" prop="departId">
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
                <el-col>
                  <el-form-item label="用户角色" prop="roleName">
                    <el-select
                      v-model="ruleForm.roleName"
                      style="width:100%;"
                      multiple
                      filterable
                      allow-create
                      size="small"
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
              <el-row style="display: flex;flex-wrap: wrap;justify-content: space-between;">

                <el-col :span="12">
                  <el-form-item label="用户账号" prop="userName">
                    <el-input
                      v-model="ruleForm.userName"
                      maxlength="30"
                      show-word-limit
                      size="small"
                      clearable
                      :disabled="!is_edit"
                      placeholder="请输入用户账号"
                    />
                  </el-form-item>
                </el-col>

                <el-col v-if="is_edit" :span="12">
                  <el-form-item label="用户密码" prop="userPassword">
                    <el-input
                      v-model.trim="ruleForm.userPassword"
                      maxlength="15"
                      size="small"
                      show-word-limit
                      clearable
                      placeholder="请输入用户密码"
                    />
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label="用户昵称" prop="nickName">
                    <el-input
                      v-model="ruleForm.nickName"
                      maxlength="30"
                      show-word-limit
                      size="small"
                      clearable
                      placeholder="请输入用户昵称"
                    />
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label="用户电话" prop="userMobile">
                    <el-input
                      v-model="ruleForm.userMobile"
                      maxlength="20"
                      size="small"
                      show-word-limit
                      clearable
                      placeholder="请输入用户电话"
                    />
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label="用户邮箱" prop="userEmali" style="margin-bottom: 12px">
                    <el-input
                      v-model="ruleForm.userEmali"
                      maxlength="50"
                      show-word-limit
                      size="small"
                      clearable
                      placeholder="请输入用户邮箱"
                    />
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label="用户状态" style="margin-bottom: 10px">
                    <div class="swatch-body">
                      <el-switch
                        v-model="ruleForm.status"
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
                </el-col>

                <el-col :span="12">
                  <el-form-item label="用户性别" style="margin-bottom: 6px">
                    <div class="swatch-body">
                      <el-switch
                        v-model="ruleForm.userSex"
                        style="display: block;margin:auto auto auto 10px;"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        active-text="男"
                        inactive-text="女"
                        :active-value="1"
                        :inactive-value="0"
                      />
                    </div>
                  </el-form-item>
                </el-col>

              </el-row>

              <el-row />

            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="用户备注" style="margin-bottom:0;">
                <el-input
                  v-model="ruleForm.introduction"
                  maxlength="200"
                  show-word-limit
                  type="textarea"
                  :rows="2"
                  placeholder="请输入用户备注"
                />
              </el-form-item>
            </el-col>
          </el-row>

        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="resetForm">取 消</el-button>
        <el-button type="primary" size="small" @click="saveForm">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 修改密码 -->
    <el-dialog
      title="修改密码"
      :visible.sync="passdialogVisible"
      custom-class="cpassword-dialog-body"
      @close="cancelForm"
    >
      <div>
        <el-form ref="passForm" :model="passForm" :rules="passrules" label-width="80px">

          <el-row>
            <el-col :span="24">
              <el-form-item label="新密码" style="margin-bottom:0;" prop="passWord">
                <el-input
                  v-model.trim="passForm.passWord"
                  maxlength="8"
                  show-word-limit
                  clearable
                  size="small"
                  placeholder="请输入新密码"
                />
              </el-form-item>
            </el-col>
          </el-row>

        </el-form>
      </div>
      <span slot="footer" class="dialog-footer cpassword-footer">
        <el-button size="small" @click="cancelForm">取 消</el-button>
        <el-button type="primary" size="small" @click="changePasssave">确 定</el-button>
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
      const map = {
        1: 'success',
        2: 'info'
      }
      return map[status] || ''
    }
  },
  data() {
    return {
      searchForm: { // 搜索对象
        nickName: ''
      },
      total: 0, // 总页数
      tableQuery: { // 分页对象参数
        page: 1,
        limit: 20
      },
      tableData: [], // 表格数据
      roleList: [], // 角色数据
      dialogTitle: '', // 弹窗标题
      dialogVisible: false, // 弹窗标识
      is_edit: false, // 是否编辑标识
      ruleForm: { // 表单对象
        nickName: '',
        status: 1,
        userSex: 1,
        userPassword: '',
        roleName: [],
        introduction: ''
      },
      rules: { // 表单校验规则
        companyId: [
          { required: true, message: '请选择公司', trigger: 'blur' }
        ],
        departId: [
          { required: true, message: '请选择部门', trigger: 'blur' }
        ],
        userName: [
          { required: true, message: '请输入用户账号', trigger: 'blur' }
        ],
        nickName: [
          { required: true, message: '请输入用户名称', trigger: 'blur' }
        ],
        userPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        roleName: [
          { required: true, message: '请选择用户角色', trigger: 'blur' }
        ]
      },
      coptions: [], // 公司下拉数据
      cnormalizer(node) { // 公司下拉组件配置
        return {
          id: node.companyId,
          label: node.companyName,
          children: node.children
        }
      },
      doptions: [], // 部门下拉数据
      dnormalizer(node) { // 部门下拉组件配置
        return {
          id: node.departId,
          label: node.departName,
          children: node.children
        }
      },
      statusMap: { // 状态字典数据
        1: '有效',
        2: '无效'
      },
      passForm: { // 密码表单数据
        passWord: ''
      },
      passdialogVisible: false, // 密码窗弹窗标识
      passrules: { // 密码窗校验规则
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      rowUserId: '', // 暂存记录点击行id
      tableLoading: false
    }
  }, created() {
    this.getList()
    this.getRole()
    this.getCompanyList()
    this.getDepartList()
  },

  methods: {
    // 头像上传成功函数
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    // 上传前处理函数
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },

    // 图片格式转换
    imageToBase64(file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      return new Promise(function(resolve, reject) {
        reader.onload = () => {
          resolve(reader.result)
        }
        reader.onerror = (error) => {
          reject(error)
        }
      })
    },

    // 点击上传
    uploadImg(v) {
      this.imageToBase64(v.file).then((res) => {
        const formdata = new FormData()

        formdata.append('data', res.replace(/^data:image\/(png|jpeg);base64,/g, ''))
        formdata.append('format', 'jpeg')

        this.$store.dispatch('common/uploadAction', formdata)
          .then((res) => {
            if (res.code === 20000) {
              this.ruleForm.avatar = res.data || ''
            } else {
              this.$message({
                message: res.msg,
                type: 'error'
              })
            }
          }).catch(() => {})
      })
    },

    // 搜索
    searchAction() {
      this.getList()
    },

    // 重置
    resetSearch() {
      this.tableQuery.page = 1
      this.searchForm = {
        nickName: ''
      }
      this.getList()
    },

    // 新增、编辑操作
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
          companyId: undefined,
          departId: undefined,
          avatar: '',
          userName: '',
          nickName: '',
          status: 1,
          userSex: 1,
          userPassword: '',
          roleName: [],
          introduction: '',
          userMobile: '',
          userEmali: ''
        }
      }

      this.dialogVisible = true
    },

    // 重置表单
    resetForm() {
      this.$refs.ruleForm.resetFields()
      this.dialogVisible = false
    },

    // 保存表单
    saveForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$store.dispatch('system/userMgt/handleAction', this.ruleForm)
            .then((res) => {
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

    // 删除操作
    handleDelete(row) {
      this.$confirm(`是否删除【${row.nickName}】用户?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('system/userMgt/handleDelete', {
          userId: row.userId
        }).then((res) => {
          if (res.code === 20000) {
            this.$message({
              message: res.msg,
              type: 'success'
            })
            this.getList()
          }
        }).catch(() => {})
      })
    },

    // 获取角色数据
    getRole() {
      this.$store.dispatch('system/roleMgt/getList')
        .then((res) => {
          if (res.code === 20000) {
            this.roleList = res.data.map((item) => {
              return {
                value: item.roleId,
                label: item.roleName
              }
            })
          }
        }).catch(() => {})
    },

    // 获取列表数据
    getList() {
      this.tableLoading = true
      const parmas = Object.assign({}, this.tableQuery, this.searchForm)
      this.$store.dispatch('system/userMgt/getList', parmas)
        .then((res) => {
          if (res.code === 20000) {
            this.tableData = res.data
            this.total = res.total
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

    // 获取公司数据
    getCompanyList() {
      this.$store.dispatch('system/companyMgt/getList')
        .then((res) => {
          if ((res.code === 20000) && res.data) {
            this.coptions = res.data
          }
        }).catch(() => {})
    },

    // 部门联动公司数据处理
    rebuildData(value, arr) {
      const newarr = []
      arr.forEach(element => {
        if (element.companyId === value) {
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

    // 获取部门数据
    getDepartList(companyId) {
      this.$store.dispatch('system/departMgt/getList', { companyId: companyId })
        .then((res) => {
          if ((res.code === 20000) && res.data) {
            this.doptions = this.rebuildData(companyId, res.data)
          }
        }).catch(() => {})
    },

    // 公司下拉组件选择时触发函数
    selectCompany(node) {
      if (this.ruleForm.companyId !== node.companyId) {
        delete this.ruleForm.departId
      }
      this.getDepartList(node.companyId)
    },

    // 清空公司下拉组件数据
    clearCompany() {
      if (!this.ruleForm.companyId) {
        this.doptions = []
        delete this.ruleForm.departId
      }
    },

    // 修改密码弹窗
    changeOpen(row) {
      this.rowUserId = row.userId
      this.passdialogVisible = true
    },

    // 密码窗取消
    cancelForm() {
      this.$refs.passForm.resetFields()
      this.passdialogVisible = false
    },

    // 修改密码
    changePasssave() {
      this.$refs.passForm.validate((valid) => {
        if (valid) {
          this.$store.dispatch('system/userMgt/changePassword', Object.assign({}, this.passForm, { userId: this.rowUserId }))
            .then((res) => {
              if (res.code === 20000) {
                this.passdialogVisible = false
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
    }
  }
}
</script>
<style lang="scss">
   .userMgt-dialog-body{
    width: 700px;
    .el-dialog__body{
      padding: 0px 20px 0px 20px;
    }
    .vue-treeselect__single-value,.vue-treeselect__placeholder{
      height: 32px;
      line-height: 32px !important;
    }
    .vue-treeselect__control{
      height: 32px;
      line-height: 32px;
    }
    .el-form-item {
        margin-bottom: 20px;
    }
  }
  .cpassword-dialog-body{
    width: 300px;
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

}
.cpassword-footer{
  display: flex;
  justify-content:center;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin: auto;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
  border-radius: 50%;
}
.swatch-body{
  line-height: 36px;
  height: 36px;
  display: flex;
}
</style>
