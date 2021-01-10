
import request from '@/utils/request'
export function getList(data) {
  return request({
    url: '/vue-element-admin/sysCompany/list',
    method: 'post',
    data
  })
}

export function handleAction(data) {
  return request({
    url: '/vue-element-admin/sysCompany/handleAction',
    method: 'post',
    data
  })
}

export function handleDelete(data) {
  return request({
    url: '/vue-element-admin/sysCompany/handleDelete',
    method: 'post',
    data
  })
}
