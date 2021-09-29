const webpack = require("webpack");
module.exports = {
    publicPath: './',
    outputDir: 'hxmapbox',
    chainWebpack: config => {
      
    },
    devServer: {
      // mode: 'hash',
      open: 'localhost:8080',
      host: '0.0.0.0',
      port: 8080,
      proxy: {
        '/orsearch': {   
          target: 'http://10.61.5.63:8082',   
          changeOrigin: true,
          pathRewrite: {
            '^/orsearch': ''
          }
         },
         '/postgisapi': {   
          target: 'http://10.61.5.63:8081',   
          changeOrigin: true,
          pathRewrite: {
            '^/postgisapi': ''
          }
         },
      }
    }
  }
  