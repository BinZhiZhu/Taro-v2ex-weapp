 'use strict'

 const path = require('path')

 module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.ts', '.json','.scss'],
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/taro-ui': path.resolve(__dirname, 'src/taro-ui'),
      '@/constants': path.resolve(__dirname, 'src/constants'),
    },
  }
}
