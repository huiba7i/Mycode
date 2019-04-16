ǰ��Vue���˵Ľ���

����ṩ�Ľӿ�:
��ѯ����ѧ����Ϣ�ӿ�
http://192.168.1.220:80/deal/data

ɾ��ָ��ѧ����Ϣ�ӿ�
http://192.168.1.220:80/deal/delete?stuid=1
��Ӧ���:
success - ɾ���ɹ�
fail - ɾ��ʧ��


ǰ�˽����������:
(1)��װaxios
cnpm install axios --save

(2)����Ŀ�������ļ� config -> index.js, ����ӿ��������
 dev: {
    // ������Դ�ķ���
    // Paths
    assetsSubDirectory: 'static', // ����Դ�ļ����ڸ�Ŀ¼
    assetsPublicPath: '/', // ����·��������/��ͷ,����: /static/��Դ�ļ����� 
	
    // ��������
    proxyTable: {
      '/deal': {
        target: 'http://http://192.168.1.220:80', // ��˷�����������: ����Ip+�˿ں�
        // secure: false, // �����https��Ҫ���õ�
        changeOrigin: true, // �ӿڿ�����Ҫ���õ�
        // ǰ�˷���ʱ����·�����﷨
        pathRewrite: {
          '^/deal': '/deal'
        }
      }
    },
	...
}

����ǰ�˷�����: cnpm run dev

(3)ʹ��,��js�ļ���
// ���� axios
import axios from 'axios'

// �����js����Ҫ��axios,���Խ��������Vue��ԭ����,����Ҫ�ظ��������ģ��
Vue.prototype.$http = axios
// get��ʽ
$http.get('url').then((resp)=>{
	// �ɹ��Ļص�
}).catch((error)=>{
	// ʧ�ܵĻص�
})

// ������
$http.get('url?id=10').then((resp)=>{
	// �ɹ��Ļص�
}).catch((error)=>{
	// ʧ�ܵĻص�
})

$http.get('url', {
	params: {
		id: 10
	}
}).then((resp)=>{
	// �ɹ��Ļص�
}).catch((error)=>{
	// ʧ�ܵĻص�
})

// post��ʽ
$http.post('url').then((resp)=>{
	// �ɹ��Ļص�
}).catch((error)=>{
	// ʧ�ܵĻص�
})

// ������
$http.post('url','id=10&name="zhs"').then((resp)=>{
	// �ɹ��Ļص�
}).catch((error)=>{
	// ʧ�ܵĻص�
})

import qs from 'querystring'
$http.post('url',qs.stringfy({id:10,name:"zhs"})).then((resp)=>{
	// �ɹ��Ļص�
}).catch((error)=>{
	// ʧ�ܵĻص�
})


