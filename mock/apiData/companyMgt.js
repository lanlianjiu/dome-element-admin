const list = [
  {
    apiId: 11,
    apiName: '【公司模块】公司列表',
    apiType: 'POST',
    apiUrl: '/system/companyMgt/getList',
    desc: `
    1.根据当前用户所在公司作为条件查询该公司以及下面子级公司数据。<br>
    2.这个接口两用，当传page、limit等分页参数时作为限制条件返回数据。当不传任何参数时返回当前公司的所有有效数据（其中包括自己公司以及子公司）（用于新增时父级下拉插件数据）`,
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
      parmasName: 'companyName',
      parmaValue: '',
      is_requried: false,
      desc: '公司名称'
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
      }, {
        parmasId: 80,
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
            parmasId: 15,
            parmasName: 'companypId',
            parmaType: 'Number',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '公司父级ID'
          },
          {
            parmasId: 16,
            parmasName: 'companyCode',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '公司编码'
          },
          {
            parmasId: 17,
            parmasName: 'status',
            parmaType: 'Number',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '公司状态'
          }, {
            parmasId: 18,
            parmasName: 'desc',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '公司描述'
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
            parmasId: 21,
            parmasName: 'children',
            parmaType: 'Array',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '子级公司(子级公司的结构依次重复结构)',
            children: [{
              parmasId: 22,
              parmasName: 'companyId',
              parmaType: 'Number',
              parmaValue: '',
              parmasDefault: '',
              is_requried: true,
              desc: '公司ID'
            }, {
              parmasId: 23,
              parmasName: 'companypId',
              parmaType: 'Number',
              parmaValue: '',
              parmasDefault: '',
              is_requried: false,
              desc: '公司父级ID'
            },
            {
              parmasId: 24,
              parmasName: 'companyCode',
              parmaType: 'String',
              parmaValue: '',
              parmasDefault: '',
              is_requried: true,
              desc: '公司编码'
            },
            {
              parmasId: 25,
              parmasName: 'status',
              parmaType: 'Number',
              parmaValue: '',
              parmasDefault: '',
              is_requried: true,
              desc: '公司状态'
            }, {
              parmasId: 26,
              parmasName: 'desc',
              parmaType: 'String',
              parmaValue: '',
              parmasDefault: '',
              is_requried: true,
              desc: '公司描述'
            }, {
              parmasId: 27,
              parmasName: 'createName',
              parmaType: 'String',
              parmaValue: '',
              parmasDefault: '',
              is_requried: true,
              desc: '创建人'
            }, {
              parmasId: 28,
              parmasName: 'createTime',
              parmaType: 'String',
              parmaValue: '',
              parmasDefault: '',
              is_requried: true,
              desc: '创建时间'
            }]
          }]
      }
    ],
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  },
  {
    apiId: 12,
    apiName: '【公司模块】新增、编辑公司',
    apiType: 'POST',
    apiUrl: '/system/companyMgt/handleAction',
    desc: `新增时校验当前公司下公司编码的唯一性`,
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
      parmasName: 'companyId',
      is_requried: false,
      parmaType: 'Number',
      desc: `公司ID(<span style="color:red;">编辑时必传)</span>`
    },
    {
      parmasId: 52,
      parmasName: 'companypId',
      is_requried: false,
      parmaType: 'Number',
      desc: `公司父级ID,不传时默认填0`
    },
    {
      parmasId: 53,
      parmasName: 'companyCode',
      is_requried: true,
      parmaType: 'String',
      desc: '公司编码'
    }, {
      parmasId: 54,
      parmasName: 'companyName',
      is_requried: true,
      parmaType: 'String',
      desc: '公司名称'
    },
    {
      parmasId: 55,
      parmasName: 'status',
      is_requried: true,
      parmaType: 'Boolean',
      desc: '公司状态'
    },
    {
      parmasId: 56,
      parmasName: 'desc',
      is_requried: false,
      parmaType: 'String',
      desc: '公司备注'
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
    apiId: 13,
    apiName: '【公司模块】删除公司',
    apiType: 'POST',
    apiUrl: '/system/companyMgt/handleDelete',
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
      parmasName: 'companypId',
      parmaType: 'Number',
      parmaValue: '',
      parmasDefault: '',
      is_requried: true,
      desc: '公司ID'
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
  company_list: list
}
