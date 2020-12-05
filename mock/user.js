/*
 * @Descripttion:
 * @Author: ex_lanlj2@partner.midea.com
 * @Date: 2020-11-24 14:57:59
 * @LastEditors: ex_lanlj2@partner.midea.com
 * @LastEditTime: 2020-12-05 13:04:58
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
  code: 20000,
  data: [{
    component: '',
    redirect: 'noRedirect',
    hidden: false,
    id: 1,
    meta: {
      icon: 'el-icon-setting',
      title: '系统管理'
    },
    name: '系统管理',
    path: '/system',
    pid: 0,
    children: [{
      component: '/system/menuMgt/index',
      redirect: '/system/menuMgt/list',
      hidden: false,
      id: 2,
      meta: {
        title: '菜单管理'
      },
      name: '菜单管理',
      path: 'menuMgt',
      pid: 1,
      children: [
        {
          component: '/system/menuMgt/list',
          hidden: true,
          id: 30,
          meta: {
            title: '菜单列表',
            noCache: true
          },
          name: '菜单列表',
          path: 'list',
          pid: 2
        },
        {
          component: '/system/menuMgt/edit',
          hidden: true,
          id: 29,
          meta: {
            title: '编辑菜单',
            noCache: true
          },
          name: '编辑菜单',
          path: 'edit',
          pid: 2
        }, {
          component: '/system/menuMgt/create',
          hidden: true,
          id: 34,
          meta: {
            title: '添加菜单'
          },
          name: '添加菜单',
          path: '/system/menuMgt/create',
          pid: 2
        }]
    },
    {
      component: '/system/userMgt/index',
      redirect: '/system/userMgt/list',
      hidden: false,
      id: 3,
      meta: {
        title: '用户管理'
      },
      name: '用户管理',
      path: 'userMgt',
      pid: 1,
      children: [
        {
          component: '/system/userMgt/list',
          hidden: true,
          id: 35,
          meta: {
            title: '用户列表',
            noCache: true
          },
          name: '用户列表',
          path: 'list',
          pid: 3
        },
        {
          component: '/system/userMgt/edit',
          hidden: true,
          id: 36,
          meta: {
            title: '编辑用户',
            noCache: true
          },
          name: '编辑用户',
          path: 'edit',
          pid: 3
        }, {
          component: '/system/userMgt/create',
          hidden: true,
          id: 37,
          meta: {
            title: '添加用户'
          },
          name: '添加用户',
          path: '/system/userMgt/create',
          pid: 3
        }, {
          component: '/system/userMgt/userTorole',
          hidden: true,
          id: 40,
          meta: {
            title: '分配角色'
          },
          name: '分配角色',
          path: '/system/userMgt/userTorole',
          pid: 3
        }]
    },
    {
      alwaysShow: true,
      component: '/system/roleMgt/index',
      redirect: '/system/roleMgt/list',
      hidden: false,
      id: 4,
      meta: {
        title: '角色管理'
      },
      name: '角色管理',
      path: 'roleMgt',
      pid: 1,
      children: [{
        component: '/system/roleMgt/list',
        hidden: true,
        id: 38,
        meta: {
          title: '角色列表',
          noCache: true
        },
        name: '角色列表',
        path: 'list',
        pid: 4
      }, {
        component: '/system/roleMgt/roleTomenu',
        hidden: true,
        id: 39,
        meta: {
          title: '角色授权',
          noCache: true
        },
        name: '角色授权',
        path: 'roleTomenu',
        pid: 4
      }]
    }
    ]
  }
  ]
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
