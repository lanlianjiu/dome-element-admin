
import request from '@/utils/request'
export function getList() {
  return request({
    url: '/vue-element-admin/roleMgt/list',
    method: 'get'
  })
}

export function setRolemenus(data) {
  console.log(data)
  return request({
    url: '/vue-element-admin/roleMgt/setRolemenus',
    method: 'post',
    data
  })
}
