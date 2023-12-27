const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack')
module.exports = {
  devServer: {
    host: '192.188.0.126',
    port: 8888,
    //https: true,
  },
  transpileDependencies: ['vue'],
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
};

