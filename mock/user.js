
const menusData = require('./router.js')

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

const menus = {
  code: 20000,
  msg: '查询成功',
  data: menusData
}

module.exports = [
  // user login
  {
    url: '/system/user/login',
    type: 'post',
    response: config => {
      const { userName } = config.body
      const token = tokens[userName]
      // mock error
      if (!token) {
        return {
          code: 60204,
          msg: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        msg: '登录成功',
        data: token
      }
    }
  },

  // get user info
  {
    url: '/system/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          msg: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        msg: '操作成功',
        data: info
      }
    }
  },

  // user logout
  {
    url: '/system/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功',
        data: 'success'
      }
    }
  },
  // user del
  {
    url: '/system/userMgt/handleDelete',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功',
        data: 'success'
      }
    }
  },
  // user change password
  {
    url: '/system/userMgt/changePassword',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功',
        data: 'success'
      }
    }
  },
  {
    url: '/system/upLoad',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功',
        data: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'
      }
    }
  },
  // user getAuthMenu
  {
    url: '/system/user/getAuthMenu',
    type: 'get',
    response: _ => {
      return menus || []
    }
  }
]
