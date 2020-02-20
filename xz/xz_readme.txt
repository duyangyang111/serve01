启动后端: 
(保险起见，先关闭所有vscode)
1. 启动xampp: 启动mysql和apache
  mysql是数据库服务器，保存数据
  apache是网页服务器，专门用于运行mysql的管理工具: http://localhost/phpmyadmin
2. 用vscode打开xz项目文件夹,右键点击app.js文件，选择在终端/命令行中打开，输入node app.js，回车运行
3. 测试: 
//获得首页商品
http://localhost:5050/index
//用id查询商品详情
http://localhost:5050/details?lid=5
到此，服务端程序运行成功！

前端: 暂时不能使用live server
      也不能复制路径到浏览器
只能: 在浏览器地址栏手动输入http://localhost:5050/index.html

实验一: 用ajax请求首页商品:
1. 在xz/public/js文件夹下，新建index.js用来保存所有和首页有关的js代码
2. 在xz/public/index.html中<body>结尾,用<script>引入js/index.js
3. 在js/index.js中编写ajax请求代码
测试: 
在浏览器地址栏手动输入http://localhost:5050/index.html
打开f12->console 看到一个包含六个对象的数组,说明成功！

实验二: 用ajax请求商品详情:
1. 在xz/public/js文件夹下，新建details.js用来保存所有和详情页有关的js代码
2. 在xz/public/product_details.html中<body>结尾,用<script>引入js/details.js
3. 在js/details.js中编写ajax请求代码
测试: 
在浏览器地址栏手动输入http://localhost:5050/product_details.html?lid=10或5或21
打开f12->console 看到一个对象，由三部分组成: {product:{lid:10或5或21,...},specs:[],pics:[]}说明成功！

实验三: 填充首页商品
1. 注释: index.html中58~68行的div.card,以及71~81行的div.card。
2. index.html中为57行div.card的父元素添加id="p1"，为70行div.card的父元素添加id="p2"
3. 在index.js中success函数内实现填充页面的js代码
测试：
在浏览器地址栏输入: localhost:5050 回车
看到一楼前两个商品正常显示，说明成功

实验四：填充商品详情到详情页
1. product_details.html中:
    66行h6加id="ptitle"并删除内容
    68行a加id="psubtitle"并删除内容
    73行h2加id="pprice"并删除内容
    77行span加id="ppromise"并删除内容
2. product_details.html中:
    90行四个<a>元素删除后三个<a>，注释第一个<a>
    89行四个<a>的父元素加id="specs"
3. 在details.js的success中编写js代码
测试: 
在浏览器地址栏手动输入： 
http://localhost:5050/product_details.html?lid=10或5或21
结果: 页面中显示的商品名称和价格随着变化，说明成功（图片暂时不能变）
点击规格列表中的某个a，则整个页面的商品信息同时变化，且当前点击的a有红色高亮边框，也说明成功！

实验五: 跨域错误: 
1. 将xz/public文件夹剪切到xz文件夹外部，平级，形成public和xz两个项目，前后端分离。
2. 打开xz/文件夹下app.js，注释其中app.use(cors({...}))内容
3. 在vscode终端中按ctrl+c停止nodejs服务端程序，再输入node app.js，重启服务器端程序
4. 再打开一个vscode新窗口，打开文件夹public
5. 右键单击index.html，选择用live server运行。结果: 一楼商品没出来，打开控制台，还报跨域错误。

实验六: res.writeHead()解决跨域问题
1. 打开xz/routes/文件夹中的index.js
2. 如果是res.send()，就改为res.writeHead(); res.write();和res.end()三句话（具体请参考xz中源代码）。并在res.writeHead()中定义前端项目使用的live server运行的ip地址和端口号:http://127.0.0.1:5500.
3. 在vscode终端中按ctrl+c停止nodejs服务端程序，再输入node app.js，重启服务器端程序
4. 重新在打开public文件夹的vscode中用live server运行index.html，发现虽然前端项目和后端项目地址和端口不同，但是已经可以获取后端数据，并不再报跨域错误了。

实验七: cors模块解决跨域
1. 注释xz/routes/文件夹中的index.js中，res.writeHead()一句话，保留res.write()和res.end()两句话。
2. 打开xz/文件夹下app.js，将其中app.use(cors({...}))内容解开注释。
3. 在vscode终端中按ctrl+c停止nodejs服务端程序，再输入node app.js，重启服务器端程序
4. 重新在打开public文件夹的vscode中用live server运行index.html，发现虽然前端项目和后端项目地址和端口不同，但是也可以获取后端数据，并不再报跨域错误了。






