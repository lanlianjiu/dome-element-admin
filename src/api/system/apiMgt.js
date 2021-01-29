import request from '@/utils/request'
export function getList(data) {
  return request({
    url: '/vue-element-admin/sysApi/list',
    method: 'post',
    data
  })
}

export function handleAction(data) {
  return request({
    url: '/vue-element-admin/sysApi/handleAction',
    method: 'post',
    data
  })
}

export function handleDelete(data) {
  return request({
    url: '/vue-element-admin/sysApi/handleDelete',
    method: 'post',
    data
  })
}
