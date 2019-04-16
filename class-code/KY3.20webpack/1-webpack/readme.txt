1.本地安装webpack

cnpm install webpack --save-dev

安装完后会在当前项目下新建node_modules目录, 安装的模块包就在 node_modules 目录下

测试是否安装成功
.\node_modules\.bin\webpack -v

提示安装webpack-cli
cnpm install webpack-cli --save-dev
安装在node_modules目录中

再测试是否安装成功
.\node_modules\.bin\webpack -v

输出对应的版本号,表示安装成功


2.卸载模块包
cnpm uninstall webpack -g

3.安装webpack
cnpm install webpack webpack-cli --save-dev

4.打包使用

(4.1)在web项目的根目录下新建src目录,在src目录下新建css,js,img目录等,用来存放一些静态文件比如.css,.js,图片文件等
(4.2)在src -> js目录中新建入口文件entry.js
(4.3)在项目根目录下,新建dist目录,用来存放打包后输出的文件
(4.4)在dist目录下新建html测试页面
(4.5)

(4.5.1)命令行打包:
在项目的根目录下的命令行,输入打包命令:
.\node_modules\.bin\webpack 入口文件的路径(比如.\src\js\entry.js) -o 打包后输出的文件的路径(比如.\dist\bundle.js) --mode development

说明:
--mode 模式
development 开发环境模式 , 开发阶段时使用
production 生产环境模式, 项目开发完后上线时使用

(4.5.2)配置文件打包(package.json, webpack.config.js):

在项目的根目录下,输入命令 npm init,会自动生成一个package.json文件(记录项目需要的依赖包)

新建配置文件 webpack.config.js,内容如下
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

项目的根目录下的命令行,输入:
.\node_modules\.bin\webpack
或
.\node_modules\.bin\webpack -w(实时监测,当修改源代码不需要重新打包)

(4.6)在html测试页面中引入打包后的js文件, 浏览器中查看html页面

