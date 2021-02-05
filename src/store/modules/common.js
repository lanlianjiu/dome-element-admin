import { uploadAction } from '@/api/user'
const state = {

}

const mutations = {
}

const actions = {

  uploadAction(state, params) {
    return new Promise((resolve, reject) => {
      uploadAction(params).then(response => {
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
