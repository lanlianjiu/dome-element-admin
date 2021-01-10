
const list = [{
  companyId: 1,
  companypId: 0,
  companyCode: 'c-code',
  companyName: '深圳公司',
  status: true,
  createName: '管理员用户',
  createTime: '2021-01-05 09:00:00',
  desc: '公司描述',
  children: [{
    companyId: 2,
    companypId: 1,
    companyCode: 'c-code-1',
    companyName: '深圳子公司1',
    status: true,
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  }, {
    companyId: 3,
    companypId: 1,
    companyCode: 'c-code-2',
    companyName: '深圳子公司2',
    status: true,
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  }]
}, {
  companyId: 4,
  companypId: 0,
  companyCode: 'c-code-4',
  companyName: '广州公司',
  status: true,
  createName: '管理员用户',
  createTime: '2021-01-05 09:00:00',
  desc: '公司描述',
  children: [{
    companyId: 5,
    companypId: 4,
    companyCode: 'c-code-5',
    companyName: '广州子公司1',
    status: true,
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00',
    desc: '公司描述'
  }, {
    companyId: 6,
    companypId: 4,
    companyCode: 'c-code-6',
    companyName: '广州子公司2',
    status: true,
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00',
    desc: '公司描述'
  }]
}, {
  companyId: 7,
  companypId: 0,
  companyCode: 'c-code-7',
  companyName: '东莞公司',
  status: true,
  createName: '管理员用户',
  createTime: '2021-01-05 09:00:00',
  desc: '公司描述',
  children: [{
    companyId: 8,
    companypId: 7,
    companyCode: 'c-code-8',
    companyName: '东莞子公司1',
    status: true,
    desc: '公司描述',
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  }, {
    companyId: 9,
    companypId: 7,
    companyCode: 'c-code-9',
    companyName: '东莞子公司2',
    status: true,
    desc: '公司描述',
    createName: '管理员用户',
    createTime: '2021-01-05 09:00:00'
  }]
}]

module.exports = {
  company_list: list
}

