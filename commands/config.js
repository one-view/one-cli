const inquirer = require('inquirer')

module.exports = (...args) => {
  console.log(args.options)
  let questions = [
    {
      type: 'list',
      name: 'lang',
      choices: ['English', '中文'],
      message: 'select your language'
    }
  ]
  inquirer
    .prompt(questions)
    .then(answers => {
      let {lang} = answers
      console.log(lang)
    })
}
