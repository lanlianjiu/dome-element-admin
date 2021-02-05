const list = [
  {
    apiId: 9,
    apiName: '【用户模块】用户列表',
    apiType: 'POST',
    apiUrl: '/system/userMgt/getList',
    desc: `根据当前用户所在公司作为条件查询用户数据。`,
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
      parmasName: 'userName',
      parmaValue: '',
      is_requried: false,
      desc: '用户账号'
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
            parmasName: 'companyId',
            parmaType: 'Number',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '公司ID'
          }, {
            parmasId: 25,
            parmasName: 'companyCode',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '公司编码'
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
            parmasName: 'departCode',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '部门编码'
          },
          {
            parmasId: 23,
            parmasName: 'departName',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '部门名称'
          },
          {
            parmasId: 16,
            parmasName: 'userId',
            parmaType: 'Number',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '用户ID'
          },
          {
            parmasId: 17,
            parmasName: 'userName',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '用户账号'
          }, {
            parmasId: 24,
            parmasName: 'nickName',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '用户昵称'
          }, {
            parmasId: 33,
            parmasName: 'userMobile',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '用户电话'
          }, {
            parmasId: 26,
            parmasName: 'userEmali',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '用户邮箱'
          }, {
            parmasId: 27,
            parmasName: 'userSex',
            parmaType: 'Number',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '用户性别'
          }, {
            parmasId: 29,
            parmasName: 'avatar',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '用户头像'
          }, {
            parmasId: 30,
            parmasName: 'roles',
            parmaType: 'Array',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '用户角色',
            children: [
              {
                parmasId: 31,
                parmasName: 'roleId',
                parmaType: 'Number',
                parmaValue: '',
                parmasDefault: '',
                is_requried: false,
                desc: '角色ID'
              },
              {
                parmasId: 32,
                parmasName: 'roleName',
                parmaType: 'String',
                parmaValue: '',
                parmasDefault: '',
                is_requried: false,
                desc: '角色名称'
              }
            ]
          }, {
            parmasId: 28,
            parmasName: 'status',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: false,
            desc: '用户状态'
          }, {
            parmasId: 18,
            parmasName: 'introduction',
            parmaType: 'String',
            parmaValue: '',
            parmasDefault: '',
            is_requried: true,
            desc: '用户描述'
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
          }
        ]
      }
    ],
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  },
  {
    apiId: 10,
    apiName: '【用户模块】新增、编辑用户',
    apiType: 'POST',
    apiUrl: '/system/userMgt/handleAction',
    desc: `部门新增时，编码校验在当前公司下的部门编码唯一性`,
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
      parmasName: 'userId',
      is_requried: false,
      parmaType: 'Number',
      desc: `部门ID(<span style="color:red;">编辑时必传)</span>`
    },
    {
      parmasId: 62,
      parmasName: 'companyId',
      is_requried: true,
      parmaType: 'Number',
      desc: '用户所属公司'
    },
    {
      parmasId: 63,
      parmasName: 'departId',
      is_requried: true,
      parmaType: 'Number',
      desc: '用户所属部门'
    }, {
      parmasId: 54,
      parmasName: 'userName',
      is_requried: true,
      parmaType: 'String',
      desc: '用户账号'
    },
    {
      parmasId: 52,
      parmasName: 'nickName',
      is_requried: false,
      parmaType: 'String',
      desc: `用户昵称`
    },
    {
      parmasId: 57,
      parmasName: 'avatar',
      is_requried: false,
      parmaType: 'String',
      desc: '用户头像'
    },
    {
      parmasId: 64,
      parmasName: 'userSex',
      is_requried: true,
      parmaType: 'Number',
      desc: '用户性别'
    },
    {
      parmasId: 58,
      parmasName: 'userPassword',
      is_requried: false,
      parmaType: 'String',
      desc: '用户密码（新增时有）'
    },
    {
      parmasId: 59,
      parmasName: 'roleName',
      is_requried: false,
      parmaType: 'Array',
      desc: '用户分配的角色'
    },
    {
      parmasId: 60,
      parmasName: 'userMobile',
      is_requried: false,
      parmaType: 'String',
      desc: '用户电话'
    },
    {
      parmasId: 61,
      parmasName: 'userEmali',
      is_requried: false,
      parmaType: 'String',
      desc: '用户邮箱'
    },
    {
      parmasId: 55,
      parmasName: 'status',
      is_requried: true,
      parmaType: 'Boolean',
      desc: '用户状态'
    },
    {
      parmasId: 56,
      parmasName: 'introduction',
      is_requried: false,
      parmaType: 'String',
      desc: '用户备注'
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
    apiId: 11,
    apiName: '【用户模块】删除用户',
    apiType: 'POST',
    apiUrl: '/system/userMgt/handleDelete',
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
      parmasName: 'userId',
      parmaType: 'Number',
      parmaValue: '',
      parmasDefault: '',
      is_requried: true,
      desc: '用户ID'
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
  user_list: list
}

