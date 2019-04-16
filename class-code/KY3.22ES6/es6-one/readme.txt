es6环境搭建
(1)初始化项目,生成package.json,输入命令:
cnpm init

(2)本地安装转码器babel,输入命令:
cnpm install babel-preset-env babel-cli --save-dev

(3)在项目的根目录下新建文件.babelrc配置转码规则及使用的插件,其内容如下
{
	"presets": ["env"],
	"plugins": []
}

(4)新建js文件,编写es6代码

(5)命令行输入转码命令

(5.1)单个文件转码:
.\node_modules\.bin\babel 源文件路径 -o 转码后的文件路径

(5.2)整个目录转码:
.\node_modules\.bin\babel 源文件目录路径 -d 转码后的目录路径

(5.3)修改package.json文件,添加执行命令脚本:
"scripts": {
    "build": "babel .\\src\\js -d .\\dist"
}
转码命令: cnpm run build


(6)创建html文件,引入转码后的js文件

