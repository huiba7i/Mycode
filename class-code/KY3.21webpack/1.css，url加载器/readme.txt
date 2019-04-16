css加载器:
(1)创建项目目录,初始化生成package.json文件,输入命令:
npm init

(2)本地安装webpack
npm install webpack webpack-cli --save-dev

修改package.json文件中的执行的命令脚本
"scripts": {
	"build": "webpack"
}

(3)本地安装css加载器
npm install css-loader style-loader --save-dev

(4)在项目根目录下创建配置文件 webpack.config.js
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
      // 解析.css文件,添加在html页面的<style>标记中
      { test: /\.css$/, loader: ['style-loader', 'css-loader']}
    ]
  }
}

(5)在入口文件entry.js中通过require引入css文件
require('../css/style.css')

(6)运行,输入命令: npm run build

