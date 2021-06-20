/** 
 * 在这里写你需要定制化的webpack相关配置 
 * 了解更多请参考指南：https://cli.vuejs.org/guide/webpack.html
 * 详细解释：https://cli.vuejs.org/config/#vue-config-js
 **/
var argv = require('yargs').argv
var path = require('path')

const StyleLintPlugin = require('stylelint-webpack-plugin')

let configPath

switch(argv.config) {
  case 'dev': 
  configPath = path.join('./', 'config/dev.js')
  break
  case 'rel':
  configPath = path.join('./', 'config/rel.js')
  break
  case 'online':
  configPath =  path.join('./', 'config/online.js')
  break
}

module.exports = {
  baseUrl: './',
  devServer: {
    port: 9004,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    inline: false
  },
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      // 'element-ui': 'ELEMENT',
      'vue-router': 'VueRouter',
      // 'vuex': 'Vuex',
    },
    plugins: [
      new StyleLintPlugin(),
    ],
    output: {
      library: 'gsDiscussion',
      libraryTarget: 'umd'
    }
  },
  chainWebpack: config => {
    config
      .plugin('copy')
      .tap(args => {
        args = [
          [
            ...args[0],
            {
              from: './node_modules/element-ui/lib',
              to: path.join('./', 'libs/element-ui'),
              toType: 'dir'
            },
            {
              from: './node_modules/vue/dist',
              to: path.join('./', 'libs/vue'),
              toType: 'dir'
            },
            {
              from: './node_modules/vue-router/dist',
              to: path.join('./', 'libs/vue-router'),
              toType: 'dir'
            },
            {
              from: './node_modules/vuex/dist',
              to: path.join('./', 'libs/vuex'),
              toType: 'dir'
            },
            {
              from: configPath,
              to: path.join('./', 'config.js'),
              toType: 'file'
            }
          ]
        ]
        return args
      })
    config
      .plugin('html').tap(args => {
        args[0] = {
          ...args[0],
          addfix: process.env.NODE_ENV === 'development' ? '' : '.min'
        }
        return args
      })
  }
}
