
import request from '@/utils/request'
export function getList() {
  return request({
    url: '/vue-element-admin/userMgt/list',
    method: 'get'
  })
}
