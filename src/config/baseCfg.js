
const prefix = {
  serviceDev: 'https://mockapi.eolinker.com/xwYarNI0b57b5de6ad4c0441c978c87098ba0ae25536f70', //  // eolinker的地址
  serviceProd: 'https://serviceProd.com'
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
