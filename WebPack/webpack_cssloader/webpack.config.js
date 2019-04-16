var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./src/js/entry.js',  //入口文件
    output:{
        path:__dirname + '/dist', //输出文件目录
        filename:'index.js'    //输出的文件名
    },
    
    //添加插件
    plugins:[
        new HtmlWebpackPlugin()
    ],

    module:{
        rules:[
            //解析css, 并把css添加到html的style标签里
            {test:/\.css$/,loader:['style-loader','css-loader']},

            //解析图片                                            规定图片的最大内存
            // {test:/.(jpg|png|gif|svg)$/,loader:['url-loader?limit=8192000&name=./[name].[ext]']}
            // {test:/.(jpg|png|gif|svg)$/,loader:['url-loader?limit=8192000']},
            {
                test:/\.(jpg|png|gif|svg)$/,
                use:[
                {
                    loader:"url-loader",
                    options:{
                        limit:25*1024
                    }
                }
            ]}
        ]
    },

    //devServer服务器
    devServer:{
        contentBase:__dirname,      
        port:7777   //修改端口号，默认8080
    }
}