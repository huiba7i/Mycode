module.exports = {
  mode: 'development',
  entry: './src/js/entry.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  // 引入加载器
  module: {
    rules: [
      // 解析.css文件,放在html页面的<style>标记中
      { test: /\.css$/, loader: ['style-loader', 'css-loader']}
    ]
  }
}