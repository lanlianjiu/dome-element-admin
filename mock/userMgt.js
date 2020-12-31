
const { list } = require('./userMgt_data.js')

const menus = {
  code: 20000,
  total: 2,
  data: list
}

module.exports = [
  {
    url: '/vue-element-admin/userMgt/list',
    type: 'get',
    response: _ => {
      return menus || []
    }
  }
]
