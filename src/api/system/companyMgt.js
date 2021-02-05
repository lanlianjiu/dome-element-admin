
import request from '@/utils/request'
export function getList(data) {
  return request({
    url: '/system/companyMgt/getList',
    method: 'post',
    data
  })
}

export function handleAction(data) {
  return request({
    url: '/system/companyMgt/handleAction',
    method: 'post',
    data
  })
}

export function handleDelete(data) {
  return request({
    url: '/system/companyMgt/handleDelete',
    method: 'post',
    data
  })
}
