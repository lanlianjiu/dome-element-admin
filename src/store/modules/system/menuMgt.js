import { getList } from '@/api/system/menuMgt'
const state = {

}

const mutations = {

}

const actions = {
  getList() {
    return new Promise((resolve, reject) => {
      getList().then(response => {
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
