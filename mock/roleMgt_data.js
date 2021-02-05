
const list = [{
  roleId: 1,
  roleName: '管理员角色',
  roleCode: 'admin',
  status: 1,
  desc: '系统管理员角色',
  createName: '用户管理员',
  createTime: '2021-01-05 09:00:00',
  menusTree: [
    {
      component: '',
      redirect: 'noRedirect',
      hidden: false,
      id: 1,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
        component: '/system/companyMgt/index',
        redirect: '/system/companyMgt/list',
        hidden: false,
        id: 6,
        status: 1,
        sortNo: 2,
        meta: {
          title: '公司管理',
          icon: '',
          noCache: false,
          breadcrumb: true,
          affix: false,
          activeMenu: ''
        },
        name: '公司管理',
        path: 'companyMgt',
        pid: 1,
        children: [
          {
            component: '/system/companyMgt/list',
            hidden: true,
            id: 7,
            status: 1,
            sortNo: 1,
            meta: {
              title: '公司列表',
              noCache: true,
              activeMenu: '/system/companyMgt',
              icon: '',
              breadcrumb: true,
              affix: false
            },
            name: '公司列表',
            path: 'list',
            pid: 6
          }]
      },
      {
        component: '/system/departMgt/index',
        redirect: '/system/departMgt/list',
        hidden: false,
        id: 8,
        status: 1,
        sortNo: 3,
        meta: {
          title: '部门管理',
          icon: '',
          noCache: false,
          breadcrumb: true,
          affix: false,
          activeMenu: ''
        },
        name: '部门管理',
        path: 'departMgt',
        pid: 1,
        children: [
          {
            component: '/system/departMgt/list',
            hidden: true,
            id: 9,
            status: 1,
            sortNo: 1,
            meta: {
              title: '部门列表',
              noCache: true,
              activeMenu: '/system/departMgt',
              icon: '',
              breadcrumb: true,
              affix: false
            },
            name: '部门列表',
            path: 'list',
            pid: 8
          }]
      },
      {
        component: '/system/userMgt/index',
        redirect: '/system/userMgt/list',
        hidden: false,
        id: 10,
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
            id: 11,
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
            pid: 10
          },
          {
            component: '/system/userMgt/edit',
            hidden: true,
            id: 12,
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
            pid: 10
          }, {
            component: '/system/userMgt/create',
            hidden: true,
            id: 13,
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
            pid: 10
          }]
      },
      {
        component: '/system/roleMgt/index',
        redirect: '/system/roleMgt/list',
        hidden: false,
        id: 14,
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
          id: 15,
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
          pid: 14
        }]
      }
      ]
    },
    {
      component: '',
      redirect: 'noRedirect',
      hidden: false,
      id: 16,
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
          id: 17,
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
          pid: 16,
          children: [{
            component: '/systemTools/iconsMgt/list',
            hidden: true,
            id: 18,
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
            pid: 17
          }]
        },
        {
          component: '/systemTools/apiMgt/index',
          redirect: '/systemTools/apiMgt/list',
          hidden: false,
          id: 19,
          meta: {
            title: '接口管理',
            icon: '',
            noCache: false,
            breadcrumb: true,
            affix: false,
            activeMenu: ''
          },
          name: '接口管理',
          path: 'apiMgt',
          pid: 17,
          children: [{
            component: '/systemTools/apiMgt/list',
            hidden: true,
            id: 20,
            meta: {
              title: '接口列表',
              noCache: true,
              activeMenu: '/systemTools/apiMgt',
              icon: '',
              breadcrumb: true,
              affix: false
            },
            name: '接口列表',
            path: 'list',
            pid: 19
          }, {
            component: '/systemTools/apiMgt/detail',
            hidden: true,
            id: 21,
            meta: {
              title: '接口详情',
              noCache: true,
              activeMenu: '/systemTools/apiMgt',
              icon: '',
              breadcrumb: true,
              affix: false
            },
            name: '接口详情',
            path: 'detail',
            pid: 19
          }]
        }
      ]
    }
  ],
  menuIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
}, {
  roleId: 2,
  roleCode: 'editor',
  roleName: '普通角色',
  status: 2,
  desc: '系统普通用户角色',
  createName: '普通用户',
  createTime: '2021-01-05 09:00:00',
  menusTree: [{
    component: '',
    redirect: 'noRedirect',
    hidden: false,
    id: 16,
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
        id: 17,
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
        pid: 16,
        children: [{
          component: '/systemTools/iconsMgt/list',
          hidden: true,
          id: 18,
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
          pid: 17
        }]
      },
      {
        component: '/systemTools/apiMgt/index',
        redirect: '/systemTools/apiMgt/list',
        hidden: false,
        id: 19,
        meta: {
          title: '接口管理',
          icon: '',
          noCache: false,
          breadcrumb: true,
          affix: false,
          activeMenu: ''
        },
        name: '接口管理',
        path: 'apiMgt',
        pid: 17,
        children: [{
          component: '/systemTools/apiMgt/list',
          hidden: true,
          id: 20,
          meta: {
            title: '接口列表',
            noCache: true,
            activeMenu: '/systemTools/apiMgt',
            icon: '',
            breadcrumb: true,
            affix: false
          },
          name: '接口列表',
          path: 'list',
          pid: 19
        }]
      }
    ]
  }],
  menuIds: [16, 17, 18, 19, 20]
}
]
module.exports = {
  role_list: list
}
