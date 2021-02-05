var shell = require('shelljs')

function buildFn() {
  if (shell.exec('npm run build').code !== 0) { // 执行npm run build 命令
    shell.echo('Error: build commit failed')
    shell.exit(1)
  }
}
module.exports = {
  buildFn
}
