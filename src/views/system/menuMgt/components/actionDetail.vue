<template>
  <div class="page-warp">
    <el-form ref="postForm" :model="actionForm" :rules="rules" class="form-container" label-width="130px">

      <el-row :gutter="20" class="action_title">
        基本设置
      </el-row>

      <el-row :gutter="20" class="dash_line">
        <el-form-item label="是否是外链">

          <div class="input_body">
            <div class="input_left">
              <el-switch v-model="actionForm.is_external_link" />
            </div>
            <div class="input_right">
              路由作为外链打开
            </div>
          </div>

        </el-form-item>

        <el-form-item v-if="(($route.query.pid != 0)&&$route.query.id) || (!$route.query.id)" label="父级菜单">
          <div class="input_body">
            <div class="input_left">
              <treeselect
                v-model="actionForm.pid"
                style="width: 300px;"
                :options="options"
                :default-expand-level="1"
                :normalizer="normalizer"
                placeholder="请选择父级菜单"
              />
            </div>
            <div class="input_right">
              父级菜单
            </div>
          </div>
        </el-form-item>

        <el-form-item label="路由名称" prop="name">
          <div class="input_body">
            <div class="input_left">
              <el-input v-model="actionForm.name" class="input_w" placeholder="请输入路由名称" />
            </div>
            <div class="input_right">
              路由名称确保唯一性
            </div>
          </div>
        </el-form-item>

        <!-- <el-form-item label="路由标签名">
          <div class="input_body">
            <div class="input_left">
              <el-input v-model="actionForm.meta.title" class="input_w" placeholder="请输入路由标签名" />
            </div>
            <div class="input_right">
              路由标签，用于侧边栏以及面包屑显示名称
            </div>
          </div>
        </el-form-item> -->

        <el-form-item label="路由路径" prop="path">
          <div class="input_body">
            <div class="input_left">
              <el-input v-model="actionForm.path" class="input_w" placeholder="请输入路由路径" />
            </div>
            <div class="input_right">
              路由标签，用于侧边栏以及面包屑显示名称
            </div>
          </div>
        </el-form-item>

        <el-form-item label="页面路径" prop="component">
          <div class="input_body">
            <div class="input_left">
              <el-input v-model="actionForm.component" class="input_w" placeholder="请输入页面路径" />
            </div>
            <div class="input_right">
              页面（组件文件）的src下目录路径
            </div>
          </div>
        </el-form-item>

        <el-form-item label="菜单状态">

          <div class="input_body">
            <div class="input_left">
              <el-switch v-model="actionForm.stauts" />
            </div>
            <div class="input_right">
              菜单是否有效
            </div>
          </div>

        </el-form-item>

      </el-row>

      <el-row :gutter="20" class="action_title">
        其他设置
      </el-row>
      <el-row :gutter="20" class="dash_line">

        <el-form-item label="菜单图标">
          <div class="input_body">
            <div class="input_left">
              <el-input v-model="actionForm.meta.icon" class="input_w" placeholder="请输入菜单图标" />
            </div>
            <div class="input_right">
              设置该路由的图标，支持 svg-class，也支持 el-icon-x element-ui 的 icon
            </div>
          </div>
        </el-form-item>

        <el-form-item label="是否隐藏">
          <div class="input_body">
            <div class="input_left">
              <el-switch v-model="actionForm.hidden" />
            </div>
            <div class="input_right">
              当设置 true 的时候该路由不会在侧边栏出现
            </div>
          </div>
        </el-form-item>

        <el-form-item label="导航是否可点击">
          <div class="input_body">
            <div class="input_left">
              <el-input v-model="actionForm.redirect" class="input_w" placeholder="请输入可点击路由或noRedirect" />
            </div>
            <div class="input_right">
              当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
            </div>
          </div>
        </el-form-item>

        <el-form-item label="是否显示根路由">
          <div class="input_body">
            <div class="input_left">
              <el-switch v-model="actionForm.alwaysShow" />
            </div>
            <div class="input_right">
              你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
            </div>
          </div>
        </el-form-item>

        <el-form-item label="是否缓存路由">
          <div class="input_body">
            <div class="input_left">
              <el-switch v-model="actionForm.meta.noCache" />
            </div>
            <div class="input_right">
              如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
              </keep-alive></div>
          </div>
        </el-form-item>

        <el-form-item label="是否面包屑中显示">
          <div class="input_body">
            <div class="input_left">
              <el-switch v-model="actionForm.meta.breadcrumb" />
            </div>
            <div class="input_right">
              如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
            </div>
          </div>
        </el-form-item>

        <el-form-item label="是否在标签栏显示">
          <div class="input_body">
            <div class="input_left">
              <el-switch v-model="actionForm.meta.affix" />
            </div>
            <div class="input_right">
              如果设置为true，它则会固定在tags-view中(默认 false)
            </div>
          </div>
        </el-form-item>

        <el-form-item label="高亮的路由路径">
          <div class="input_body">
            <div class="input_left">
              <el-input v-model="actionForm.meta.activeMenu" class="input_w" placeholder="请输入高亮的路由路径" />
            </div>
            <div class="input_right">
              当路由设置了该属性，则会高亮相对应的侧边栏
            </div>
          </div>
        </el-form-item>

      </el-row>
    </el-form>
    <footer>
      <div class="footer-body">
        <el-button type="primary" @click="submitForm">保 存</el-button>
        <el-button @click="cancelForm">取 消</el-button>
      </div>
    </footer>

  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
