
const { user_list } = require('./userMgt_data.js')
const { role_list } = require('./roleMgt_data.js')
const { meuns_list } = require('./menuMgt_data.js')
const { company_list } = require('./company_data.js')
const { depart_list } = require('./departMgt_data.js')

const menusList = {
  code: 20000,
  total: meuns_list.length,
  data: meuns_list
}

const userList = {
  code: 20000,
  total: user_list.length,
  data: user_list
}

const departList = {
  code: 20000,
  total: company_list.length,
  data: depart_list
}
const companyList = {
  code: 20000,
  total: company_list.length,
  data: company_list
}

const roleList = {
  code: 20000,
  total: role_list.length,
  data: role_list
}

module.exports = [
  {
    url: '/vue-element-admin/menuMgt/list',
    type: 'post',
    response: _ => {
      return menusList
    }
  },
  {
    url: '/vue-element-admin/menuMgt/handleAction',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/vue-element-admin/menuMgt/handleDelete',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/vue-element-admin/userMgt/getUserlist',
    type: 'post',
    response: _ => {
      return userList
    }
  },
  {
    url: '/vue-element-admin/userMgt/handleAction',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/vue-element-admin/userMgt/handleDelete',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/vue-element-admin/sysRole/getRolelist',
    type: 'post',
    response: _ => {
      return roleList
    }
  },
  {
    url: '/vue-element-admin/sysRole/setRolemenus',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/vue-element-admin/sysRole/handleAction',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/vue-element-admin/sysRole/handleDelete',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/vue-element-admin/sysCompany/list',
    type: 'post',
    response: _ => {
      return companyList
    }
  }, {
    url: '/vue-element-admin/sysCompany/handleAction',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/vue-element-admin/sysCompany/handleDelete',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/vue-element-admin/sysDepart/list',
    type: 'post',
    response: _ => {
      return departList
    }
  }, {
    url: '/vue-element-admin/sysDepart/handleAction',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/vue-element-admin/sysDepart/handleDelete',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  }
]
