
const prefix = {
  serviceDev: '', // https://easy-mock.com/mock/5d537679ff99cc660ff71df6/   https://serviceDev.com/
  serviceProd: 'https://serviceProd.com/'
}

const getBaseUrl = function(type) {
  const BASE = prefix[type]
  return {
    baseUrl: BASE
  }
}

const URL = {

  // 测试配置
  serviceDev: Object.assign(getBaseUrl('serviceDev'), {
    tokenName: 'access-token'
  }),

  // 正式
  serviceProd: Object.assign(getBaseUrl('serviceProd'), {
    tokenName: 'access-token'
  })
}

// 适配多人开发时不同人有不同的配置文件，读取后合并成一个整体配置文件
const modulesFiles = require.context('./extraCfg', true, /\.js$/)
modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath)

  if (value.default['serviceDev']) {
    Object.assign(URL['serviceDev'], value.default['serviceDev'])
  }

  if (value.default['serviceProd']) {
    Object.assign(URL['serviceProd'], value.default['serviceProd'])
  }
}, {})

export default URL
