1.���ذ�װwebpack

cnpm install webpack --save-dev

��װ�����ڵ�ǰ��Ŀ���½�node_modulesĿ¼, ��װ��ģ������� node_modules Ŀ¼��

�����Ƿ�װ�ɹ�
.\node_modules\.bin\webpack -v

��ʾ��װwebpack-cli
cnpm install webpack-cli --save-dev
��װ��node_modulesĿ¼��

�ٲ����Ƿ�װ�ɹ�
.\node_modules\.bin\webpack -v

�����Ӧ�İ汾��,��ʾ��װ�ɹ�


2.ж��ģ���
cnpm uninstall webpack -g

3.��װwebpack
cnpm install webpack webpack-cli --save-dev

4.���ʹ��

(4.1)��web��Ŀ�ĸ�Ŀ¼���½�srcĿ¼,��srcĿ¼���½�css,js,imgĿ¼��,�������һЩ��̬�ļ�����.css,.js,ͼƬ�ļ���
(4.2)��src -> jsĿ¼���½�����ļ�entry.js
(4.3)����Ŀ��Ŀ¼��,�½�distĿ¼,������Ŵ����������ļ�
(4.4)��distĿ¼���½�html����ҳ��
(4.5)
(4.5.1)�����д��:
����Ŀ�ĸ�Ŀ¼�µ�������,���������

��.\node_modules\.bin\webpack  ����ļ���·��(����.\src\js\entry.js) -o  �����������ļ���·��(����.\dist\bundle.js) --mode development��

��
˵��:
--mode ģʽ
development ��������ģʽ , �����׶�ʱʹ��
production ��������ģʽ, ��Ŀ�����������ʱʹ��

(4.6)��html����ҳ�������������js�ļ�, ������в鿴htmlҳ��

