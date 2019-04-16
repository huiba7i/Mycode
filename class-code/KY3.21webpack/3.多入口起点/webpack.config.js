var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    // 为多个入口定义名称
    one: './src/js/one.js',
    two: './src/js/two.js'
  },
  output: {
    path: __dirname+'/dist',
    filename: '[name].bundle.js' // 输出时使用入口文件的名称
  },
  plugins: [ // 自动生成html文件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['one'] // 依赖的js文件
    }),
    new HtmlWebpackPlugin({
      filename: 'two.html',
      chunks: ['two'] // 依赖的js文件
    })
  ],
  devServer: {
    port: 8686,
    contentBase: __dirname + '/dist'
  }
}