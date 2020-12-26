
/**
 * @name:
 * @test: test font
 * @msg:
 * @param {*}
 * @return {*}
 */
import store from '@/store'
import router from '@/router'
const router_action = (Vue) => {
  Vue.prototype.router_go = (self, path, parmas, option) => {
    if (option && option.closeTag) {
      store.dispatch('tagsView/delView', self.$route)
    }

    const params = { path: path, query: parmas }

    if (path && option && option.type) {
      router[option.type](params)
    } else if (path) {
      router.push(params)
    } else {
      router.go(-1)
    }
  }
}
export default router_action
