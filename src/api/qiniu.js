import request from '@/utils/request'

export function uploadAction(data) {
  return request({
    url: '/system/upLoad',
    method: 'post',
    data
  })
}
