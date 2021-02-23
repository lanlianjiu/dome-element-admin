<template>
  <div class="login-container">
    <canvas id="login-canvas-tree" width="1000" height="600" class="canvas-body" />
    <div class="login-form-body">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

        <div class="title-container">
          <h3 class="title">登 录</h3>
        </div>

        <el-form-item prop="companyCode">
          <span class="svg-container">
            <svg-icon icon-class="companycode" />
          </span>
          <el-input
            ref="companyCode"
            v-model="loginForm.companyCode"
            placeholder="输入公司编码"
            name="companyCode"
            type="text"
            tabindex="1"
            autocomplete="on"
          />
        </el-form-item>

        <el-form-item prop="userName">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="userName"
            v-model="loginForm.userName"
            placeholder="输入账号"
            name="userName"
            type="text"
            tabindex="1"
            autocomplete="on"
          />
        </el-form-item>

        <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
          <el-form-item prop="passWord">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :key="passwordType"
              ref="passWord"
              v-model="loginForm.passWord"
              :type="passwordType"
              placeholder="输入密码"
              name="passWord"
              tabindex="2"
              autocomplete="on"
              @keyup.native="checkCapslock"
              @blur="capsTooltip = false"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'passWord' ? 'eye' : 'eye-open'" />
            </span>
          </el-form-item>
        </el-tooltip>

        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;padding: 15px 20px;" @click.native.prevent="handleLogin">Login</el-button>

        <!-- <div style="position:relative;height: 36px;">
          <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
            Or connect with
          </el-button>
        </div> -->
      </el-form>
    </div>
    <el-dialog title="Or connect with" :visible.sync="showDialog">
      Can not be simulated on local, so please combine you own business simulation! ! !
      <br>
      <br>
      <br>
      <social-sign />
    </el-dialog>
  </div>
</template>

<script>
import { validUsername, validCompanycode } from '@/utils/validate'
import SocialSign from './components/SocialSignin'
export default {
  name: 'Login',
  components: { SocialSign },
  data() {
    const validateCompanyCode = (rule, value, callback) => {
      if (!validCompanycode(value)) {
        callback(new Error('请输入公司编码'))
      } else {
        callback()
      }
    }
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入输入最少6位密码'))
      } else {
        callback()
      }
    }

    return {
      loginForm: {
        companyCode: 'code',
        userName: 'admin',
        passWord: '111111'
      },
      loginRules: {
        userName: [{ required: true, trigger: 'blur', validator: validateUsername }],
        passWord: [{ required: true, trigger: 'blur', validator: validatePassword }],
        companyCode: [{ required: true, trigger: 'blur', validator: validateCompanyCode }]
      },
      passwordType: 'passWord',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.companyCode === '') {
      this.$refs.companyCode.focus()
    } else if (this.loginForm.userName === '') {
      this.$refs.userName.focus()
    } else if (this.loginForm.passWord === '') {
      this.$refs.passWord.focus()
    }
    this.canvasTree()
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'passWord') {
        this.passwordType = ''
      } else {
        this.passwordType = 'passWord'
      }
      this.$nextTick(() => {
        this.$refs.passWord.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true

          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    },
    canvasTree() {
      const drawtree = function(ctx, startx, starty, length, angle, depth, branchWidth) {
        var rand = Math.random
        var n_length; var n_angle; var n_depth; var maxbranch = 4
        var endx; var endy; var maxangle = 2 * Math.PI / 4
        var subbranch
        ctx.beginPath()
        ctx.moveTo(startx, starty)
        endx = startx + length * Math.cos(angle)
        endy = starty + length * Math.sin(angle)
        ctx.lineCap = 'round'
        ctx.lineWidth = branchWidth
        ctx.lineTo(endx, endy)
        if (depth <= 2) {
        // 树的枝干
          ctx.strokeStyle = 'rgb(0,' + (((rand() * 64) + 128) >> 0) + ',0)'
        } else {
        // 树的叶子
          ctx.strokeStyle = 'rgb(0,' + (((rand() * 64) + 64) >> 0) + ',50,25)'
        }
        ctx.stroke()
        n_depth = depth - 1
        // 判断树是否结束
        if (!n_depth) {
          return
        }
        subbranch = (rand() * (maxbranch - 1)) + 1
        branchWidth *= 0.5
        for (var i = 0; i < subbranch; i++) {
          n_angle = angle + rand() * maxangle - maxangle * 0.5
          n_length = length * (0.5 + rand() * 0.5)
          setTimeout(function() {
            drawtree(ctx, endx, endy, n_length, n_angle, n_depth, branchWidth)
            return
          }, 500)
        }
      }

      const canvasdom = document.getElementById('login-canvas-tree')
      const context = canvasdom.getContext('2d')
      // 初始化的树
      drawtree(context, 300, 700, 200, -Math.PI / 2, 12, 12)
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  //background:url('../../assets/images/bg_icon_1.jpg');
  background-size: cover;
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #606266;
      height: 47px;
      caret-color: #606266;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #FFF inset !important;
        // -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid #ddd;
    background: #FFF;
    border-radius: 5px;
    color: #454545;
  }
  .login_bg_carousel{
    position: absolute;
    width: 100%;
    height: 100vh;
    .el-carousel__container{
      height: 100vh;
    }
    .login_bg_carousel_item{
      img{
        width: 100% !important;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.canvas-body{
  left: 0;
  position:absolute;
  z-index:2;
  opacity:0.5;
}

.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;

.login-form-body{
    padding-top: 10%;
  .login-form {
    position: relative;
    width: 30%;
    max-width: 100%;
    padding: 40px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    background-color: #E8F0FE;
    border-radius: 4px;
    z-index: 999;
  }
}

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: #606266;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
