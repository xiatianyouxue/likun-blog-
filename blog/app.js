// // 加载express
// var express = require('express');
// //创建app应用，相当于=>Node.js Http.createServer();
// var app = express();
// //监听http请求
// app.listen(9001);
// app.get('/', function (req, res, next) {
//     res.render('index');
// });
// // 定义模板引擎，使用swig.renderFile方法解析后缀为html的文件
// var swig=require('swig');
// app.engine('html',swig.renderFile);
// // 设置模板存放目录
// app.set('views','./views');
// // 注册模板引擎
// app.set('view engine','html');
// swig.setDefaults({cache:false});

// // app.get('/css.css', function (req,res,next) {
// //     res.setHeader('content-type','text/css');
// //     res.send('body {background: red;}');
// // });
// app.use('/public', express.static(__dirname + '/public'));


// 业务逻辑
// 1.首先加载express模块
var express = require("express")
//2.创建APP应用 相当于创建了一个服务器
var app = express()
//3.设置静态文件托管
// app.use('/public', express.static(__dirname + '/public'))

//4.定义模板引擎，使用swig.renderFile方法解析后缀为html的文件
var swig = require('swig');
// 调试优化
// swig.setDefaults({ cache: false });
//第一个参数是模板引擎的名称,第二个参数是调用模板引擎的方法
app.engine('html', swig.renderFile);

//5.设置模板存放目录
app.set('views', './views');
// 注册模板引擎
app.set('view engine', 'html');


app.get("/", function (req, res, next) {
    // res.render("index")
    res.render("index")
})

//监听http请求
app.listen(9001);

// app.use('/admin', require('./routers/admin'))
// app.use('/api', require('./routers/api'))
// app.use('/main', require('./routers/main')) 