
import { getUserlist, handleAction, handleDelete } from '@/api/system/userMgt'
const state = {

}

const mutations = {

}

const actions = {
  getUserlist(state, params) {
    return new Promise((resolve, reject) => {
      getUserlist(params).then(response => {
        if (!response) {
          reject('Verification failed, please Login again.')
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  handleAction(state, params) {
    return new Promise((resolve, reject) => {
      handleAction(params).then(response => {
        if (!response) {
          reject('Verification failed, please Login again.')
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  handleDelete(state, params) {
    return new Promise((resolve, reject) => {
      handleDelete(params).then(response => {
        if (!response) {
          reject('Verification failed, please Login again.')
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
