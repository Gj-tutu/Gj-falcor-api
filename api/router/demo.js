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

function one(path){
    return demoModel.list(path.id)
        .then(function(){
        var demo = {};
        path.id.map(function (id) {
            path.key.map(function (key) {
                demo = {
                    path: ["demo", id, key],
                    value: key
                };
            });
        });
        return demo;
    });
}
module.exports.list = [{
    route: "demo[{integers:id}][{keys:key}]",
    get: apiHandle(one).arg("id").arg("key").handle()
}];;
