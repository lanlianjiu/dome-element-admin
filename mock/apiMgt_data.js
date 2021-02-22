const { menus_list } = require('./apiData/menusMgt')
const { user_list } = require('./apiData/userMgt')
const { company_list } = require('./apiData/companyMgt')
const { depart_list } = require('./apiData/departMgt')
const { role_list } = require('./apiData/roleMgt')
const list = [
  {
    apiId: 1,
    apiName: '登录接口',
    apiType: 'POST',
    apiUrl: '/system/user/login',
    desc: '系统登录接口，登录校验需要根据 【公司编码】【登录账号】【登录密码】 三者校验正确方可登录成功',
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
        desc: '返回编码：\n  20000：正常; \n50008: 非法令牌(Illegal token);\n50012: 其他客户端已登录(Other clients logged in);\n50014: 令牌已过期(Token expired);'
      },
      {
        parmasId: 82,
        parmasName: 'msg',
        parmaType: 'String',
        parmaValue: '',
        parmasDefault: '',
        is_requried: false,
        desc: '接口返回提示信息、错误原因等'
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
    apiName: '获取登录人信息接口',
    apiType: 'GET',
    apiUrl: '/system/user/info',
    desc: '登陆后获取【登录人相关信息】',
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
    Body: [],
    Query: [{
      parmasId: 1,
      parmasName: 'access-token',
      parmaValue: '123456',
      is_requried: true,
      desc: '拼上token'
    }],
    callBackdata: [
      {
        parmasId: 83,
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
        parmaValue: '',
        parmasDefault: '',
        is_requried: false,
        desc: '接口返回提示信息、错误原因等'
      },
      {
        parmasId: 85,
        parmasName: 'data',
        parmaType: 'Object',
        parmaValue: '',
        parmasDefault: '',
        is_requried: true,
        desc: '',
        children: [{
          parmasId: 86,
          parmasName: 'avatar',
          parmaType: 'String',
          parmaValue: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          parmasDefault: '',
          is_requried: true,
          desc: '登录人头像'
        }, {
          parmasId: 87,
          parmasName: 'introduction',
          parmaType: 'String',
          parmaValue: '',
          parmasDefault: '',
          is_requried: true,
          desc: '登录人备注'
        }, {
          parmasId: 88,
          parmasName: 'name',
          parmaType: 'String',
          parmaValue: '',
          parmasDefault: '',
          is_requried: true,
          desc: '登录人名称'
        }, {
          parmasId: 89,
          parmasName: 'roles',
          parmaType: 'Array',
          parmaValue: '[admin,edit]',
          parmasDefault: '',
          is_requried: true,
          desc: '登录人拥有的角色编码'
        }]
      }
    ],
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  },
  {
    apiId: 3,
    apiName: '退出登录接口',
    apiType: 'POST',
    apiUrl: '/system/user/logout',
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
      desc: '返回编码：\n  20000：正常; \n50008: 非法令牌(Illegal token);\n50012: 其他客户端已登录(Other clients logged in);\n50014: 令牌已过期(Token expired);'
    }, {
      parmasId: 13,
      parmasName: 'msg',
      parmaType: 'String',
      parmaValue: '操作成功',
      parmasDefault: '',
      is_requried: true,
      desc: '接口返回提示信息、错误原因等' }],
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  },
  {
    apiId: 4,
    apiName: '获取登录人的菜单',
    apiType: 'GET',
    apiUrl: '/system/user/getAuthMenu',
    desc: '根据【当前用户】所拥有的【角色对应的菜单】数据',
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
    Body: [],
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
            parmaType: 'Number',
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
                parmaType: 'Number',
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
    apiId: 5,
    apiName: '图片上传接口',
    apiType: 'POST',
    apiUrl: '/system/upLoad',
    desc: '上传接口，以formData的形式传参，文件传值为base64形式',
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
      parmasName: 'data',
      parmaValue: '',
      is_requried: false,
      desc: '文件传值'
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
        parmasId: 85,
        parmasName: 'data',
        parmaType: 'String',
        parmaValue: '',
        parmasDefault: '',
        is_requried: true,
        desc: '接口返回图片上传七牛服务器后的url地址'
      }
    ],
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  }
]

module.exports = {
  api_list: list.concat(menus_list, user_list, company_list, depart_list, role_list)
}
