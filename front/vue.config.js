const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  outputDir: './public/dist',
  transpileDependencies: true
})
