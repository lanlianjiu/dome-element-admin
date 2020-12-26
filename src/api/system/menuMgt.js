
import request from '@/utils/request'
export function getList() {
  return request({
    url: '/vue-element-admin/menuMgt/list',
    method: 'get'
  })
}
