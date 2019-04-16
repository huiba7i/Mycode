前端Vue与后端的交互

后端提供的接口:
查询所有学生信息接口
http://192.168.1.220:80/deal/data

删除指定学生信息接口
http://192.168.1.220:80/deal/delete?stuid=1
响应结果:
success - 删除成功
fail - 删除失败


前端解决跨域问题:
(1)安装axios
cnpm install axios --save

(2)在项目的配置文件 config -> index.js, 中添加跨域的配置
 dev: {
    // 本地资源的访问
    // Paths
    assetsSubDirectory: 'static', // 将资源文件放在该目录
    assetsPublicPath: '/', // 访问路径必须以/开头,例如: /static/资源文件名称 
	
    // 跨域配置
    proxyTable: {
      '/deal': {
        target: 'http://http://192.168.1.220:80', // 后端服务器的域名: 主机Ip+端口号
        // secure: false, // 如果是https需要配置的
        changeOrigin: true, // 接口跨域需要配置的
        // 前端访问时跨域路径的语法
        pathRewrite: {
          '^/deal': '/deal'
        }
      }
    },
	...
}

重启前端服务器: cnpm run dev

(3)使用,在js文件中
// 导入 axios
import axios from 'axios'

// 当多个js中需要用axios,可以将其添加在Vue的原型中,不需要重复导入这个模块
Vue.prototype.$http = axios
// get方式
$http.get('url').then((resp)=>{
	// 成功的回调
}).catch((error)=>{
	// 失败的回调
})

// 带参数
$http.get('url?id=10').then((resp)=>{
	// 成功的回调
}).catch((error)=>{
	// 失败的回调
})

$http.get('url', {
	params: {
		id: 10
	}
}).then((resp)=>{
	// 成功的回调
}).catch((error)=>{
	// 失败的回调
})

// post方式
$http.post('url').then((resp)=>{
	// 成功的回调
}).catch((error)=>{
	// 失败的回调
})

// 带参数
$http.post('url','id=10&name="zhs"').then((resp)=>{
	// 成功的回调
}).catch((error)=>{
	// 失败的回调
})

import qs from 'querystring'
$http.post('url',qs.stringfy({id:10,name:"zhs"})).then((resp)=>{
	// 成功的回调
}).catch((error)=>{
	// 失败的回调
})


