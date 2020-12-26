
const { list } = require('./menuMgt_data.js')

const menus = {
  code: 20000,
  total: 14,
  data: list
}

module.exports = [
  {
    url: '/vue-element-admin/menuMgt/list',
    type: 'get',
    response: _ => {
      return menus || []
    }
  }
]
