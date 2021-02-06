const list = [
  {
    apiId: 6,
    apiName: '【菜单模块】菜单列表',
    apiType: 'POST',
    apiUrl: '/system/menuMgt/getList',
    desc: '1.根据当前用户所在公司作为条件查询该公司所配置的菜单数据。<br>2.这个接口两用，当传page、limit等分页参数时作为限制条件返回数据。当不传任何参数时返回当前公司的所有有效的菜单（用于新增时父级下拉插件数据）',
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
      desc: '【菜单名称】模糊查询'
    }, {
      parmasId: 80,
      parmasName: 'page',
      parmaValue: '',
      is_requried: false,
      desc: '当前页数'
    }, {
      parmasId: 81,
      parmasName: 'limit',
      parmaValue: '',
      is_requried: false,
      desc: '每页条数'
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
        desc: '返回编码：\n  20000：正常; \n50008: 非法令牌(Illegal token);\n50012: 其他客户端已登录(Other clients logged in);\n50014: 令牌已过期(Token expired);'
      },
      {
        parmasId: 84,
        parmasName: 'msg',
        parmaType: 'String',
        parmaValue: '操作成功',
        parmasDefault: '',
        is_requried: true,
        desc: '接口返回提示信息、错误原因等'
      },
      {
        parmasId: 79,
        parmasName: 'total',
        parmaType: 'Number',
        parmaValue: '',
        parmasDefault: '',
        is_requried: true,
        desc: '数据总条数(查出统计出包含子级的数据条数)'
      },
      {
        parmasId: 83,
        parmasName: 'pageTotal',
        parmaType: 'Number',
        parmaValue: '',
        parmasDefault: '',
        is_requried: true,
        desc: '数据总数(查出的数据中只是统计父级id为0的总数)'
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
    apiId: 7,
    apiName: '【菜单模块】新增、编辑菜单',
    apiType: 'POST',
    apiUrl: '/system/menuMgt/handleAction',
    desc: '菜单编码需要校验当前公司作为条件编码的唯一性',
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
        desc: `菜单ID(编辑时必传)`
      },
      {
        parmasId: 69,
        parmasName: 'menusCode',
        is_requried: true,
        parmaType: 'String',
        desc: '菜单编码'
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
          },
          {
            parmasId: 68,
            parmasName: 'is_local',
            is_requried: false,
            parmaType: 'String',
            desc: '是否只是本地调试显示'
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
        desc: '返回编码：\n  20000：正常; \n50008: 非法令牌(Illegal token);\n50012: 其他客户端已登录(Other clients logged in);\n50014: 令牌已过期(Token expired);'
      },
      {
        parmasId: 71,
        parmasName: 'msg',
        parmaType: 'String',
        parmaValue: '操作成功',
        is_requried: true,
        desc: '接口返回提示信息、错误原因等'
      }
    ],
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  },
  {
    apiId: 8,
    apiName: '【菜单模块】删除菜单',
    apiType: 'POST',
    apiUrl: '/system/menuMgt/handleDelete',
    desc: '删除菜单操作',
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
      desc: '返回编码：\n  20000：正常; \n50008: 非法令牌(Illegal token);\n50012: 其他客户端已登录(Other clients logged in);\n50014: 令牌已过期(Token expired);'
    },
    {
      parmasId: 75,
      parmasName: 'msg',
      parmaType: 'String',
      parmaValue: '操作成功',
      is_requried: true,
      desc: '接口返回提示信息、错误原因等'
    }],
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  }
]

module.exports = {
  menus_list: list
}
