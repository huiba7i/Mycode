module.exports = {
  // 指定模式
  mode: 'development',
  // entry属性 配置入口文件
  entry: './src/js/entry.js',

  // output属性 配置打包后的输出文件
  output: {
    filename: 'bundle.js', // 输出文件的名称
    path: __dirname + '/dist' // 输出文件所在的目录,必须是绝对路径
  }
}