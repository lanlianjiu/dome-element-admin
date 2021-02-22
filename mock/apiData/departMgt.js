const list = [
  {
    apiId: 16,
    apiName: '【部门模块】部门列表',
    apiType: 'POST',
    apiUrl: '/system/departMgt/getList',
    desc: `根据当前用户所在公司作为【父级】条件查询【该公司部门】以及下面【子级部门】数据，也包含【当前公司】下【子公司】的部门以及子部门数据。`,
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
      parmasName: 'departName',
      parmaValue: '',
      is_requried: false,
      desc: '【部门名称】模糊查询'
    }, {
      parmasId: 3,
      parmasName: 'departCode',
      parmaValue: '',
      is_requried: false,
      desc: '【部门编码】模糊查询'
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
        desc: '数据总条数(查出的数据中只是统计父级id为0的总数)'
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
            parmasName: 'companyId',
            parmaType: 'Number',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '公司ID'
          }, {
            parmasId: 21,
            parmasName: 'companyName',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '公司名称'
          }, {
            parmasId: 15,
            parmasName: 'departId',
            parmaType: 'Number',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '部门ID'
          }, {
            parmasId: 22,
            parmasName: 'departpId',
            parmaType: 'Number',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '部门父级ID'
          },
          {
            parmasId: 23,
            parmasName: 'departpName',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '父级部门名称'
          },
          {
            parmasId: 16,
            parmasName: 'departCode',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '部门编码'
          },
          {
            parmasId: 17,
            parmasName: 'departName',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '部门名称'
          }, {
            parmasId: 35,
            parmasName: 'status',
            parmaType: 'Number',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '部门状态'
          }, {
            parmasId: 18,
            parmasName: 'desc',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '部门描述'
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
          }, {
            parmasId: 24,
            parmasName: 'children',
            parmaType: 'Array',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '子级部门(子级部门的结构依次重复结构)',
            children: [
              {
                parmasId: 25,
                parmasName: 'companyId',
                parmaType: 'Number',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '公司ID'
              }, {
                parmasId: 26,
                parmasName: 'companyName',
                parmaType: 'String',
                parmaValue: '',
                parmasDefault: '',
                is_requried: false,
                desc: '公司名称'
              }, {
                parmasId: 27,
                parmasName: 'departId',
                parmaType: 'Number',
                parmaValue: '',
                parmasDefault: '',
                is_requried: false,
                desc: '部门ID'
              }, {
                parmasId: 28,
                parmasName: 'departpId',
                parmaType: 'Number',
                parmaValue: '',
                parmasDefault: '',
                is_requried: false,
                desc: '部门父级ID'
              },
              {
                parmasId: 29,
                parmasName: 'departCode',
                parmaType: 'String',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '部门编码'
              },
              {
                parmasId: 30,
                parmasName: 'departName',
                parmaType: 'String',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '部门名称'
              }, {
                parmasId: 31,
                parmasName: 'status',
                parmaType: 'Number',
                parmaValue: '',
                parmasDefault: '',
                is_requried: false,
                desc: '部门状态'
              }, {
                parmasId: 32,
                parmasName: 'desc',
                parmaType: 'String',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '部门描述'
              }, {
                parmasId: 33,
                parmasName: 'createName',
                parmaType: 'String',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '创建人'
              }, {
                parmasId: 34,
                parmasName: 'createTime',
                parmaType: 'String',
                parmaValue: '',
                parmasDefault: '',
                is_requried: true,
                desc: '创建时间'
              }
            ]
          }
        ]
      }
    ],
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  },
  {
    apiId: 17,
    apiName: '【部门模块】新增、编辑部门',
    apiType: 'POST',
    apiUrl: '/system/departMgt/handleAction',
    desc: `部门新增时，编码校验在【当前公司】下的【部门编码】唯一性`,
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
      parmasName: 'departId',
      is_requried: false,
      parmaType: 'Number',
      desc: `部门ID(编辑时必传)`
    },
    {
      parmasId: 52,
      parmasName: 'departpId',
      is_requried: false,
      parmaType: 'Number',
      desc: `部门父级ID,不传时默认填0`
    },
    {
      parmasId: 53,
      parmasName: 'departCode',
      is_requried: true,
      parmaType: 'String',
      desc: '部门编码'
    }, {
      parmasId: 54,
      parmasName: 'departName',
      is_requried: true,
      parmaType: 'String',
      desc: '部门名称'
    },
    {
      parmasId: 55,
      parmasName: 'status',
      is_requried: true,
      parmaType: 'Number',
      desc: '部门状态'
    },
    {
      parmasId: 56,
      parmasName: 'desc',
      is_requried: false,
      parmaType: 'String',
      desc: '部门备注'
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
    apiId: 18,
    apiName: '【部门模块】删除部门',
    apiType: 'POST',
    apiUrl: '/system/departMgt/handleDelete',
    desc: '删除部门',
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
      parmasName: 'departId',
      parmaType: 'Number',
      parmaValue: '',
      parmasDefault: '',
      is_requried: true,
      desc: '部门ID'
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
  depart_list: list
}

