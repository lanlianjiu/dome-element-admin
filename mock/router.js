const sysArr = [{
  id: 15,
  path: '/documentation',
  meta: {
    icon: 'documentation',
    title: 'Documentation',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: ''
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
      meta: {
        title: 'Documentation',
        activeMenu: '/documentation',
        breadcrumb: false,
        icon: '',
        noCache: false,
        affix: false
      }
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
    title: 'Guide',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: ''
  },
  children: [
    {
      id: 20,
      pid: 6,
      hidden: true,
      path: 'index',
      component: '/guide/index',
      name: 'guide_list',
      meta: {
        title: 'Guide',
        noCache: true,
        breadcrumb: false,
        activeMenu: '/guide',
        icon: '',
        affix: false
      }
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
    title: 'Profile',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: ''
  },
  children: [
    {
      id: 21,
      pid: 17,
      hidden: true,
      path: 'index',
      component: '/profile/index',
      name: 'profile_index',
      meta: {
        title: 'Profile',
        breadcrumb: false,
        noCache: true,
        activeMenu: '/profile',
        icon: '',
        affix: false
      }
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
    icon: 'lock',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: ''
  },
  children: [
    {
      id: 24,
      pid: 22,
      path: 'page',
      component: '/permission/page',
      name: 'PagePermission',
      meta: {
        title: 'Page Permission',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: ''
      }
    },
    {
      id: 25,
      pid: 22,
      path: 'directive',
      component: '/permission/directive',
      name: 'DirectivePermission',
      meta: {
        title: 'Directive Permission',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: ''
      }
    },
    {
      id: 26,
      pid: 22,
      path: 'role',
      component: '/permission/role',
      name: 'RolePermission',
      meta: {
        title: 'Role Permission',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: ''
      }
    }
  ]
},

{
  id: 23,
  path: '/icons',
  component: '',
  name: 'Icons',
  meta: {
    title: 'Icons',
    icon: 'icon',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: ''
  },
  redirect: '/icons/index',
  children: [
    {
      id: 27,
      pid: 23,
      path: 'index',
      component: '/icons/index',
      hidden: true,
      name: 'Icons_index',
      meta: {
        title: 'Icons',
        breadcrumb: false,
        noCache: true,
        icon: '',
        affix: false,
        activeMenu: ''
      }
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
    icon: 'component',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: ''
  },
  children: [
    {
      id: 29,
      pid: 28,
      path: 'tinymce',
      component: '/components-demo/tinymce',
      name: 'TinymceDemo',
      meta: {
        title: 'Tinymce',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: ''
      }
    },
    {
      id: 30,
      pid: 28,
      path: 'markdown',
      component: '/components-demo/markdown',
      name: 'MarkdownDemo',
      meta: { title: 'Markdown',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 31,
      pid: 28,
      path: 'json-editor',
      component: '/components-demo/json-editor',
      name: 'JsonEditorDemo',
      meta: { title: 'JSON Editor',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: ''
      }

    },
    {
      id: 32,
      pid: 28,
      path: 'split-pane',
      component: '/components-demo/split-pane',
      name: 'SplitpaneDemo',
      meta: { title: 'SplitPane',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 33,
      pid: 28,
      path: 'avatar-upload',
      component: '/components-demo/avatar-upload',
      name: 'AvatarUploadDemo',
      meta: { title: 'Upload',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 34,
      pid: 28,
      path: 'dropzone',
      component: '/components-demo/dropzone',
      name: 'DropzoneDemo',
      meta: { title: 'Dropzone',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 35,
      pid: 28,
      path: 'sticky',
      component: '/components-demo/sticky',
      name: 'StickyDemo',
      meta: { title: 'Sticky',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 36,
      pid: 28,
      path: 'count-to',
      component: '/components-demo/count-to',
      name: 'CountToDemo',
      meta: { title: 'Count To',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 37,
      pid: 28,
      path: 'mixin',
      component: '/components-demo/mixin',
      name: 'ComponentMixinDemo',
      meta: { title: 'Component Mixin',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 38,
      pid: 28,
      path: 'back-to-top',
      component: '/components-demo/back-to-top',
      name: 'BackToTopDemo',
      meta: { title: 'Back To Top',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 39,
      pid: 28,
      path: 'drag-dialog',
      component: '/components-demo/drag-dialog',
      name: 'DragDialogDemo',
      meta: { title: 'Drag Dialog',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 40,
      pid: 28,
      path: 'drag-select',
      component: '/components-demo/drag-select',
      name: 'DragSelectDemo',
      meta: { title: 'Drag Select',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: ''
      }
    },
    {
      id: 41,
      pid: 28,
      path: 'dnd-list',
      component: '/components-demo/dnd-list',
      name: 'DndListDemo',
      meta: { title: 'Dnd List',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 42,
      pid: 28,
      path: 'drag-kanban',
      component: '/components-demo/drag-kanban',
      name: 'DragKanbanDemo',
      meta: { title: 'Drag Kanban',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
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
    icon: 'chart',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: ''
  },
  children: [
    {
      id: 44,
      pid: 43,
      path: 'keyboard',
      component: '/charts/keyboard',
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart', noCache: true,
        icon: '',
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 45,
      pid: 43,
      path: 'line',
      component: '/charts/line',
      name: 'LineChart',
      meta: { title: 'Line Chart', noCache: true,
        icon: '',
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 46,
      pid: 43,
      path: 'mix-chart',
      component: '/charts/mix-chart',
      name: 'MixChart',
      meta: { title: 'Mix Chart', noCache: true,
        icon: '',
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
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
      meta: { title: 'Menu 1',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          id: 50,
          pid: 48,
          path: 'menu1-1',
          component: '/nested/menu1/menu1-1',
          name: 'Menu1-1',
          meta: { title: 'Menu 1-1',
            icon: '',
            noCache: false,
            breadcrumb: true,
            affix: false,
            activeMenu: '' }
        },
        {
          id: 51,
          pid: 48,
          path: 'menu1-2',
          component: '/nested/menu1/menu1-2',
          name: 'Menu1-2',
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          meta: { title: 'Menu 1-2',
            noCache: false,
            breadcrumb: true,
            affix: false,
            activeMenu: '' },
          children: [
            {
              id: 53,
              pid: 51,
              path: 'menu1-2-1',
              component: '/nested/menu1/menu1-2/menu1-2-1',
              name: 'Menu1-2-1',
              meta: { title: 'Menu 1-2-1',
                icon: '',
                noCache: false,
                breadcrumb: true,
                affix: false,
                activeMenu: '' }
            },
            {
              id: 54,
              pid: 51,
              path: 'menu1-2-2',
              component: '/nested/menu1/menu1-2/menu1-2-2',
              name: 'Menu1-2-2',
              meta: { title: 'Menu 1-2-2',
                icon: '',
                noCache: false,
                breadcrumb: true,
                affix: false,
                activeMenu: '' }
            }
          ]
        },
        {
          id: 52,
          pid: 48,
          path: 'menu1-3',
          component: '/nested/menu1/menu1-3',
          name: 'Menu1-3',
          meta: { title: 'Menu 1-3',
            icon: '',
            noCache: false,
            breadcrumb: true,
            affix: false,
            activeMenu: '' }
        }
      ]
    },
    {
      id: 49,
      pid: 47,
      path: 'menu2',
      name: 'Menu2',
      component: '/nested/menu2/index',
      meta: { title: 'Menu 2',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
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
    icon: 'table',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: ''
  },
  children: [
    {
      id: 56,
      pid: 55,
      path: 'dynamic-table',
      component: '/table/dynamic-table/index',
      name: 'DynamicTable',
      meta: { title: 'Dynamic Table',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 57,
      pid: 55,
      path: 'drag-table',
      component: '/table/drag-table',
      name: 'DragTable',
      meta: { title: 'Drag Table',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 58,
      pid: 55,
      path: 'inline-edit-table',
      component: '/table/inline-edit-table',
      name: 'InlineEditTable',
      meta: { title: 'Inline Edit',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 59,
      pid: 55,
      path: 'complex-table',
      component: '/table/complex-table',
      name: 'ComplexTable',
      meta: { title: 'Complex Table',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: ''
      }
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
    icon: 'el-icon-s-help',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: ''
  },
  children: [
    {
      id: 61,
      pid: 60,
      path: 'create',
      component: '/example/create',
      name: 'CreateArticle',
      meta: { title: 'Create Article', icon: 'edit',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: ''
      }
    },
    {
      id: 62,
      pid: 60,
      path: 'edit/:id(\\d+)',
      component: '/example/edit',
      name: 'EditArticle',
      meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list',

        icon: '',
        breadcrumb: true,
        affix: false },
      hidden: true
    },
    {
      id: 63,
      pid: 60,
      path: 'list',
      component: '/example/list',
      name: 'ArticleList',
      meta: { title: 'Article List', icon: 'list',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
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
    title: 'Tab',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: ''
  },
  children: [
    {
      id: 65,
      pid: 64,
      path: 'index',
      hidden: true,
      component: '/tab/index',
      name: 'Tab_index',
      meta: { title: 'Tab', breadcrumb: false, activeMenu: '/tab',
        icon: '',
        noCache: false,
        affix: false }
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
    icon: '404',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: ''
  },
  children: [
    {
      id: 67,
      pid: 66,
      path: '401',
      component: '/error-page/401',
      name: 'Page401',
      meta: { title: '401', noCache: true,
        icon: '',
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 68,
      pid: 66,
      path: '404',
      component: '/error-page/404',
      name: 'Page404',
      meta: { title: '404', noCache: true,
        icon: '',
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    }
  ]
},
{
  id: 76,
  path: '/error-log',
  component: '',
  redirect: '/error-log/index',
  name: 'ErrorLog',
  meta: { title: 'Error Log', icon: 'bug',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: '' },
  children: [
    {
      id: 77,
      pid: 76,
      path: 'index',
      hidden: true,
      component: '/error-log/index',
      name: 'ErrorLog_index',
      meta: { title: 'Error Log', icon: 'bug', breadcrumb: false,

        noCache: false,
        affix: false,
        activeMenu: '' }
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
    icon: 'excel',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: ''
  },
  children: [
    {
      id: 70,
      pid: 69,
      path: 'export-excel',
      component: '/excel/export-excel',
      name: 'ExportExcel',
      meta: { title: 'Export Excel',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 71,
      pid: 69,
      path: 'export-selected-excel',
      component: '/excel/select-excel',
      name: 'SelectExcel',
      meta: { title: 'Export Selected',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 72,
      pid: 69,
      path: 'export-merge-header',
      component: '/excel/merge-header',
      name: 'MergeHeader',
      meta: { title: 'Merge Header',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
    },
    {
      id: 73,
      pid: 69,
      path: 'upload-excel',
      component: '/excel/upload-excel',
      name: 'UploadExcel',
      meta: { title: 'Upload Excel',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false,
        activeMenu: '' }
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
  meta: { title: 'Zip', icon: 'zip',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: '' },
  children: [
    {
      id: 75,
      pid: 74,
      path: 'download',
      component: '/zip/index',
      name: 'ExportZip',
      meta: { title: 'Export Zip', activeMenu: '/zip',
        icon: '',
        noCache: false,
        breadcrumb: true,
        affix: false }
    }
  ]
},

{
  id: 78,
  path: '/pdf',
  component: '',
  redirect: '/pdf/index',
  name: 'PDF',
  meta: { title: 'PDF', icon: 'pdf',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: '' },
  children: [
    {
      id: 79,
      pid: 78,
      path: 'index',
      hidden: true,
      component: '/pdf/index',
      name: 'PDF_index',
      meta: {
        title: 'PDF',
        breadcrumb: false,
        activeMenu: '/pdf',
        icon: '',
        noCache: false,
        affix: false
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
  meta: { title: 'Theme', icon: 'theme',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: '' },
  children: [
    {
      id: 81,
      pid: 80,
      path: 'index',
      hidden: true,
      component: '/theme/index',
      name: 'Theme_index',
      meta: { title: 'Theme', breadcrumb: false,
        icon: '',
        noCache: false,
        affix: false,
        activeMenu: '' }
    }
  ]
},

{
  id: 82,
  path: '/clipboard',
  component: '',
  redirect: '/clipboard/index',
  name: 'Clipboard',
  meta: { title: 'Clipboard', icon: 'clipboard',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: '' },
  children: [
    {
      id: 83,
      pid: 82,
      path: 'index',
      hidden: true,
      component: '/clipboard/index',
      name: 'ClipboardDemo_index',
      meta: { title: 'Clipboard', breadcrumb: false,
        icon: '',
        noCache: false,
        affix: false,
        activeMenu: '' }
    }
  ]
},
// 下载外链
{
  id: 87,
  pid: 0,
  path: '/pdf/download',
  is_external_link: true,
  component: '/pdf/download',
  hidden: true,
  name: 'download',
  meta: { title: 'pdf download',
    icon: '',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: '' },
  children: []
},
// 菜单外链
{
  id: 84,
  pid: 0,
  path: 'https://github.com/PanJiaChen/vue-element-admin',
  is_external_link: true,
  component: 'https://github.com/PanJiaChen/vue-element-admin',
  name: 'External Link',
  meta: { title: 'External Link', icon: 'link',
    noCache: false,
    breadcrumb: true,
    affix: false,
    activeMenu: '' },
  children: []
}]

const baseArr = [

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
          id: 5,
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
          id: 6,
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

module.exports = sysArr.concat(baseArr)

