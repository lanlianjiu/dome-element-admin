
import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/system/roleMgt/getList',
    method: 'post',
    data
  })
}

export function setRolemenus(data) {
  return request({
    url: '/system/roleMgt/setRolemenus',
    method: 'post',
    data
  })
}

export function handleAction(data) {
  return request({
    url: '/system/roleMgt/handleAction',
    method: 'post',
    data
  })
}

export function handleDelete(data) {
  return request({
    url: '/system/roleMgt/handleDelete',
    method: 'post',
    data
  })
}
