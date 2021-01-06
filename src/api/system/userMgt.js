
import request from '@/utils/request'
export function getUserlist(data) {
  return request({
    url: '/vue-element-admin/userMgt/getUserlist',
    method: 'post',
    data
  })
}

export function handleAction(data) {
  return request({
    url: '/vue-element-admin/userMgt/handleAction',
    method: 'post',
    data
  })
}

export function handleDelete(data) {
  return request({
    url: '/vue-element-admin/userMgt/handleDelete',
    method: 'post',
    data
  })
}
