var express = require('express');

// 创建一个路由对象，此对象将会监听api文件夹下的url
var router = express.Router();

router.get('/user', function (req, res, next) {
    res.send('api-user');
});

module.exports = router;//把router的结果作为模块的输出返回出去！