// 引入htmlwebpackplugin插件
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/entry.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  // 添加插件
  plugins: [
    new HtmlWebpackPlugin()
  ],
  // 添加服务器
  devServer: {
    contentBase: __dirname, // 项目的根目录
    port: 8888 // 端口号
  }
}