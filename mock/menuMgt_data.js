/*
 * @Descripttion:
 * @Author: ex_lanlj2@partner.midea.com
 * @Date: 2020-12-25 11:46:39
 * @LastEditors: ex_lanlj2@partner.midea.com
 * @LastEditTime: 2020-12-25 18:12:19
 */
const list = [
  {
    id: 1,
    pid: 0,
    name: '系统管理',
    pname: '',
    path: '/system',
    component: '',
    redirect: 'noRedirect',
    alwaysShow: false,
    hidden: false,
    is_external_link: false,
    stauts: 1,
    sortNo: 1,
    meta: {
      title: '系统管理',
      icon: '',
      noCache: false,
      breadcrumb: true,
      affix: false,
      activeMenu: ''
    }
  },
  {
    id: 2,
    pid: 1,
    name: '菜单管理',
    pname: '系统管理',
    path: 'menuMgt',
    component: '/system/menuMgt/index',
    redirect: '/system/menuMgt/list',
    alwaysShow: false,
    hidden: false,
    is_external_link: false,
    stauts: 1,
    sortNo: 1,
    meta: {
      title: '菜单管理',
      icon: '',
      noCache: false,
      breadcrumb: true,
      affix: false,
      activeMenu: ''
    }
  },
  {
    id: 5,
    pid: 2,
    name: '菜单列表',
    pname: '菜单管理',
    path: 'list',
    component: '/system/menuMgt/list',
    redirect: '',
    alwaysShow: false,
    hidden: true,
    is_external_link: false,
    stauts: 1,
    sortNo: 1,
    meta: {
      title: '菜单列表',
      icon: '',
      noCache: false,
      breadcrumb: true,
      affix: false,
      activeMenu: '/system/menuMgt'
    }
  },
  {
    id: 6,
    pid: 2,
    name: '编辑菜单',
    pname: '菜单管理',
    path: 'edit',
    component: '/system/menuMgt/edit',
    redirect: '',
    alwaysShow: false,
    hidden: false,
    is_external_link: false,
    stauts: 1,
    sortNo: 2,
    meta: {
      title: '编辑菜单',
      icon: '',
      noCache: false,
      breadcrumb: true,
      affix: false,
      activeMenu: '/system/menuMgt'
    }
  },
  {
    id: 7,
    pid: 2,
    name: '添加菜单',
    pname: '菜单管理',
    path: 'create',
    component: '/system/menuMgt/create',
    redirect: '',
    alwaysShow: false,
    hidden: false,
    is_external_link: false,
    stauts: 1,
    sortNo: 3,
    meta: {
      title: '添加菜单',
      icon: '',
      noCache: true,
      breadcrumb: true,
      affix: false,
      activeMenu: '/system/menuMgt'
    }
  },
  {
    id: 3,
    pid: 0,
    name: '用户管理',
    pname: '系统管理',
    path: 'userMgt',
    component: '/system/userMgt/index',
    redirect: '/system/userMgt/list',
    alwaysShow: false,
    hidden: false,
    is_external_link: false,
    stauts: 1,
    sortNo: 2,
    meta: {
      title: '用户管理',
      icon: '',
      noCache: false,
      breadcrumb: true,
      affix: false,
      activeMenu: '/system/userMgt'
    }
  },
  {
    id: 8,
    pid: 3,
    name: '用户列表',
    pname: '用户管理',
    path: 'list',
    component: '/system/userMgt/list',
    redirect: '',
    alwaysShow: false,
    hidden: true,
    is_external_link: false,
    stauts: 1,
    sortNo: 1,
    meta: {
      title: '用户列表',
      icon: '',
      noCache: false,
      breadcrumb: true,
      affix: false,
      activeMenu: '/system/userMgt'
    }
  },
  {
    id: 9,
    pid: 3,
    name: '编辑用户',
    pname: '用户管理',
    path: 'edit',
    component: '/system/userMgt/edit',
    redirect: '',
    alwaysShow: false,
    hidden: true,
    is_external_link: false,
    stauts: 1,
    sortNo: 2,
    meta: {
      title: '编辑用户',
      icon: '',
      noCache: false,
      breadcrumb: true,
      affix: false,
      activeMenu: '/system/userMgt'
    }
  },
  {
    id: 10,
    pid: 3,
    name: '添加用户',
    pname: '用户管理',
    path: 'create',
    component: '/system/userMgt/create',
    redirect: '',
    alwaysShow: false,
    hidden: true,
    is_external_link: false,
    stauts: 1,
    sortNo: 3,
    meta: {
      title: '添加用户',
      icon: '',
      noCache: false,
      breadcrumb: true,
      affix: false,
      activeMenu: '/system/userMgt'
    }
  },
  {
    id: 4,
    pid: 1,
    name: '角色管理',
    pname: '系统管理',
    path: 'roleMgt',
    component: '/system/roleMgt/index',
    redirect: '/system/roleMgt/list',
    alwaysShow: false,
    hidden: false,
    is_external_link: false,
    stauts: 1,
    sortNo: 3,
    meta: {
      title: '角色管理',
      icon: '',
      noCache: false,
      breadcrumb: true,
      affix: false,
      activeMenu: '/system/roleMgt'
    }
  },
  {
    id: 12,
    pid: 4,
    name: '角色列表',
    pname: '角色管理',
    path: 'roleMgt',
    component: '/system/roleMgt/list',
    redirect: '',
    alwaysShow: false,
    hidden: true,
    is_external_link: false,
    stauts: 1,
    sortNo: 1,
    meta: {
      title: '角色列表',
      icon: '',
      noCache: false,
      breadcrumb: true,
      affix: false,
      activeMenu: '/system/roleMgt'
    }
  },
  {
    id: 88,
    pid: 0,
    name: '系统工具',
    pname: '',
    path: '/systemTools',
    component: '',
    redirect: 'noRedirect',
    alwaysShow: false,
    hidden: false,
    is_external_link: false,
    stauts: 1,
    sortNo: 2,
    meta: {
      title: '系统工具',
      icon: 'el-icon-s-cooperation',
      noCache: false,
      breadcrumb: true,
      affix: false,
      activeMenu: ''
    }
  },
  {
    id: 89,
    pid: 88,
    name: '图标管理',
    pname: '系统工具',
    path: 'iconsMgt',
    component: '/systemTools/iconsMgt/list',
    redirect: '/systemTools/iconsMgt/index',
    alwaysShow: false,
    hidden: false,
    is_external_link: false,
    stauts: 1,
    sortNo: 1,
    meta: {
      title: '图标管理',
      icon: '',
      noCache: false,
      breadcrumb: true,
      affix: false,
      activeMenu: ''
    }
  },
  {
    id: 90,
    pid: 89,
    name: '图标列表',
    pname: '图标管理',
    path: 'iconsMgt',
    component: '/systemTools/iconsMgt/list',
    redirect: '',
    alwaysShow: false,
    hidden: true,
    is_external_link: false,
    stauts: 1,
    sortNo: 1,
    meta: {
      title: '图标列表',
      icon: '',
      noCache: false,
      breadcrumb: true,
      affix: false,
      activeMenu: '/systemTools/iconsMgt'
    }
  }
]

module.exports = {
  list: list
}
