const Koa = require('koa')
// const onevue = require('@one-vue/series')
// const server = require('@one-vue/server')
// const toolkit = require('@one-vue/toolkit')

// const middleware = utility.import('middlware')
// const router = utility.import('router')

const app = new Koa()

// app.use(middleware)
// router(app)

app.use((ctx) => {
  ctx.body = 'hello'
})

module.exports = app
