
import request from '@/utils/request'
export function getList(data) {
  return request({
    url: '/system/menuMgt/getList',
    method: 'post',
    data
  })
}

export function handleAction(data) {
  return request({
    url: '/system/menuMgt/handleAction',
    method: 'post',
    data
  })
}

export function handleDelete(data) {
  return request({
    url: '/system/menuMgt/handleDelete',
    method: 'post',
    data
  })
}
