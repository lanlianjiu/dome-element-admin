module.exports = [

  {
    id: 15,
    path: '/documentation',
    meta: {
      icon: 'documentation',
      title: 'Documentation'
    },
    name: 'Documentation',
    redirect: '/documentation/index',
    component: '',
    children: [
      {
        id: 19,
        pid: 15,
        path: 'index',
        component: '/documentation/index',
        name: 'list',
        hidden: true,
        meta: { title: 'Documentation', activeMenu: '/documentation', breadcrumb: false }
      }
    ]
  },
  {
    id: 6,
    path: '/guide',
    component: '',
    name: 'Guide',
    redirect: '/guide/index',
    meta: {
      icon: 'guide',
      title: 'Guide'
    },
    children: [
      {
        id: 20,
        pid: 6,
        hidden: true,
        path: 'index',
        component: '/guide/index',
        name: 'guide_list',
        meta: { title: 'Guide', noCache: true, breadcrumb: false, activeMenu: '/guide' }
      }
    ]
  },
  {
    id: 17,
    path: '/profile',
    component: '',
    name: 'Profile',
    redirect: '/profile/index',
    meta: {
      icon: 'user',
      title: 'Profile'
    },
    children: [
      {
        id: 21,
        pid: 17,
        hidden: true,
        path: 'index',
        component: '/profile/index',
        name: 'profile_index',
        meta: { title: 'Profile', breadcrumb: false, noCache: true, activeMenu: '/profile' }
      }
    ]
  },
  {
    id: 22,
    path: '/permission',
    component: '',
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock'
    },
    children: [
      {
        id: 24,
        pid: 22,
        path: 'page',
        component: '/permission/page',
        name: 'PagePermission',
        meta: {
          title: 'Page Permission'
        }
      },
      {
        id: 25,
        pid: 22,
        path: 'directive',
        component: '/permission/directive',
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
        }
      },
      {
        id: 26,
        pid: 22,
        path: 'role',
        component: '/permission/role',
        name: 'RolePermission',
        meta: {
          title: 'Role Permission'
        }
      }
    ]
  },

  {
    id: 23,
    path: '/icons',
    component: '',
    name: 'Icons',
    meta: { title: 'Icons', icon: 'icon' },
    redirect: '/icons/index',
    children: [
      {
        id: 27,
        pid: 23,
        path: 'index',
        component: '/icons/index',
        hidden: true,
        name: 'Icons_index',
        meta: { title: 'Icons', breadcrumb: false, noCache: true }
      }
    ]
  },
  {
    id: 28,
    path: '/components',
    component: '',
    redirect: 'noRedirect',
    name: 'ComponentDemo',
    meta: {
      title: 'Components',
      icon: 'component'
    },
    children: [
      {
        id: 29,
        pid: 28,
        path: 'tinymce',
        component: '/components-demo/tinymce',
        name: 'TinymceDemo',
        meta: { title: 'Tinymce' }
      },
      {
        id: 30,
        pid: 28,
        path: 'markdown',
        component: '/components-demo/markdown',
        name: 'MarkdownDemo',
        meta: { title: 'Markdown' }
      },
      {
        id: 31,
        pid: 28,
        path: 'json-editor',
        component: '/components-demo/json-editor',
        name: 'JsonEditorDemo',
        meta: { title: 'JSON Editor' }
      },
      {
        id: 32,
        pid: 28,
        path: 'split-pane',
        component: '/components-demo/split-pane',
        name: 'SplitpaneDemo',
        meta: { title: 'SplitPane' }
      },
      {
        id: 33,
        pid: 28,
        path: 'avatar-upload',
        component: '/components-demo/avatar-upload',
        name: 'AvatarUploadDemo',
        meta: { title: 'Upload' }
      },
      {
        id: 34,
        pid: 28,
        path: 'dropzone',
        component: '/components-demo/dropzone',
        name: 'DropzoneDemo',
        meta: { title: 'Dropzone' }
      },
      {
        id: 35,
        pid: 28,
        path: 'sticky',
        component: '/components-demo/sticky',
        name: 'StickyDemo',
        meta: { title: 'Sticky' }
      },
      {
        id: 36,
        pid: 28,
        path: 'count-to',
        component: '/components-demo/count-to',
        name: 'CountToDemo',
        meta: { title: 'Count To' }
      },
      {
        id: 37,
        pid: 28,
        path: 'mixin',
        component: '/components-demo/mixin',
        name: 'ComponentMixinDemo',
        meta: { title: 'Component Mixin' }
      },
      {
        id: 38,
        pid: 28,
        path: 'back-to-top',
        component: '/components-demo/back-to-top',
        name: 'BackToTopDemo',
        meta: { title: 'Back To Top' }
      },
      {
        id: 39,
        pid: 28,
        path: 'drag-dialog',
        component: '/components-demo/drag-dialog',
        name: 'DragDialogDemo',
        meta: { title: 'Drag Dialog' }
      },
      {
        id: 40,
        pid: 28,
        path: 'drag-select',
        component: '/components-demo/drag-select',
        name: 'DragSelectDemo',
        meta: { title: 'Drag Select' }
      },
      {
        id: 41,
        pid: 28,
        path: 'dnd-list',
        component: '/components-demo/dnd-list',
        name: 'DndListDemo',
        meta: { title: 'Dnd List' }
      },
      {
        id: 42,
        pid: 28,
        path: 'drag-kanban',
        component: '/components-demo/drag-kanban',
        name: 'DragKanbanDemo',
        meta: { title: 'Drag Kanban' }
      }
    ]
  },
  {
    id: 43,
    path: '/charts',
    component: '',
    redirect: 'noRedirect',
    name: 'Charts',
    meta: {
      title: 'Charts',
      icon: 'chart'
    },
    children: [
      {
        id: 44,
        pid: 43,
        path: 'keyboard',
        component: '/charts/keyboard',
        name: 'KeyboardChart',
        meta: { title: 'Keyboard Chart', noCache: true }
      },
      {
        id: 45,
        pid: 43,
        path: 'line',
        component: '/charts/line',
        name: 'LineChart',
        meta: { title: 'Line Chart', noCache: true }
      },
      {
        id: 46,
        pid: 43,
        path: 'mix-chart',
        component: '/charts/mix-chart',
        name: 'MixChart',
        meta: { title: 'Mix Chart', noCache: true }
      }
    ]
  },
  {
    id: 47,
    path: '/nested',
    component: '',
    redirect: '/nested/menu1/menu1-1',
    name: 'Nested',
    meta: {
      title: 'Nested Routes',
      icon: 'nested'
    },
    children: [
      {
        id: 48,
        pid: 47,
        path: 'menu1',
        component: '/nested/menu1/index', // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu 1' },
        redirect: '/nested/menu1/menu1-1',
        children: [
          {
            id: 50,
            pid: 48,
            path: 'menu1-1',
            component: '/nested/menu1/menu1-1',
            name: 'Menu1-1',
            meta: { title: 'Menu 1-1' }
          },
          {
            id: 51,
            pid: 48,
            path: 'menu1-2',
            component: '/nested/menu1/menu1-2',
            name: 'Menu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: { title: 'Menu 1-2' },
            children: [
              {
                id: 53,
                pid: 51,
                path: 'menu1-2-1',
                component: '/nested/menu1/menu1-2/menu1-2-1',
                name: 'Menu1-2-1',
                meta: { title: 'Menu 1-2-1' }
              },
              {
                id: 54,
                pid: 51,
                path: 'menu1-2-2',
                component: '/nested/menu1/menu1-2/menu1-2-2',
                name: 'Menu1-2-2',
                meta: { title: 'Menu 1-2-2' }
              }
            ]
          },
          {
            id: 52,
            pid: 48,
            path: 'menu1-3',
            component: '/nested/menu1/menu1-3',
            name: 'Menu1-3',
            meta: { title: 'Menu 1-3' }
          }
        ]
      },
      {
        id: 49,
        pid: 47,
        path: 'menu2',
        name: 'Menu2',
        component: '/nested/menu2/index',
        meta: { title: 'Menu 2' }
      }
    ]
  },
  {
    id: 55,
    path: '/table',
    component: '',
    redirect: '/table/complex-table',
    name: 'Table',
    meta: {
      title: 'Table',
      icon: 'table'
    },
    children: [
      {
        id: 56,
        pid: 55,
        path: 'dynamic-table',
        component: '/table/dynamic-table/index',
        name: 'DynamicTable',
        meta: { title: 'Dynamic Table' }
      },
      {
        id: 57,
        pid: 55,
        path: 'drag-table',
        component: '/table/drag-table',
        name: 'DragTable',
        meta: { title: 'Drag Table' }
      },
      {
        id: 58,
        pid: 55,
        path: 'inline-edit-table',
        component: '/table/inline-edit-table',
        name: 'InlineEditTable',
        meta: { title: 'Inline Edit' }
      },
      {
        id: 59,
        pid: 55,
        path: 'complex-table',
        component: '/table/complex-table',
        name: 'ComplexTable',
        meta: { title: 'Complex Table' }
      }
    ]
  },
  {
    id: 60,
    path: '/example',
    component: '',
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        id: 61,
        pid: 60,
        path: 'create',
        component: '/example/create',
        name: 'CreateArticle',
        meta: { title: 'Create Article', icon: 'edit' }
      },
      {
        id: 62,
        pid: 60,
        path: 'edit/:id(\\d+)',
        component: '/example/edit',
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        id: 63,
        pid: 60,
        path: 'list',
        component: '/example/list',
        name: 'ArticleList',
        meta: { title: 'Article List', icon: 'list' }
      }
    ]
  },

  {
    id: 64,
    path: '/tab',
    component: '',
    name: 'Tab',
    redirect: '/tab/index',
    meta: {
      icon: 'tab',
      title: 'Tab'
    },
    children: [
      {
        id: 65,
        pid: 64,
        path: 'index',
        hidden: true,
        component: '/tab/index',
        name: 'Tab_index',
        meta: { title: 'Tab', breadcrumb: false, activeMenu: '/tab' }
      }
    ]
  },

  {
    id: 66,
    path: '/error',
    component: '',
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        id: 67,
        pid: 66,
        path: '401',
        component: '/error-page/401',
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        id: 68,
        pid: 66,
        path: '404',
        component: '/error-page/404',
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },
  {
    id: 76,
    path: '/error-log',
    component: '',
    redirect: '/error-log/index',
    name: 'ErrorLog',
    meta: { title: 'Error Log', icon: 'bug' },
    children: [
      {
        id: 77,
        pid: 76,
        path: 'index',
        hidden: true,
        component: '/error-log/index',
        name: 'ErrorLog_index',
        meta: { title: 'Error Log', icon: 'bug', breadcrumb: false }
      }
    ]
  },

  {
    id: 69,
    path: '/excel',
    component: '',
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'Excel',
      icon: 'excel'
    },
    children: [
      {
        id: 70,
        pid: 69,
        path: 'export-excel',
        component: '/excel/export-excel',
        name: 'ExportExcel',
        meta: { title: 'Export Excel' }
      },
      {
        id: 71,
        pid: 69,
        path: 'export-selected-excel',
        component: '/excel/select-excel',
        name: 'SelectExcel',
        meta: { title: 'Export Selected' }
      },
      {
        id: 72,
        pid: 69,
        path: 'export-merge-header',
        component: '/excel/merge-header',
        name: 'MergeHeader',
        meta: { title: 'Merge Header' }
      },
      {
        id: 73,
        pid: 69,
        path: 'upload-excel',
        component: '/excel/upload-excel',
        name: 'UploadExcel',
        meta: { title: 'Upload Excel' }
      }
    ]
  },

  {
    id: 74,
    path: '/zip',
    component: '',
    redirect: '/zip/download',
    alwaysShow: true,
    name: 'Zip',
    meta: { title: 'Zip', icon: 'zip' },
    children: [
      {
        id: 75,
        pid: 74,
        path: 'download',
        component: '/zip/index',
        name: 'ExportZip',
        meta: { title: 'Export Zip', activeMenu: '/zip' }
      }
    ]
  },

  {
    id: 78,
    path: '/pdf',
    component: '',
    redirect: '/pdf/index',
    name: 'PDF',
    meta: { title: 'PDF', icon: 'pdf' },
    children: [
      {
        id: 79,
        pid: 78,
        path: 'index',
        hidden: true,
        component: '/pdf/index',
        name: 'PDF_index',
        meta: {
          title: 'PDF', breadcrumb: false, activeMenu: '/pdf'
        }
      }

    ]
  },

  {
    id: 80,
    path: '/theme',
    component: '',
    redirect: '/theme/index',
    name: 'Theme',
    meta: { title: 'Theme', icon: 'theme' },
    children: [
      {
        id: 81,
        pid: 80,
        path: 'index',
        hidden: true,
        component: '/theme/index',
        name: 'Theme_index',
        meta: { title: 'Theme', breadcrumb: false }
      }
    ]
  },

  {
    id: 82,
    path: '/clipboard',
    component: '',
    redirect: '/clipboard/index',
    name: 'Clipboard',
    meta: { title: 'Clipboard', icon: 'clipboard' },
    children: [
      {
        id: 83,
        pid: 82,
        path: 'index',
        hidden: true,
        component: '/clipboard/index',
        name: 'ClipboardDemo_index',
        meta: { title: 'Clipboard', breadcrumb: false }
      }
    ]
  },
  // 下载外链
  {
    id: 87,
    pid: 78,
    path: '/pdf/download',
    is_external_link: true,
    component: '/pdf/download',
    hidden: true,
    name: 'download'
  },
  // 菜单外链
  {
    id: 84,
    path: 'https://github.com/PanJiaChen/vue-element-admin',
    is_external_link: true,
    component: '',
    name: 'External Link',
    meta: { title: 'External Link', icon: 'link' }
  },

  {
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
          id: 5,
          meta: {
            title: '菜单列表',
            noCache: true,
            activeMenu: '/system/menuMgt'
          },
          name: '菜单列表',
          path: 'list',
          pid: 2
        },
        {
          component: '/system/menuMgt/edit',
          hidden: true,
          id: 6,
          meta: {
            title: '编辑菜单',
            noCache: true,
            activeMenu: '/system/menuMgt'
          },
          name: '编辑菜单',
          path: 'edit',
          pid: 2
        }, {
          component: '/system/menuMgt/create',
          hidden: true,
          id: 7,
          meta: {
            title: '添加菜单',
            activeMenu: '/system/menuMgt'
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
          id: 8,
          meta: {
            title: '用户列表',
            noCache: true,
            activeMenu: '/system/userMgt'
          },
          name: '用户列表',
          path: 'list',
          pid: 3
        },
        {
          component: '/system/userMgt/edit',
          hidden: true,
          id: 9,
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
          id: 10,
          meta: {
            title: '添加用户',
            activeMenu: '/system/userMgt'
          },
          name: '添加用户',
          path: '/system/userMgt/create',
          pid: 3
        }, {
          component: '/system/userMgt/userTorole',
          hidden: true,
          id: 11,
          meta: {
            title: '分配角色',
            activeMenu: '/system/userMgt'
          },
          name: '分配角色',
          path: '/system/userMgt/userTorole',
          pid: 3
        }]
    },
    {
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
        id: 12,
        meta: {
          title: '角色列表',
          noCache: true,
          activeMenu: '/system/roleMgt'
        },
        name: '角色列表',
        path: 'list',
        pid: 4
      }, {
        component: '/system/roleMgt/roleTomenu',
        hidden: true,
        id: 13,
        meta: {
          title: '角色授权',
          noCache: true,
          activeMenu: '/system/roleMgt'
        },
        name: '角色授权',
        path: 'roleTomenu',
        pid: 4
      }]
    }
    ]
  }

]

