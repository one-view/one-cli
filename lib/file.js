const fs = require('fs')

const core = {
  getDirectories (root) {
    let dirs = []
    try {
      dirs = fs.readdirSync(root, { withFileTypes: true, encoding: 'utf-8' })
      dirs = dirs.reduce((accumulator, currentValue) => {
        if (currentValue.isDirectory()) {
          return accumulator.concat(currentValue.name)
        } else {
          return accumulator
        }
      }, [])
    } catch (err) {
      console.warn('Get Dirnames Error', err.message)
    }
    return dirs
  },
  existsDirectory (root, dirname) {
    let dirs = core.getDirectories(root)
    return dirs.includes(dirname)
  },
  exists (dirname) {
    try {
      return fs.existsSync(dirname)
    } catch (err) {
      return false
    }
  }
}

module.exports = core
