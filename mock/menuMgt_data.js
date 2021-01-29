
const baseArr = [

  {
    component: '',
    redirect: 'noRedirect',
    hidden: false,
    id: 1,
    status: true,
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
      status: true,
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
          id: 3,
          status: true,
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
          id: 4,
          status: true,
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
          id: 5,
          status: true,
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
      id: 6,
      status: true,
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
          id: 7,
          status: true,
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
          pid: 6
        }]
    },
    {
      component: '/system/companyMgt/index',
      redirect: '/system/companyMgt/list',
      hidden: false,
      id: 8,
      status: true,
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
          id: 9,
          status: true,
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
          pid: 8
        }]
    },
    {
      component: '/system/departMgt/index',
      redirect: '/system/departMgt/list',
      hidden: false,
      id: 10,
      status: true,
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
          id: 11,
          status: true,
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
          pid: 10
        }]
    },
    {
      component: '/system/roleMgt/index',
      redirect: '/system/roleMgt/list',
      hidden: false,
      id: 12,
      status: true,
      sortNo: 4,
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
        id: 13,
        status: true,
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
        pid: 12
      }]
    }
    ]
  },

  {
    component: '',
    redirect: 'noRedirect',
    hidden: false,
    id: 14,
    status: true,
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
        id: 15,
        status: true,
        sortNo: 1,
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
        pid: 14,
        children: [{
          component: '/systemTools/iconsMgt/list',
          hidden: true,
          id: 16,
          status: true,
          sortNo: 1,
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
          pid: 15
        }]
      },
      {
        component: '/systemTools/apiMgt/index',
        redirect: '/systemTools/apiMgt/list',
        hidden: false,
        id: 17,
        status: true,
        sortNo: 2,
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
        pid: 12,
        children: [{
          component: '/systemTools/apiMgt/list',
          hidden: true,
          id: 18,
          status: true,
          sortNo: 1,
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
          pid: 17
        }, {
          component: '/systemTools/apiMgt/detail',
          hidden: true,
          id: 19,
          status: true,
          sortNo: 2,
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
          pid: 17
        }]
      }
    ]
  }
]

module.exports = {
  meuns_list: baseArr
}