const defaultForm = {
  name: '',
  path: '',
  component: '',
  redirect: '', // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
  hidden: false, // 当设置 true 的时候该路由不会在侧边栏出现
  alwaysShow: false, // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
  is_external_link: false, // 路由作为外链打开
  stauts: true, // 菜单状态
  meta: {
    title: '', // 设置该路由在侧边栏和面包屑中展示的名字
    icon: '', // 设置该路由的图标，支持 svg-class，也支持 el-icon-x element-ui 的 icon
    noCache: false, // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    breadcrumb: true, //  如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
    affix: false, // 如果设置为true，它则会固定在tags-view中(默认 false)
    activeMenu: '' // 当路由设置了该属性，则会高亮相对应的侧边栏。
  }
}

export default {
  name: 'ArticleDetail',
  components: {
    Treeselect
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      actionForm: Object.assign({}, defaultForm),
      loading: false,
      userListOptions: [],
      rules: {
        name: [
          { required: true, message: '请输入路由名称', trigger: 'blur' }
        ],
        path: [
          { required: true, message: '请输入路由路径', trigger: 'blur' }
        ],
        component: [
          { required: true, message: '请输入组件路径', trigger: 'blur' }
        ]
      },
      options: [],
      normalizer(node) {
        return {
          id: node.id,
          label: node.name,
          children: node.children
        }
      }
    }
  },
  computed: {

  },
  created() {
    if (this.$route.query.id) {
      this.actionForm = this.$route.query
    }
    this.getList()
  },
  methods: {
    submitForm() {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.actionForm.meta.title = this.actionForm.name
          this.actionForm.meta = JSON.stringify(this.actionForm.meta)
          const parmas = this.actionForm
          console.log(parmas)
          this.$store.dispatch('system/menuMgt/handleAction', parmas)
            .then((res) => {
              if (res.code === 20000) {
                this.loading = false
                this.cancelForm()
              }
            })
            .catch(() => {

            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    cancelForm() {
      this.router_go(this, 'list', { type: 'replace', closeTag: true })
    },
    getList() {
      this.$store.dispatch('system/menuMgt/getList')
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

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.page-warp {
  margin: 10px 20px 10px 20px;
  padding: 20px;
  background-color: #FFF;
  border-radius: 4px;
  .dash_line{
    border:1px dashed #dddddd;
    padding: 15px;
    margin: 0 !important;
  }
  .action_title{
    font-size: 14px;
    color: #606266;
    padding: 10px 0 10px 0;
    margin: 0 !important;
  }
  .footer-body{
    text-align: center;
    margin: 20px;
  }
  .input_body{
    display: flex;
    .input_left{

    }
    .input_right{
      color: #909399;
      margin-left: 15px;
    }
    .input_w{
      min-width: 300px;
      max-width: 400px;
    }
  }
}

</style>
