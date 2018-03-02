const commander = require('commander')

const {version} = require('./package.json')

commander.version(version)

const cmds = [
  {
    name: 'init',
    desc: 'initialize a new project'
  },
  {
    name: 'config',
    desc: 'cli tool setting'
  }
]

cmds.forEach(cmd => {
  let {name, desc} = cmd
  commander
    .command(name)
    .description(desc)
    .action(() => {
      console.log('command line: ', name)
    })
})

commander.parse(process.argv)
