const semver = require('semver')
const chalk = require('chalk')
const requiredNodeVersion = require('../package.json').engines.node
const slash = require('slash')

const checkNodeVersion = (wanted, id) => {
  if (!semver.satisfies(process.version, wanted)) {
    console.log(chalk.red(
      'You are using Node ' + process.version + ', but this version of ' + id +
      ' requires Node ' + wanted + '.\nPlease upgrade your Node version.'
    ))
    process.exit(1)
  }
}

checkNodeVersion(requiredNodeVersion, 'one-cli')
