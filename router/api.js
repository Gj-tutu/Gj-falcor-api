//api 路由 设置api相关接口

var express = require('express');
var api = express.Router();
var setting = require('../setting');
var falcorExpress = require('falcor-express');
var falcorRouter = require('falcor-router');
var check = require(setting.path+'/tools/check');
var Log = require('../tools/log');

function getRouter(item, index){
    var router = require(setting.apiRouterPath + "/" + item);
    if (check.isUndefined(router.list)) {
        router = [router];
    }else{
        router = router.list;
    }
    return router;
}

var routerList = ['demo'];
api.use('/api', falcorExpress.dataSourceRoute(function (req, res) {
    return new falcorRouter(Array.prototype.concat.apply([], routerList.map(getRouter)));
}));

module.exports = api;