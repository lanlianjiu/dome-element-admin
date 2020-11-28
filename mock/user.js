/*
 * @Descripttion:
 * @Author: ex_lanlj2@partner.midea.com
 * @Date: 2020-11-24 14:57:59
 * @LastEditors: ex_lanlj2@partner.midea.com
 * @LastEditTime: 2020-11-28 17:24:24
 */

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

const menusData = {
  'code': 20000,
  'data': [{
    'children': [{
      'children': [{
        'component': '/system/user/create',
        'hidden': true,
        'id': 27,
        'meta': {
          'status': true,
          'title': '添加用户'
        },
        'name': '添加用户',
        'path': '/system/user/create',
        'pid': 2
      }, {
        'component': '/system/user/edit',
        'hidden': true,
        'id': 29,
        'meta': {
          'status': true,
          'title': '用户编辑',
          'noCache': true,
          'activeMenu': '/system/user'
        },
        'name': '用户编辑',
        'path': '/system/user/edit/:id(\\d+)',
        'pid': 2
      }],
      'component': '/system/user/list',
      'hidden': false,
      'id': 2,
      'meta': {
        'status': true,
        'title': '用户管理'
      },
      'name': '用户管理',
      'path': '/system/user',
      'pid': 1
    }, {
      'component': '/system/menu/index',
      'hidden': false,
      'id': 3,
      'meta': {
        'status': true,
        'title': '菜单管理'
      },
      'name': '菜单管理',
      'path': '/system/menu',
      'pid': 1
    }, {
      'alwaysShow': true,
      'component': '/system/role/index',
      'hidden': false,
      'id': 26,
      'meta': {
        'status': true,
        'title': '角色管理'
      },
      'name': '角色管理',
      'path': '/system/role',
      'pid': 1
    }],
    'component': '',
    'hidden': false,
    'id': 1,
    'meta': {
      'icon': 'el-icon-setting',
      'status': true,
      'title': '系统管理'
    },
    'name': '系统管理',
    'path': '',
    'pid': 0
  }]
}

module.exports = [
  // user login
  {
    url: '/vue-element-admin/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-element-admin/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-element-admin/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },
  // user getAuthMenu
  {
    url: '/vue-element-admin/user/getAuthMenu',
    type: 'get',
    response: _ => {
      return menusData
    }
  }
]
