css������:
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

