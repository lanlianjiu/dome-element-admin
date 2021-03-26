import Vue from 'vue'
import Cookies from 'js-cookie'
import { loadScriptQueue } from '@/utils/form-generator/loadScript'
import axios from 'axios'
import Tinymce from '@/components/form-generator/tinymce/index.vue'
import Element from 'element-ui'
import '@/styles/element-variables.scss'
import router from '@/router'
Vue.component('tinymce', Tinymce)
Vue.prototype.$axios = axios
Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
const $previewApp = document.getElementById('previewApp')
const childAttrs = {
  file: '',
  dialog: ' width="600px" class="dialog-width" v-if="visible" :visible.sync="visible" :modal-append-to-body="false" '
}

window.addEventListener('message', init, false)

function buildLinks(links) {
  let strs = ''
  links.forEach(url => {
    strs += `<link href="${url}" rel="stylesheet">`
  })
  return strs
}

function init(event) {
  if (event.data.type === 'refreshFrame') {
    const code = event.data.data
    const attrs = childAttrs[code.generateConf.type]
    let links = ''

    if (Array.isArray(code.links) && code.links.length > 0) {
      links = buildLinks(code.links)
    }

    $previewApp.innerHTML = `${links}<style>${code.css}</style><div id="app"></div>`

    if (Array.isArray(code.scripts) && code.scripts.length > 0) {
      loadScriptQueue(code.scripts, () => {
        newVue(attrs, code.js, code.html)
      })
    } else {
      newVue(attrs, code.js, code.html)
    }
  }
}

function newVue(attrs, main, html) {
  // eslint-disable-next-line no-eval
  main = eval(`(${main})`)
  main.template = `<div>${html}</div>`
  new Vue({
    router,
    components: {
      child: main
    },
    data() {
      return {
        visible: true
      }
    },
    template: `<div><child ${attrs}/></div>`
  }).$mount('#app')
}
