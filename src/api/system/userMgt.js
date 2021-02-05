
import request from '@/utils/request'
export function getList(data) {
  return request({
    url: '/system/userMgt/getList',
    method: 'post',
    data
  })
}

export function handleAction(data) {
  return request({
    url: '/system/userMgt/handleAction',
    method: 'post',
    data
  })
}

export function handleDelete(data) {
  return request({
    url: '/system/userMgt/handleDelete',
    method: 'post',
    data
  })
}
