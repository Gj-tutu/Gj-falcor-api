/**
 * 账户
 * Created by tutu on 15-11-14.
 */
var jsong = require('falcor-json-graph');
var setting = require('../../setting');
var log = require(setting.path+'/tools/log');
var check = require(setting.path+'/tools/check');
var apiHandle = require(setting.apiPath+'/apiHandle');
var demoModel = require(setting.apiPath+'/model/demo');

function demoList(path){
    return demoModel.list(path.id)
        .then(function(){
        var resultList = [];
        path.id.map(function (id) {
            path.key.map(function (key) {
                resultList.push({
                    path: ["demo", id, key],
                    value: key
                });
            });
        });
        return resultList;
    });
}

var demo = [{
    route: "demo[{integers:id}][{keys:key}]",
    get: apiHandle(demoList()).arg("id").arg("key").handle()
}];

module.exports.list = demo;
