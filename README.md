# T7

### 各JS文件理解：
index.js:<br>
1.直接对接html文件,用DOM操作引入各个网页元素。<br>
2.向server发出请求，将获得的JSON转化为JS对象，在页面正常显示。<br>
server.js:<br>
1.创建接口,接受请求。
2.获取resources输出的JSON。阅读public的文件，利用fs板块处理resources获得的网址。<br>
<mark>这里输出的是JS对象而非JSON</mark><br>
3.sendJson,统一设置状态码和请求头。<br>
4.解析路由，分发GET。<br>
4.处理404等报错。<br>

resources.js:<br>
存放各部分材料的JSON数据。<br>

### server.js作答
Content-type:声称body内数据为JSON<br>
require():引入Node内置板块和本地resources文件。<br>
Math.random生成的是小数，需要往后乘。<br>

### index.js解答
总思路：请求api,转JSON，清空List再一个个加回去。<br>
转json:response返回的是JS<br>
list清空：html里面有个占位<br>

### 回答小问题
##### 一.localhost?
localhost:是server.js指定的。<br>
##### 二.JSON.stringfy()功能？
JSON.stringfy(),JS对象转JSON字符串<br>
JSON.parse(),JSON字符串转JS<br>
##### 三.UTF-8?
让输入的内容变成字节，使计算机能处理。
##### 四.require()?
require()，引入NODE本身板块与那个resources。<br>
##### 五.按照id索引？
拓展功能：利用正则捕获数字。注意把所以"/"换成"\/",写"$"。<br>
id转数字比较。<br>
find((元素，下标，原数组)=>判断条件)<br>
这部分自己写炸了，AI给的函数，试着消化。

感谢伟大的吴悠老师视频，菜鸟教程以及T6代码（都有点依赖了）(T_T)<br>
还有，这样写md整齐点吗？<br>
