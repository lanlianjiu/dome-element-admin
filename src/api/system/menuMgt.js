
import request from '@/utils/request'
export function getList(data) {
  return request({
    url: '/vue-element-admin/menuMgt/list',
    method: 'post',
    data
  })
}

export function handleAction(data) {
  return request({
    url: '/vue-element-admin/menuMgt/handleAction',
    method: 'post',
    data
  })
}

export function handleDelete(data) {
  return request({
    url: '/vue-element-admin/menuMgt/handleDelete',
    method: 'post',
    data
  })
}
