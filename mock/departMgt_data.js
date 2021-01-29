
const list = [{
  companyId: 1,
  companyName: '深圳公司',
  departId: 1,
  departpId: 0,
  departCode: 'd-code',
  departName: '深圳部门',
  status: true,
  createName: '管理员用户',
  createTime: '2021-01-05 09:00:00',
  desc: '部门描述',
  children: [{
    companyId: 1,
    companyName: '深圳公司',
    departId: 2,
    departpId: 1,
    departCode: 'd-code-1',
    departName: '深圳子部门1',
    status: true,
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  }, {
    companyId: 1,
    companyName: '深圳公司',
    departId: 3,
    departpId: 1,
    departCode: 'd-code-2',
    departName: '深圳子部门2',
    status: true,
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  }]
}, {
  companyId: 4,
  companyName: '广州公司',
  departId: 4,
  departpId: 0,
  departCode: 'd-code-4',
  departName: '广州部门',
  status: true,
  createName: '管理员用户',
  createTime: '2021-01-05 09:00:00',
  desc: '部门描述',
  children: [{
    companyId: 4,
    companyName: '广州公司',
    departId: 5,
    departypId: 4,
    departCode: 'd-code-5',
    departName: '广州子部门1',
    status: true,
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00',
    desc: '部门描述'
  }, {
    companyId: 4,
    companyName: '广州公司',
    departId: 6,
    departpId: 4,
    departCode: 'd-code-6',
    cdepartName: '广州子部门2',
    status: true,
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00',
    desc: '部门描述'
  }]
}, {
  companyId: 7,
  companyName: '东莞公司',
  departId: 7,
  departpId: 0,
  departCode: 'd-code-7',
  departName: '东莞部门',
  status: true,
  createName: '管理员用户',
  createTime: '2021-01-05 09:00:00',
  desc: '部门描述',
  children: [{
    companyId: 7,
    companyName: '东莞公司',
    departId: 8,
    departpId: 7,
    departCode: 'd-code-8',
    departName: '东莞子部门1',
    status: true,
    desc: '部门描述',
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  }, {
    companyId: 7,
    companyName: '东莞公司',
    departId: 9,
    departpId: 7,
    departCode: 'd-code-9',
    departName: '东莞子部门2',
    status: true,
    desc: '部门描述',
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  }]
}]

module.exports = {
  depart_list: list
}

