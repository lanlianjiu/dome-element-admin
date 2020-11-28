/*
 * @Descripttion:
 * @Author: ex_lanlj2@partner.midea.com
 * @Date: 2020-11-24 14:57:59
 * @LastEditors: ex_lanlj2@partner.midea.com
 * @LastEditTime: 2020-11-28 13:06:47
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function getAuthMenu(token) {
  return request({
    url: '/vue-element-admin/user/getAuthMenu',
    method: 'get',
    params: { token }
  })
}
