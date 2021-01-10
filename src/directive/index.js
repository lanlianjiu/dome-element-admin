import Vue from 'vue'
const requireDirective = require.context('./', true, /.+\index.js$/)
requireDirective.keys().forEach(fileName => {
  const directiveConfig = requireDirective(fileName)
  const directiveName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  Vue.directive(directiveName, directiveConfig.default || directiveConfig)
})
