
const { list } = require('./roleMgt_data.js')

const menus = {
  code: 20000,
  total: 2,
  data: list
}

module.exports = [
  {
    url: '/vue-element-admin/roleMgt/list',
    type: 'get',
    response: _ => {
      return menus || []
    }
  },
  {
    url: '/vue-element-admin/roleMgt/setRolemenus',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        msg: '操作成功'
      }
    }
  }
]
