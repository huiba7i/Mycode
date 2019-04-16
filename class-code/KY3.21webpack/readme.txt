-----1 css������:
(1)������ĿĿ¼,��ʼ������package.json�ļ�,��������:
npm init

(2)���ذ�װwebpack
npm install webpack webpack-cli --save-dev

�޸�package.json�ļ��е�ִ�е�����ű�
"scripts": {
	"build": "webpack"
}

(3)���ذ�װcss������
npm install css-loader style-loader --save-dev

(4)����Ŀ��Ŀ¼�´��������ļ� webpack.config.js
module.exports = {
  mode: 'development',
  entry: './src/js/entry.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  // ���������
  module: {
    rules: [
      // ����.css�ļ�,�����htmlҳ���<style>�����
      { test: /\.css$/, loader: ['style-loader', 'css-loader']}
    ]
  }
}

(5)������ļ�entry.js��ͨ��require����css�ļ�
require('../css/style.css')

(6)����,��������: npm run build


-----2 ͼƬ������
(1)���ذ�װͼƬ������
npm install url-loader --save-dev

(2)�޸������ļ�webpack.config.js , ����url������
module: {
    rules: [
      // ����.css�ļ�,����htmlҳ���<style>�����
      // �������Ǵ�������
      // { test: /\.css$/, loader: ['style-loader', 'css-loader']},
      { test: /\.css$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}]},

      // ����ͼƬ�ļ�
      { 
        test: /\.(jpg|png|gif|svg)$/, 
        use: [
          { 
            loader: 'url-loader',
            options: {
              limit: 8*1024 // 8Kb����ʹ��webpack���
            }
          }
        ]
      }
    ]
  }

  
-----3 ���ʹ��
html-webpack-plugin �Զ�����html�ļ�
(1)���ذ�װ���
npm install html-webpack-plugin --save-dev

(2)�������ļ�webpack.config.js�����
(2.1)ͨ��require������
var HtmlWebpackPlugin = require('html-webpack-plugin');
(2.2)�������
plugins: [
	new HtmlWebpackPlugin()
]

-----4 devServer������
(1)���ذ�װ
npm install webpack-dev-server --save-dev
(2)�޸�package.json�ļ��е�ִ�е�����ű�
"scripts": {
    "build": "webpack",
    "start": "webpack-dev-server"
}
(3)�������ļ�webpack.config.js�����
devServer: {
    contentBase: __dirname, // ��Ŀ�ĸ�Ŀ¼
    port: 8888 // �˿ں�,Ĭ�϶˿ں�8080
}

-----5 ��ҳ��Ӧ��(���������)
webpack.config.js����:

var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    // Ϊ�����ڶ�������
    one: './src/js/one.js',
    two: './src/js/two.js'
  },
  output: {
    path: __dirname+'/dist',
    filename: '[name].bundle.js' // ���ʱʹ������ļ�������
  },
  plugins: [ // �Զ�����html�ļ�
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['one'] // ������js�ļ�
    }),
    new HtmlWebpackPlugin({
      filename: 'two.html',
      chunks: ['two'] // ������js�ļ�
    })
  ],
  devServer: {
    port: 8686,
    contentBase: __dirname + '/dist'
  }
}