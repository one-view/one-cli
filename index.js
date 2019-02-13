const commander = require('commander')
const download = require('download-git-repo')
const ora = require('ora')
const semver = require('semver')
const execa = require('execa')
const chalk = require('chalk')
const inquirer = require('inquirer')

const { version } = require('./package.json')

const file = require('./lib/file')
const commands = require('./commands')
// commander.version(version)

commander.version(version, '-v, --version')

const cwd = process.cwd()

console.log(file.existsDirectory(cwd, 'lib'))
console.log(file.existsDirectory(cwd, '/bin'))
console.log(file.exists('lib'))
console.log(file.exists('/bin'))
/**
$ one init
$ one ftp
$ one create
$ one test
$ one api
 */

// 基础 Koa 服务脚手架
// console.log(chalk.yellow(`  A newer version of one-cli is available.`))
// console.log()
// console.log('  latest:    ' + chalk.green('1.1.1'))
// console.log('  installed: ' + chalk.red('1.0.0'))
// console.log()

// cmds.forEach(cmd => {
//   let { name, desc } = cmd
//   commander.command(name).description(desc).action(() => {
//     console.log('command line: ', name)
//   })
// })

commander
  .command('demo')
  .option('-f --force', 'Overwrite target directory if it exists')
  .option('-n --no-git', 'Skip git initialization')
  .option('-c --clone', 'Use git clone when fetching remote preset')
  .option('-b --bare', 'Scaffold project without beginner instructions')
  .option('-p --preset <presetName>', 'Skip prompts and use saved or remote preset')
  .description('test use')
  .action((cmd) => {
    // console.log(cmd)
    let opts = cmd.options

    let cleanOpts = opts.reduce((res, opt) => {
      console.log(opt.long)
      let key = opt.long.replace(/^--/, '')
      if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
        res[key] = cmd[key]
      }
      return res
    }, {})
    console.log(cleanOpts)
    // inquirer
    //   .prompt([
    //     {
    //       type: 'confirm',
    //       name: 'ok',
    //       message: 'Generate project in current directory?'
    //     }, {
    //       type: 'input',
    //       name: 'input',
    //       message: 'input directory name',
    //       validate (val) {
    //         let isBlank = !val
    //         let message = isBlank ? 'do not allow blank value' : null
    //         return !isBlank || message
    //       }
    //     }, {
    //       type: 'list',
    //       name: 'type',
    //       message: 'choose list',
    //       choices: ['a', 'b', 'c']
    //     }
    //   ])
    //   .then(answers => {
    //     let {ok, input, type} = answers
    //     // let res = answers.ok ? 'ok' : 'fail'
    //     console.log(ok, input, type, process.cwd())
    //     // __dirname 当前文件所在目录
    //     // process.cwd() 运行时目录
    //   })
  })

commander
  .command('config')
  .description('adjust setting')
  .action(commands.config)

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

// console.log('inquirer')
// custom-cli
commander.parse(process.argv)
