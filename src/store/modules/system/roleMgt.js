
import { getList, setRolemenus } from '@/api/system/roleMgt'
import { getAuthMenu } from '@/api/user'
const state = {

}

const mutations = {

}

const actions = {
  getList(state, params) {
    return new Promise((resolve, reject) => {
      getList(params).then(response => {
        if (!response) {
          reject('Verification failed, please Login again.')
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  setRolemenus(state, params) {
    return new Promise((resolve, reject) => {
      setRolemenus(params).then(response => {
        if (!response) {
          reject('Verification failed, please Login again.')
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getMenus() {
    return new Promise((resolve, reject) => {
      getAuthMenu().then(response => {
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
