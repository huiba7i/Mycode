es6�����
(1)��ʼ����Ŀ,����package.json,��������:
cnpm init

(2)���ذ�װת����babel,��������:
cnpm install babel-preset-env babel-cli --save-dev

(3)����Ŀ�ĸ�Ŀ¼���½��ļ�.babelrc����ת�����ʹ�õĲ��,����������
{
	"presets": ["env"],
	"plugins": []
}

(4)�½�js�ļ�,��дes6����

(5)����������ת������

(5.1)�����ļ�ת��:
.\node_modules\.bin\babel Դ�ļ�·�� -o ת�����ļ�·��

(5.2)����Ŀ¼ת��:
.\node_modules\.bin\babel Դ�ļ�Ŀ¼·�� -d ת����Ŀ¼·��

(5.3)�޸�package.json�ļ�,���ִ������ű�:
"scripts": {
    "build": "babel .\\src\\js -d .\\dist"
}
ת������: cnpm run build


(6)����html�ļ�,����ת����js�ļ�

