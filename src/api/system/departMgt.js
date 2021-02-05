
import request from '@/utils/request'
export function getList(data) {
  return request({
    url: '/system/departMgt/getList',
    method: 'post',
    data
  })
}

export function handleAction(data) {
  return request({
    url: '/system/departMgt/handleAction',
    method: 'post',
    data
  })
}

export function handleDelete(data) {
  return request({
    url: '/system/departMgt/handleDelete',
    method: 'post',
    data
  })
}
