/**
 * Created by tutu on 15-11-24.
 */

var redis = require("redis");
var promise = require("es6-promise").Promise;
var setting = require("../setting");
var log = require(setting.path+"/tools/log");
require(setting.path+"/tools/format");

var _redis = redis.createClient();

var model = function(){
    this.key = "";
    this.tableKey = "";
    this.args = [];
};

model.prototype.get = function(obj){
    var self = this;
    return new promise(function(resolve, reject){
        var key = self.key.format(obj);
        _redis.hgetall(key, function(err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};

model.prototype.new = function(obj){
    var self = this;
};

model.prototype.del = function(obj){
    var self = this;
};

model.prototype.length = function(){
    var self = this;
};

module.exports = new model();