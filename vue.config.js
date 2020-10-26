
const env = process.env.NODE_ENV
// const path = require('path')
module.exports = {
  publicPath: env === 'development' ? '/' : "/board/", // string    // 输出解析文件的目录，url 相对于 HTML 页面
  configureWebpack: {
  }
}
