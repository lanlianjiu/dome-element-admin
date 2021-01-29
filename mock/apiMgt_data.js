const list = [
  {
    apiId: 1,
    apiName: '登录接口',
    apiType: 'POST',
    apiUrl: '/admin/user/login',
    desc: '系统登录接口',
    Headers: [
      {
        parmasId: 1,
        parmasName: 'Content-Type',
        parmaValue: 'application/json',
        is_requried: true,
        desc: 'JSON类型传参'
      },
      {
        parmasId: 2,
        parmasName: 'access-token',
        parmaValue: '123456',
        is_requried: true,
        desc: 'token校验登录'
      }
    ],
    Body: [
      {
        parmasId: 3,
        parmasName: 'companyCode',
        is_requried: true,
        parmaType: 'String',
        desc: '公司编码'
      },
      {
        parmasId: 4,
        parmasName: 'userName',
        is_requried: true,
        parmaType: 'String',
        desc: '登录账号'
      },
      {
        parmasId: 5,
        parmasName: 'passWord',
        is_requried: true,
        parmaType: 'String',
        desc: '登录密码'
      }
    ],
    Query: [],
    callBackdata: [
      {
        parmasId: 6,
        parmasName: 'code',
        parmaType: 'Number',
        parmaValue: 20000,
        parmasDefault: '',
        is_requried: true,
        desc: '返回编码：\n  200000：正常; \n50008: 非法令牌(Illegal token);\n50012: 其他客户端已登录(Other clients logged in);\n50014: 令牌已过期(Token expired);'
      },
      {
        parmasId: 8,
        parmasName: 'data',
        parmaType: 'Object',
        parmaValue: '',
        parmasDefault: '',
        is_requried: true,
        desc: '',
        children: [{
          parmasId: 9,
          parmasName: 'token',
          parmaType: 'String',
          parmaValue: 'admin-token',
          parmasDefault: '',
          is_requried: true,
          desc: '返回token值'
        }]
      }
    ],
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  },
  {
    apiId: 2,
    apiName: '退出登录接口',
    apiType: 'POST',
    apiUrl: '/admin/user/logout',
    desc: '系统退出登录',
    Headers: [{
      parmasId: 10,
      parmasName: 'Content-Type',
      parmaValue: 'application/json',
      is_requried: true,
      desc: 'JSON类型传参'
    },
    {
      parmasId: 11,
      parmasName: 'access-token',
      parmaValue: '123456',
      is_requried: true,
      desc: 'token校验登录'
    }],
    Body: [],
    Query: [],
    callBackdata: [{
      parmasId: 12,
      parmasName: 'code',
      parmaType: 'Number',
      parmaValue: 20000,
      parmasDefault: '',
      is_requried: true,
      desc: ''
    }, {
      parmasId: 13,
      parmasName: 'data',
      parmaType: 'String',
      parmaValue: '操作成功',
      parmasDefault: '',
      is_requried: true,
      desc: '' }],
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  },
  {
    apiId: 3,
    apiName: '菜单模块->菜单列表',
    apiType: 'POST',
    apiUrl: '/admin/menuMgt/list',
    Headers: [
      {
        parmasId: 1,
        parmasName: 'Content-Type',
        parmaValue: 'application/json',
        is_requried: true,
        desc: 'JSON类型传参'
      },
      {
        parmasId: 2,
        parmasName: 'access-token',
        parmaValue: '123456',
        is_requried: true,
        desc: 'token校验登录'
      }
    ],
    Body: [{
      parmasId: 2,
      parmasName: 'menusName',
      parmaValue: '',
      is_requried: false,
      desc: '菜单名称'
    }],
    Query: [],
    callBackdata: [
      {
        parmasId: 68,
        parmasName: 'code',
        parmaType: 'Number',
        parmaValue: 20000,
        parmasDefault: '',
        is_requried: true,
        desc: ''
      },
      {
        parmasId: 69,
        parmasName: 'data',
        parmaType: 'Array',
        parmaValue: '',
        parmasDefault: '',
        is_requried: true,
        desc: '',
        children: [
          {
            parmasId: 14,
            parmasName: 'id',
            parmaType: 'Number',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '菜单ID'
          }, {
            parmasId: 15,
            parmasName: 'pid',
            parmaType: 'Number',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '菜单父级ID'
          },
          {
            parmasId: 16,
            parmasName: 'name',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '菜单名称'
          },
          {
            parmasId: 17,
            parmasName: 'component',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '组件路径'
          }, {
            parmasId: 18,
            parmasName: 'path',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '路由路径'
          },
          {
            parmasId: 19,
            parmasName: 'redirect',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '标签重定向路径'
          },
          {
            parmasId: 20,
            parmasName: 'sortNo',
            parmaType: 'Number',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '排序号'
          },
          {
            parmasId: 21,
            parmasName: 'hidden',
            parmaType: 'Boolean',
            parmaValue: '',
            parmasDefault: false,
            is_requried: true,
            desc: '菜单是否隐藏'
          },
          {
            parmasId: 50,
            parmasName: 'is_external_link',
            parmaType: 'Boolean',
            parmaValue: '',
            parmasDefault: false,
            is_requried: true,
            desc: '菜单是否是外链'
          },
          {
            parmasId: 54,
            parmasName: 'alwaysShow',
            parmaType: 'Boolean',
            parmaValue: '',
            parmasDefault: false,
            is_requried: false,
            desc: '一直显示根路由'
          },
          {
            parmasId: 22,
            parmasName: 'status',
            parmaType: 'Boolean',
            parmaValue: '',
            parmasDefault: true,
            is_requried: true,
            desc: '菜单状态'
          },
          {
            parmasId: 23,
            parmasName: 'meta',
            parmaType: 'JSON',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '其他设置对象（存进json字符串）',
            children: [{
              parmasId: 25,
              parmasName: 'title',
              parmaType: 'String',
              parmaValue: '',
              parmasDefault: '',
              is_requried: true,
              desc: '标签名称'
            }, {
              parmasId: 26,
              parmasName: 'noCache',
              parmaType: 'Boolean',
              parmaValue: '',
              parmasDefault: false,
              is_requried: true,
              desc: '是否缓存页面'
            }, {
              parmasId: 27,
              parmasName: 'activeMenu',
              parmaType: 'Boolean',
              parmaValue: '',
              parmasDefault: '',
              is_requried: false,
              desc: '高亮页面（路径）'
            }, {
              parmasId: 28,
              parmasName: 'icon',
              parmaType: 'String',
              parmaValue: '',
              parmasDefault: '',
              is_requried: false,
              desc: '菜单图标'
            }, {
              parmasId: 29,
              parmasName: 'breadcrumb',
              parmaType: 'Boolean',
              parmaValue: '',
              parmasDefault: false,
              is_requried: false,
              desc: '是否面包屑中显示'
            }, {
              parmasId: 30,
              parmasName: 'affix',
              parmaType: 'Boolean',
              parmaValue: '',
              parmasDefault: false,
              is_requried: false,
              desc: '是否固定viewTag中显示'
            }]
          },
          {
            parmasId: 24,
            parmasName: 'children',
            parmaType: 'Array',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '子级菜单(子级菜单的结构依次重复结构)(为空时返回空数组)',
            children: [
              {
                parmasId: 31,
                parmasName: 'id',
                parmaType: 'Number',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '菜单ID'
              },
              {
                parmasId: 32,
                parmasName: 'pid',
                parmaType: 'Number',
                parmaValue: '',
                parmasDefault: '',
                is_requried: false,
                desc: '菜单父级ID'
              },
              {
                parmasId: 33,
                parmasName: 'name',
                parmaType: 'String',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '菜单名称'
              },
              {
                parmasId: 34,
                parmasName: 'component',
                parmaType: 'String',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '组件路径'
              }, {
                parmasId: 35,
                parmasName: 'path',
                parmaType: 'String',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '路由路径'
              },
              {
                parmasId: 36,
                parmasName: 'redirect',
                parmaType: 'String',
                parmaValue: '',
                parmasDefault: '',
                is_requried: false,
                desc: '标签重定向路径'
              },
              {
                parmasId: 37,
                parmasName: 'sortNo',
                parmaType: 'Number',
                parmaValue: '',
                parmasDefault: '',
                is_requried: false,
                desc: '排序号'
              },
              {
                parmasId: 38,
                parmasName: 'hidden',
                parmaType: 'Boolean',
                parmaValue: '',
                parmasDefault: false,
                is_requried: true,
                desc: '菜单是否隐藏'
              },
              {
                parmasId: 51,
                parmasName: 'is_external_link',
                parmaType: 'Boolean',
                parmaValue: '',
                parmasDefault: false,
                is_requried: true,
                desc: '菜单是否是外链'
              },
              {
                parmasId: 39,
                parmasName: 'status',
                parmaType: 'Boolean',
                parmaValue: '',
                parmasDefault: true,
                is_requried: true,
                desc: '菜单状态'
              },
              {
                parmasId: 40,
                parmasName: 'meta',
                parmaType: 'JSON',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '其他设置对象（存进json字符串）',
                children: [{
                  parmasId: 41,
                  parmasName: 'title',
                  parmaType: 'String',
                  parmaValue: '',
                  parmasDefault: '',
                  is_requried: true,
                  desc: '标签名称'
                }, {
                  parmasId: 42,
                  parmasName: 'noCache',
                  parmaType: 'Boolean',
                  parmaValue: '',
                  parmasDefault: false,
                  is_requried: true,
                  desc: '是否缓存页面'
                }, {
                  parmasId: 43,
                  parmasName: 'activeMenu',
                  parmaType: 'Boolean',
                  parmaValue: '',
                  parmasDefault: '',
                  is_requried: false,
                  desc: '高亮页面（路径）'
                }, {
                  parmasId: 44,
                  parmasName: 'icon',
                  parmaType: 'String',
                  parmaValue: '',
                  parmasDefault: '',
                  is_requried: false,
                  desc: '菜单图标'
                }, {
                  parmasId: 45,
                  parmasName: 'breadcrumb',
                  parmaType: 'Boolean',
                  parmaValue: '',
                  parmasDefault: false,
                  is_requried: false,
                  desc: '是否面包屑中显示'
                }, {
                  parmasId: 46,
                  parmasName: 'affix',
                  parmaType: 'Boolean',
                  parmaValue: '',
                  parmasDefault: false,
                  is_requried: false,
                  desc: '是否固定viewTag中显示'
                }]
              },
              {
                parmasId: 47,
                parmasName: 'children',
                parmaType: 'Array',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '子级菜单(为空时返回空数组)'
              }
            ]
          },
          {
            parmasId: 72,
            parmasName: 'createName',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '创建人（登录账号）'
          },
          {
            parmasId: 73,
            parmasName: 'createTime',
            parmaType: 'date',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '创建时间'
          }
        ] }
    ],
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  },
  {
    apiId: 4,
    apiName: '菜单模块->新增、编辑菜单',
    apiType: 'POST',
    apiUrl: '/admin/menuMgt/handleAction',
    Headers: [{
      parmasId: 48,
      parmasName: 'Content-Type',
      parmaValue: 'application/json',
      is_requried: true,
      desc: 'JSON类型传参'
    },
    {
      parmasId: 49,
      parmasName: 'access-token',
      parmaValue: '123456',
      is_requried: true,
      desc: 'token校验登录'
    }],
    Body: [
      {
        parmasId: 52,
        parmasName: 'id',
        is_requried: false,
        parmaType: 'Number',
        desc: '菜单ID(编辑时必传)'
      },
      {
        parmasId: 53,
        parmasName: 'name',
        is_requried: true,
        parmaType: 'String',
        desc: '菜单名称'
      },
      {
        parmasId: 55,
        parmasName: 'hidden',
        is_requried: true,
        parmaType: 'Boolean',
        desc: '菜单隐藏'
      },
      {
        parmasId: 56,
        parmasName: 'component',
        is_requried: true,
        parmaType: 'String',
        desc: '菜单组件路径'
      },
      {
        parmasId: 57,
        parmasName: 'is_external_link',
        is_requried: false,
        parmaType: 'Boolean',
        desc: '是否外链'
      }, {
        parmasId: 58,
        parmasName: 'path',
        is_requried: true,
        parmaType: 'String',
        desc: '菜单路由路径'
      },
      {
        parmasId: 59,
        parmasName: 'redirect',
        is_requried: false,
        parmaType: 'String',
        desc: '标签重定向'
      }, {
        parmasId: 60,
        parmasName: 'stauts',
        is_requried: true,
        parmaType: 'Boolean',
        desc: '菜单状态'
      },
      {
        parmasId: 61,
        parmasName: 'meta',
        is_requried: true,
        parmaType: 'JSON',
        desc: '其他设置(json字符串)',
        children: [
          {
            parmasId: 62,
            parmasName: 'title',
            is_requried: true,
            parmaType: 'String',
            desc: '标签名称'
          },
          {
            parmasId: 63,
            parmasName: 'icon',
            is_requried: true,
            parmaType: 'String',
            desc: '菜单图标'
          }, {
            parmasId: 64,
            parmasName: 'noCache',
            is_requried: true,
            parmaType: 'Boolean',
            desc: '是否缓存页面'
          }, {
            parmasId: 65,
            parmasName: 'breadcrumb',
            is_requried: true,
            parmaType: 'Boolean',
            desc: '显示在面包屑'
          }, {
            parmasId: 66,
            parmasName: 'affix',
            is_requried: true,
            parmaType: 'Boolean',
            desc: '是否固定在viewtag'
          }, {
            parmasId: 67,
            parmasName: 'activeMenu',
            is_requried: false,
            parmaType: 'String',
            desc: '菜单点击时高亮路径'
          }
        ]
      }
    ],
    Query: [],
    callBackdata: [
      {
        parmasId: 70,
        parmasName: 'code',
        parmaType: 'Number',
        parmaValue: 20000,
        parmasDefault: '',
        is_requried: true,
        desc: ''
      },
      {
        parmasId: 71,
        parmasName: 'data',
        parmaType: 'String',
        parmaValue: '操作成功',
        is_requried: true,
        desc: ''
      }
    ],
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  },
  {
    apiId: 5,
    apiName: '菜单模块->删除菜单',
    apiType: 'POST',
    apiUrl: '/admin/menuMgt/handleDelete',
    Headers: [{
      parmasId: 76,
      parmasName: 'Content-Type',
      parmaValue: 'application/json',
      is_requried: true,
      desc: 'JSON类型传参'
    },
    {
      parmasId: 77,
      parmasName: 'access-token',
      parmaValue: '123456',
      is_requried: true,
      desc: 'token校验登录'
    }],
    Body: [{
      parmasId: 78,
      parmasName: 'id',
      parmaType: 'Number',
      parmaValue: '',
      parmasDefault: '',
      is_requried: true,
      desc: '菜单ID'
    }],
    Query: [],
    callBackdata: [{
      parmasId: 74,
      parmasName: 'code',
      parmaType: 'Number',
      parmaValue: 20000,
      parmasDefault: '',
      is_requried: true,
      desc: ''
    },
    {
      parmasId: 75,
      parmasName: 'data',
      parmaType: 'String',
      parmaValue: '操作成功',
      is_requried: true,
      desc: ''
    }],
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  }
]

module.exports = {
  api_list: list
}
