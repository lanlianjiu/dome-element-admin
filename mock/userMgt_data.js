
const list = [{
  userId: 1,
  userName: '管理员用户',
  userMobile: 13543567678,
  userEmali: '123456@qq.com',
  userSex: 1,
  status: 1,
  roles: [{
    roleName: '管理员'
  }, {
    roleName: '普通用户'
  }],
  desc: '系统管理员用户'
}, {
  userId: 2,
  userName: '普通用户',
  userMobile: 13543567678,
  userEmali: '123456@qq.com',
  userSex: 0,
  status: 0,
  roles: [{
    roleName: '普通用户'
  }],
  desc: '系统普通用户'
}
]
module.exports = {
  list: list
}
