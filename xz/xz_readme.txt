�������: 
(����������ȹر�����vscode)
1. ����xampp: ����mysql��apache
  mysql�����ݿ����������������
  apache����ҳ��������ר����������mysql�Ĺ�����: http://localhost/phpmyadmin
2. ��vscode��xz��Ŀ�ļ���,�Ҽ����app.js�ļ���ѡ�����ն�/�������д򿪣�����node app.js���س�����
3. ����: 
//�����ҳ��Ʒ
http://localhost:5050/index
//��id��ѯ��Ʒ����
http://localhost:5050/details?lid=5
���ˣ�����˳������гɹ���

ǰ��: ��ʱ����ʹ��live server
      Ҳ���ܸ���·���������
ֻ��: ���������ַ���ֶ�����http://localhost:5050/index.html

ʵ��һ: ��ajax������ҳ��Ʒ:
1. ��xz/public/js�ļ����£��½�index.js�����������к���ҳ�йص�js����
2. ��xz/public/index.html��<body>��β,��<script>����js/index.js
3. ��js/index.js�б�дajax�������
����: 
���������ַ���ֶ�����http://localhost:5050/index.html
��f12->console ����һ�������������������,˵���ɹ���

ʵ���: ��ajax������Ʒ����:
1. ��xz/public/js�ļ����£��½�details.js�����������к�����ҳ�йص�js����
2. ��xz/public/product_details.html��<body>��β,��<script>����js/details.js
3. ��js/details.js�б�дajax�������
����: 
���������ַ���ֶ�����http://localhost:5050/product_details.html?lid=10��5��21
��f12->console ����һ�����������������: {product:{lid:10��5��21,...},specs:[],pics:[]}˵���ɹ���

ʵ����: �����ҳ��Ʒ
1. ע��: index.html��58~68�е�div.card,�Լ�71~81�е�div.card��
2. index.html��Ϊ57��div.card�ĸ�Ԫ�����id="p1"��Ϊ70��div.card�ĸ�Ԫ�����id="p2"
3. ��index.js��success������ʵ�����ҳ���js����
���ԣ�
���������ַ������: localhost:5050 �س�
����һ¥ǰ������Ʒ������ʾ��˵���ɹ�

ʵ���ģ������Ʒ���鵽����ҳ
1. product_details.html��:
    66��h6��id="ptitle"��ɾ������
    68��a��id="psubtitle"��ɾ������
    73��h2��id="pprice"��ɾ������
    77��span��id="ppromise"��ɾ������
2. product_details.html��:
    90���ĸ�<a>Ԫ��ɾ��������<a>��ע�͵�һ��<a>
    89���ĸ�<a>�ĸ�Ԫ�ؼ�id="specs"
3. ��details.js��success�б�дjs����
����: 
���������ַ���ֶ����룺 
http://localhost:5050/product_details.html?lid=10��5��21
���: ҳ������ʾ����Ʒ���ƺͼ۸����ű仯��˵���ɹ���ͼƬ��ʱ���ܱ䣩
�������б��е�ĳ��a��������ҳ�����Ʒ��Ϣͬʱ�仯���ҵ�ǰ�����a�к�ɫ�����߿�Ҳ˵���ɹ���

ʵ����: �������: 
1. ��xz/public�ļ��м��е�xz�ļ����ⲿ��ƽ�����γ�public��xz������Ŀ��ǰ��˷��롣
2. ��xz/�ļ�����app.js��ע������app.use(cors({...}))����
3. ��vscode�ն��а�ctrl+cֹͣnodejs����˳���������node app.js�������������˳���
4. �ٴ�һ��vscode�´��ڣ����ļ���public
5. �Ҽ�����index.html��ѡ����live server���С����: һ¥��Ʒû�������򿪿���̨�������������

ʵ����: res.writeHead()�����������
1. ��xz/routes/�ļ����е�index.js
2. �����res.send()���͸�Ϊres.writeHead(); res.write();��res.end()���仰��������ο�xz��Դ���룩������res.writeHead()�ж���ǰ����Ŀʹ�õ�live server���е�ip��ַ�Ͷ˿ں�:http://127.0.0.1:5500.
3. ��vscode�ն��а�ctrl+cֹͣnodejs����˳���������node app.js�������������˳���
4. �����ڴ�public�ļ��е�vscode����live server����index.html��������Ȼǰ����Ŀ�ͺ����Ŀ��ַ�Ͷ˿ڲ�ͬ�������Ѿ����Ի�ȡ������ݣ������ٱ���������ˡ�

ʵ����: corsģ��������
1. ע��xz/routes/�ļ����е�index.js�У�res.writeHead()һ�仰������res.write()��res.end()���仰��
2. ��xz/�ļ�����app.js��������app.use(cors({...}))���ݽ⿪ע�͡�
3. ��vscode�ն��а�ctrl+cֹͣnodejs����˳���������node app.js�������������˳���
4. �����ڴ�public�ļ��е�vscode����live server����index.html��������Ȼǰ����Ŀ�ͺ����Ŀ��ַ�Ͷ˿ڲ�ͬ������Ҳ���Ի�ȡ������ݣ������ٱ���������ˡ�






