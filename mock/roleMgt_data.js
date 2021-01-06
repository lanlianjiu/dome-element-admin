
const list = [{
  roleId: 1,
  roleName: '管理员角色',
  status: true,
  desc: '系统管理员角色',
  createName: '用户管理员',
  createTime: '2021-01-05 09:00:00',
  menusTree: [
    {
      component: '',
      redirect: 'noRedirect',
      hidden: false,
      id: 1,
      stauts: 1,
      sortNo: 1,
      meta: {
        icon: 'el-icon-setting',
        title: '系统管理',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: ''
      },
      name: '系统管理',
      path: '/system',
      pid: 0,
      children: [{
        component: '/system/menuMgt/index',
        redirect: '/system/menuMgt/list',
        hidden: false,
        id: 2,
        stauts: 1,
        sortNo: 1,
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
            id: 5,
            stauts: 1,
            sortNo: 1,
            meta: {
              title: '菜单列表',
              noCache: true,
              activeMenu: '/system/menuMgt',
              icon: '',
              breadcrumb: true,
              affix: false
            },
            name: '菜单列表',
            path: 'list',
            pid: 2
          },
          {
            component: '/system/menuMgt/edit',
            hidden: true,
            id: 96,
            stauts: 1,
            sortNo: 2,
            meta: {
              title: '编辑菜单',
              noCache: true,
              activeMenu: '/system/menuMgt',
              icon: '',
              breadcrumb: true,
              affix: false
            },
            name: '编辑菜单',
            path: 'edit',
            pid: 2
          }, {
            component: '/system/menuMgt/create',
            hidden: true,
            id: 7,
            stauts: 1,
            sortNo: 3,
            meta: {
              title: '添加菜单',
              activeMenu: '/system/menuMgt',
              icon: '',
              noCache: true,
              breadcrumb: true,
              affix: false
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
        stauts: 1,
        sortNo: 2,
        meta: {
          title: '用户管理',
          icon: '',
          noCache: false,
          breadcrumb: true,
          affix: false,
          activeMenu: ''
        },
        name: '用户管理',
        path: 'userMgt',
        pid: 1,
        children: [
          {
            component: '/system/userMgt/list',
            hidden: true,
            id: 8,
            stauts: 1,
            sortNo: 1,
            meta: {
              title: '用户列表',
              noCache: true,
              activeMenu: '/system/userMgt',
              icon: '',
              breadcrumb: true,
              affix: false
            },
            name: '用户列表',
            path: 'list',
            pid: 3
          },
          {
            component: '/system/userMgt/edit',
            hidden: true,
            id: 9,
            stauts: 1,
            sortNo: 2,
            meta: {
              title: '编辑用户',
              noCache: true,
              icon: '',
              breadcrumb: true,
              affix: false,
              activeMenu: ''
            },
            name: '编辑用户',
            path: 'edit',
            pid: 3
          }, {
            component: '/system/userMgt/create',
            hidden: true,
            id: 10,
            stauts: 1,
            sortNo: 3,
            meta: {
              title: '添加用户',
              activeMenu: '/system/userMgt',
              icon: '',
              noCache: false,
              breadcrumb: true,
              affix: false
            },
            name: '添加用户',
            path: 'create',
            pid: 3
          }]
      },
      {
        component: '/system/roleMgt/index',
        redirect: '/system/roleMgt/list',
        hidden: false,
        id: 4,
        stauts: 1,
        sortNo: 3,
        meta: {
          title: '角色管理',
          icon: '',
          noCache: false,
          breadcrumb: true,
          affix: false,
          activeMenu: ''
        },
        name: '角色管理',
        path: 'roleMgt',
        pid: 1,
        children: [{
          component: '/system/roleMgt/list',
          hidden: true,
          id: 12,
          stauts: 1,
          sortNo: 1,
          meta: {
            title: '角色列表',
            noCache: true,
            activeMenu: '/system/roleMgt',
            icon: '',
            breadcrumb: true,
            affix: false
          },
          name: '角色列表',
          path: 'list',
          pid: 4
        }]
      }
      ]
    },

    {
      component: '',
      redirect: 'noRedirect',
      hidden: false,
      id: 88,
      stauts: 1,
      sortNo: 2,
      meta: {
        icon: 'el-icon-s-cooperation',
        title: '系统工具',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: ''
      },
      name: '系统工具',
      path: '/systemTools',
      pid: 0,
      children: [
        {
          component: '/systemTools/iconsMgt/index',
          redirect: '/systemTools/iconsMgt/list',
          hidden: false,
          id: 89,
          meta: {
            title: '图标管理',
            icon: '',
            noCache: false,
            breadcrumb: true,
            affix: false,
            activeMenu: ''
          },
          name: '图标管理',
          path: 'iconsMgt',
          pid: 88,
          children: [{
            component: '/systemTools/iconsMgt/list',
            hidden: true,
            id: 90,
            meta: {
              title: '图标列表',
              noCache: true,
              activeMenu: '/systemTools/iconsMgt',
              icon: '',
              breadcrumb: true,
              affix: false
            },
            name: '图标列表',
            path: 'list',
            pid: 89
          }]
        }
      ]
    }
  ]
}, {
  roleId: 2,
  roleName: '普通角色',
  status: false,
  desc: '系统普通用户角色',
  createName: '普通用户',
  createTime: '2021-01-05 09:00:00',
  menusTree: [{
    component: '',
    redirect: 'noRedirect',
    hidden: false,
    id: 88,
    stauts: 1,
    sortNo: 2,
    meta: {
      icon: 'el-icon-s-cooperation',
      title: '系统工具',
      noCache: false,
      breadcrumb: true,
      affix: false,
      activeMenu: ''
    },
    name: '系统工具',
    path: '/systemTools',
    pid: 0,
    children: [
      {
        component: '/systemTools/iconsMgt/index',
        redirect: '/systemTools/iconsMgt/list',
        hidden: false,
        id: 89,
        meta: {
          title: '图标管理',
          icon: '',
          noCache: false,
          breadcrumb: true,
          affix: false,
          activeMenu: ''
        },
        name: '图标管理',
        path: 'iconsMgt',
        pid: 88,
        children: [{
          component: '/systemTools/iconsMgt/list',
          hidden: true,
          id: 90,
          meta: {
            title: '图标列表',
            noCache: true,
            activeMenu: '/systemTools/iconsMgt',
            icon: '',
            breadcrumb: true,
            affix: false
          },
          name: '图标列表',
          path: 'list',
          pid: 89
        }]
      }
    ]
  }]
}
]
module.exports = {
  role_list: list
}
