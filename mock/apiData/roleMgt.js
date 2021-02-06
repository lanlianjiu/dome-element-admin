const list = [
  {
    apiId: 19,
    apiName: '【角色模块】角色列表',
    apiType: 'POST',
    apiUrl: '/system/roleMgt/getList',
    desc: ` 根据当前【用户所在公司】作为条件查询该【公司角色数据】。`,
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
      parmasName: 'roleName',
      parmaValue: '',
      is_requried: false,
      desc: '【角色名称】模糊查询'
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
        desc: '数据总条数'
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
            parmasName: 'roleId',
            parmaType: 'Number',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '角色ID'
          }, {
            parmasId: 15,
            parmasName: 'roleName',
            parmaType: 'Number',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '角色名称'
          },
          {
            parmasId: 16,
            parmasName: 'roleCode',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '角色编码'
          },
          {
            parmasId: 17,
            parmasName: 'status',
            parmaType: 'Number',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '角色状态'
          }, {
            parmasId: 18,
            parmasName: 'desc',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '角色描述'
          }, {
            parmasId: 21,
            parmasName: 'menusTree',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '角色所配置的菜单（菜单的树图结构数据）',
            children: [
              {
                parmasId: 140,
                parmasName: 'id',
                parmaType: 'Number',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '菜单ID'
              }, {
                parmasId: 150,
                parmasName: 'pid',
                parmaType: 'Number',
                parmaValue: '',
                parmasDefault: '',
                is_requried: false,
                desc: '菜单父级ID'
              },
              {
                parmasId: 160,
                parmasName: 'name',
                parmaType: 'String',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '菜单名称'
              },
              {
                parmasId: 170,
                parmasName: 'component',
                parmaType: 'String',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '组件路径'
              }, {
                parmasId: 180,
                parmasName: 'path',
                parmaType: 'String',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '路由路径'
              },
              {
                parmasId: 190,
                parmasName: 'redirect',
                parmaType: 'String',
                parmaValue: '',
                parmasDefault: '',
                is_requried: false,
                desc: '标签重定向路径'
              },
              {
                parmasId: 200,
                parmasName: 'sortNo',
                parmaType: 'Number',
                parmaValue: '',
                parmasDefault: '',
                is_requried: false,
                desc: '排序号'
              },
              {
                parmasId: 210,
                parmasName: 'hidden',
                parmaType: 'Boolean',
                parmaValue: '',
                parmasDefault: false,
                is_requried: true,
                desc: '菜单是否隐藏'
              },
              {
                parmasId: 500,
                parmasName: 'is_external_link',
                parmaType: 'Boolean',
                parmaValue: '',
                parmasDefault: false,
                is_requried: true,
                desc: '菜单是否是外链'
              },
              {
                parmasId: 540,
                parmasName: 'alwaysShow',
                parmaType: 'Boolean',
                parmaValue: '',
                parmasDefault: false,
                is_requried: false,
                desc: '一直显示根路由'
              },
              {
                parmasId: 220,
                parmasName: 'status',
                parmaType: 'Boolean',
                parmaValue: '',
                parmasDefault: true,
                is_requried: true,
                desc: '菜单状态'
              },
              {
                parmasId: 230,
                parmasName: 'meta',
                parmaType: 'JSON',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '其他设置对象（存进json字符串）',
                children: [{
                  parmasId: 250,
                  parmasName: 'title',
                  parmaType: 'String',
                  parmaValue: '',
                  parmasDefault: '',
                  is_requried: true,
                  desc: '标签名称'
                }, {
                  parmasId: 260,
                  parmasName: 'noCache',
                  parmaType: 'Boolean',
                  parmaValue: '',
                  parmasDefault: false,
                  is_requried: true,
                  desc: '是否缓存页面'
                }, {
                  parmasId: 270,
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
                  parmasId: 290,
                  parmasName: 'breadcrumb',
                  parmaType: 'Boolean',
                  parmaValue: '',
                  parmasDefault: false,
                  is_requried: false,
                  desc: '是否面包屑中显示'
                }, {
                  parmasId: 300,
                  parmasName: 'affix',
                  parmaType: 'Boolean',
                  parmaValue: '',
                  parmasDefault: false,
                  is_requried: false,
                  desc: '是否固定viewTag中显示'
                }, {
                  parmasId: 301,
                  parmasName: 'is_local',
                  parmaType: 'Boolean',
                  parmaValue: '',
                  parmasDefault: false,
                  is_requried: false,
                  desc: '是否只本地显示'
                }]
              },
              {
                parmasId: 240,
                parmasName: 'children',
                parmaType: 'Array',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '子级菜单(子级菜单的结构依次重复结构)(为空时返回空数组)',
                children: [
                  {
                    parmasId: 310,
                    parmasName: 'id',
                    parmaType: 'Number',
                    parmaValue: '',
                    parmasDefault: '',
                    is_requried: true,
                    desc: '菜单ID'
                  },
                  {
                    parmasId: 320,
                    parmasName: 'pid',
                    parmaType: 'Number',
                    parmaValue: '',
                    parmasDefault: '',
                    is_requried: false,
                    desc: '菜单父级ID'
                  },
                  {
                    parmasId: 330,
                    parmasName: 'name',
                    parmaType: 'String',
                    parmaValue: '',
                    parmasDefault: '',
                    is_requried: true,
                    desc: '菜单名称'
                  },
                  {
                    parmasId: 340,
                    parmasName: 'component',
                    parmaType: 'String',
                    parmaValue: '',
                    parmasDefault: '',
                    is_requried: true,
                    desc: '组件路径'
                  }, {
                    parmasId: 350,
                    parmasName: 'path',
                    parmaType: 'String',
                    parmaValue: '',
                    parmasDefault: '',
                    is_requried: true,
                    desc: '路由路径'
                  },
                  {
                    parmasId: 360,
                    parmasName: 'redirect',
                    parmaType: 'String',
                    parmaValue: '',
                    parmasDefault: '',
                    is_requried: false,
                    desc: '标签重定向路径'
                  },
                  {
                    parmasId: 370,
                    parmasName: 'sortNo',
                    parmaType: 'Number',
                    parmaValue: '',
                    parmasDefault: '',
                    is_requried: false,
                    desc: '排序号'
                  },
                  {
                    parmasId: 380,
                    parmasName: 'hidden',
                    parmaType: 'Boolean',
                    parmaValue: '',
                    parmasDefault: false,
                    is_requried: true,
                    desc: '菜单是否隐藏'
                  },
                  {
                    parmasId: 510,
                    parmasName: 'is_external_link',
                    parmaType: 'Boolean',
                    parmaValue: '',
                    parmasDefault: false,
                    is_requried: true,
                    desc: '菜单是否是外链'
                  },
                  {
                    parmasId: 390,
                    parmasName: 'status',
                    parmaType: 'Boolean',
                    parmaValue: '',
                    parmasDefault: true,
                    is_requried: true,
                    desc: '菜单状态'
                  },
                  {
                    parmasId: 400,
                    parmasName: 'meta',
                    parmaType: 'JSON',
                    parmaValue: '',
                    parmasDefault: '',
                    is_requried: true,
                    desc: '其他设置对象（存进json字符串）',
                    children: [{
                      parmasId: 410,
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
                      parmasId: 430,
                      parmasName: 'activeMenu',
                      parmaType: 'Boolean',
                      parmaValue: '',
                      parmasDefault: '',
                      is_requried: false,
                      desc: '高亮页面（路径）'
                    }, {
                      parmasId: 440,
                      parmasName: 'icon',
                      parmaType: 'String',
                      parmaValue: '',
                      parmasDefault: '',
                      is_requried: false,
                      desc: '菜单图标'
                    }, {
                      parmasId: 450,
                      parmasName: 'breadcrumb',
                      parmaType: 'Boolean',
                      parmaValue: '',
                      parmasDefault: false,
                      is_requried: false,
                      desc: '是否面包屑中显示'
                    }, {
                      parmasId: 460,
                      parmasName: 'affix',
                      parmaType: 'Boolean',
                      parmaValue: '',
                      parmasDefault: false,
                      is_requried: false,
                      desc: '是否固定viewTag中显示'
                    }]
                  }]
              }
            ]
          }, {
            parmasId: 22,
            parmasName: 'menuIds',
            parmaType: 'Array',
            parmaValue: '例：[1,2,3]',
            parmasDefault: '',
            is_requried: true,
            desc: '角色所授权的角色ID(菜单id以数组的形式存放)'
          }, {
            parmasId: 19,
            parmasName: 'createName',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '创建人'
          }, {
            parmasId: 20,
            parmasName: 'createTime',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '创建时间'
          }]
      }
    ],
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  },
  {
    apiId: 20,
    apiName: '【角色模块】新增、编辑角色',
    apiType: 'POST',
    apiUrl: '/system/roleMgt/handleAction',
    desc: `新增时，以【当前公司】为限制条件校验【角色编码】唯一性`,
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
    Body: [{
      parmasId: 51,
      parmasName: 'roleId',
      is_requried: false,
      parmaType: 'Number',
      desc: `角色ID(编辑时必传)`
    },
    {
      parmasId: 53,
      parmasName: 'roleCode',
      is_requried: true,
      parmaType: 'String',
      desc: '角色编码'
    }, {
      parmasId: 54,
      parmasName: 'roleName',
      is_requried: true,
      parmaType: 'String',
      desc: '角色名称'
    },
    {
      parmasId: 55,
      parmasName: 'status',
      is_requried: true,
      parmaType: 'Boolean',
      desc: '角色状态'
    },
    {
      parmasId: 56,
      parmasName: 'desc',
      is_requried: false,
      parmaType: 'String',
      desc: '角色备注'
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
    apiId: 21,
    apiName: '【角色模块】删除角色',
    apiType: 'POST',
    apiUrl: '/system/roleMgt/handleDelete',
    desc: '删除角色',
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
      parmasName: 'roleId',
      parmaType: 'Number',
      parmaValue: '',
      parmasDefault: '',
      is_requried: true,
      desc: '角色ID'
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
  },
  {
    apiId: 22,
    apiName: '【角色模块】角色授权',
    apiType: 'POST',
    apiUrl: '/system/roleMgt/setRolemenus',
    desc: '角色授权菜单',
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
      parmasName: 'roleId',
      parmaType: 'Number',
      parmaValue: '',
      parmasDefault: '',
      is_requried: true,
      desc: '角色ID'
    }, {
      parmasId: 78,
      parmasName: 'menuIds',
      parmaType: 'Array',
      parmaValue: '例：[1,2,3]',
      parmasDefault: '',
      is_requried: true,
      desc: '授权菜单ID数组集合'
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
  role_list: list
}

