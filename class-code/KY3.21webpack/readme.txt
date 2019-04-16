-----1 css加载器:
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


-----2 图片加载器
(1)本地安装图片加载器
npm install url-loader --save-dev

(2)修改配置文件webpack.config.js , 引入url加载器
module: {
    rules: [
      // 解析.css文件,放在html页面的<style>标记中
      // 加载器是从右往左
      // { test: /\.css$/, loader: ['style-loader', 'css-loader']},
      { test: /\.css$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}]},

      // 解析图片文件
      { 
        test: /\.(jpg|png|gif|svg)$/, 
        use: [
          { 
            loader: 'url-loader',
            options: {
              limit: 8*1024 // 8Kb以下使用webpack打包
            }
          }
        ]
      }
    ]
  }

  
-----3 插件使用
html-webpack-plugin 自动生成html文件
(1)本地安装插件
npm install html-webpack-plugin --save-dev

(2)在配置文件webpack.config.js中添加
(2.1)通过require引入插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
(2.2)创建插件
plugins: [
	new HtmlWebpackPlugin()
]

-----4 devServer服务器
(1)本地安装
npm install webpack-dev-server --save-dev
(2)修改package.json文件中的执行的命令脚本
"scripts": {
    "build": "webpack",
    "start": "webpack-dev-server"
}
(3)在配置文件webpack.config.js中添加
devServer: {
    contentBase: __dirname, // 项目的根目录
    port: 8888 // 端口号,默认端口号8080
}

-----5 多页面应用(多个入口起点)
webpack.config.js配置:

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