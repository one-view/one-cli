const commander = require('commander')
const download = require('download-git-repo')
const ora = require('ora')
const semver = require('semver')
const execa = require('execa')
const chalk = require('chalk')
const inquirer = require('inquirer')

const { version } = require('./package.json')

// commander.version(version)

commander.version(version, '-v, --version')

/**
$ one init
$ one ftp
$ one create
$ one test
$ one api
 */
const cmds = [
  {
    name: 'init',
    desc: 'initialize a new project'
  },
  {
    name: 'ftp',
    desc: 'ftp resource'
  },
  {
    name: 'config',
    desc: 'cli tool setting'
  }
]

// console.log(chalk.yellow(`  A newer version of one-cli is available.`))
// console.log()
// console.log('  latest:    ' + chalk.green('1.1.1'))
// console.log('  installed: ' + chalk.red('1.0.0'))
// console.log()

cmds.forEach(cmd => {
  let { name, desc } = cmd
  commander.command(name).description(desc).action(() => {
    console.log('command line: ', name)
  })
})

commander
  .command('dev <path>')
  .option('-l, --local', 'use local template')
  .description('test use')
  .action((path, cmd) => {
    console.log(path, cmd.local ? 'use local' : 'not local')

    let template = 'vuejs-templates'
    let name = 'webpack-simple'
    const spinner = ora('downloading template ' + name)
    console.log(process.version)
    spinner.start()
    // 参数 如果存在参数
    // 修改默认配置文件
    /**
      检测模板是否存在, 根据参数, 获取本地还是远程
      - local
        - success -> use directly
        - fail -> download
      - download
        - success
          - checkversion -> update
        - fail
          - log
     */
    // download(`${template}/${name}`, `templates/${name}`, err => {
    //   spinner.stop()
    //   console.log(err ? 'err' : 'ok')
    // })
    // 更新机制
  })

commander
  .command('list')
  .description('list remote repos name of config path')
  .action(() => {
    let inPlace = true
    /**
      templates
      node template
      browser template
     */
    // ;(async () => {
    //   const stream = await execa.shell('git status --colors').stdout
    //   // console.log(stream)
    //   // stream.pipe(process.stdout)
    //   // => 'unicorns'
    // })()
    console.log('request remote github api to get repos')

    // inquirer test inquirer
    inquirer
      .prompt([
        {
          type: 'confirm',
          message: inPlace
            ? 'Generate project in current directory?'
            : 'Target directory exists. Continue?',
          name: 'ok'
        }
      ])
      .then(answers => {
        if (answers.ok) {
          console.log('ok')
        }
      })
  })
  // checkversion make sure for update with friendly ui

console.log('inquirer')
// custom-cli
commander.parse(process.argv)
