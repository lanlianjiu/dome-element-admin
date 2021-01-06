
import { getRolelist, setRolemenus, handleAction, handleDelete } from '@/api/system/roleMgt'
import { getAuthMenu } from '@/api/user'
const state = {

}

const mutations = {

}

const actions = {
  getRolelist(state, params) {
    return new Promise((resolve, reject) => {
      getRolelist(params).then(response => {
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
  },
  getMenus(state, params) {
    return new Promise((resolve, reject) => {
      getAuthMenu(params).then(response => {
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
