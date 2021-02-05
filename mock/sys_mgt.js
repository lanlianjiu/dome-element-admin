
const { user_list } = require('./userMgt_data.js')
const { role_list } = require('./roleMgt_data.js')
const { meuns_list } = require('./menuMgt_data.js')
const { company_list } = require('./company_data.js')
const { depart_list } = require('./departMgt_data.js')
const { api_list } = require('./apiMgt_data.js')

const menusList = {
  code: 20000,
  msg: '操作成功',
  pageTotal: meuns_list.length,
  data: meuns_list
}

const userList = {
  code: 20000,
  msg: '操作成功',
  total: user_list.length,
  data: user_list
}

const departList = {
  code: 20000,
  msg: '操作成功',
  pageTotal: company_list.length,
  data: depart_list
}
const companyList = {
  code: 20000,
  msg: '操作成功',
  pageTotal: company_list.length,
  data: company_list
}

const roleList = {
  code: 20000,
  msg: '操作成功',
  total: role_list.length,
  data: role_list
}

const apiList = {
  code: 20000,
  msg: '操作成功',
  total: api_list.length,
  data: api_list
}

module.exports = [
  {
    url: '/system/menuMgt/getList',
    type: 'post',
    response: _ => {
      return menusList
    }
  },
  {
    url: '/system/menuMgt/handleAction',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/system/menuMgt/handleDelete',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/system/userMgt/getList',
    type: 'post',
    response: _ => {
      return userList
    }
  },
  {
    url: '/system/userMgt/handleAction',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: 'system/userMgt/handleDelete',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/system/roleMgt/getList',
    type: 'post',
    response: _ => {
      return roleList
    }
  },
  {
    url: '/system/roleMgt/setRolemenus',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/system/roleMgt/handleAction',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/system/roleMgt/handleDelete',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/system/companyMgt/getList',
    type: 'post',
    response: _ => {
      return companyList
    }
  }, {
    url: '/system/companyMgt/handleActio',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/system/companyMgt/handleDelete',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/system/departMgt/getList',
    type: 'post',
    response: _ => {
      return departList
    }
  }, {
    url: '/system/departMgt/handleAction',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/system/departMgt/handleDelete',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/system/apiMgt/getList',
    type: 'post',
    response: _ => {
      return apiList
    }
  }, {
    url: '/system/apiMgt/handleAction',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  },
  {
    url: '/system/apiMgt/handleDelete',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  }
]
