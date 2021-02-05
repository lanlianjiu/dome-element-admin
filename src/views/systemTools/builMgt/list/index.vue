<template>
  <div>
    <button type="primary" @click="buildPage">打包</button>
  </div>
</template>
<script>
import shell from '../../../../../buildCfg.js'

export default {
  name: 'BuilMgt',
  data() {
    return {
    }
  },
  created() {
    // var cmd = new ActiveXObject('WScript.Shell')
    // console.log(cmd)
  },
  methods: {
    buildPage() {
      console.log(shell)
      shell.exec('npm run build:prod')
    }
  }
}
</script>
