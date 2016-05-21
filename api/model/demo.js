/**
 * 账户
 * Created by tutu on 15-11-14.
 */
var jsong = require('falcor-json-graph');
var setting = require('../../setting');
var log = require(setting.path+'/tools/log');
var check = require(setting.path+'/tools/check');
var model = require(setting.apiPath+"/model");

model.key = "demo:{id}";
model.tableKey = "demoList";
model.args = ["abc", "dbc"];

module.exports = model;
