var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //指定模式
    mode:'development',
    // 为多个入口定义名称
    entry:{
        one:'./src/js/one.js',
        two:'./src/js/two.js'
    },
    //输出
    output:{
        path:__dirname + '/dist',
        filename:'[name].bundle.js'    //输出时使用的入口文件名称
    },
    plugins:[
        //自动生成html文件
        new HtmlWebpackPlugin({
            filename:'index.html',
            chunks:['one']      //依赖的JS文件
        }),
        new HtmlWebpackPlugin({
            filename:'two.html',
            chunks:['two']      //依赖的JS文件
        })
    ],
    //deServer服务器
    devServer:{
        port:7777,
        contentBase:__dirname + '/dist'
    }
}