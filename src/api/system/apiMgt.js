import request from '@/utils/request'
export function getList(data) {
  return request({
    url: '/system/apiMgt/getList',
    method: 'post',
    data
  })
}

export function handleAction(data) {
  return request({
    url: '/system/apiMgt/handleAction',
    method: 'post',
    data
  })
}

export function handleDelete(data) {
  return request({
    url: '/system/apiMgt/handleDelete',
    method: 'post',
    data
  })
}
