
const list = [{
  companyId: 1,
  companyCode: 'c-code',
  companyName: '深圳公司',
  departId: 1,
  departCode: 'd-code',
  departName: '深圳部门',
  userId: 1,
  userName: '管理员用户',
  userMobile: 13543567678,
  userEmali: '123456@qq.com',
  userSex: true,
  status: true,
  createName: '用户管理员',
  createTime: '2021-01-05 09:00:00',
  roles: [{
    roleId: 1,
    roleName: '管理员'
  }, {
    roleId: 2,
    roleName: '普通用户'
  }],
  desc: '系统管理员用户'
}, {
  companyId: 1,
  companyCode: 'c-code',
  companyName: '深圳公司',
  departId: 2,
  departCode: 'd-code-1',
  departName: '深圳子部门1',
  userId: 2,
  userName: '普通用户',
  userMobile: 13543567678,
  userEmali: '123456@qq.com',
  userSex: false,
  status: false,
  createName: '普通用户',
  createTime: '2021-01-05 09:00:00',
  roles: [{
    roleId: 2,
    roleName: '普通用户'
  }],
  desc: '系统普通用户'
}
]
module.exports = {
  user_list: list
}
