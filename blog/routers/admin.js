var express = require('express');
// 创建一个路由对象，此对象将会监听admin文件下的url
var router = express.Router();

router.get('/user', function (req, res, next) {
    res.send('user');
});

module.exports = router;//把router的结果作为模块的输出返回出去！