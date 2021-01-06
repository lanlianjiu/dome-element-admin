
import request from '@/utils/request'

export function getRolelist(data) {
  return request({
    url: '/vue-element-admin/sysRole/getRolelist',
    method: 'post',
    data
  })
}

export function setRolemenus(data) {
  return request({
    url: '/vue-element-admin/sysRole/setRolemenus',
    method: 'post',
    data
  })
}

export function handleAction(data) {
  return request({
    url: '/vue-element-admin/sysRole/handleAction',
    method: 'post',
    data
  })
}

export function handleDelete(data) {
  return request({
    url: '/vue-element-admin/sysRole/handleDelete',
    method: 'post',
    data
  })
}
