/**
 * Created by tutu on 15-11-21.
 */

var jsong = require('falcor-json-graph');
var setting = require('../setting');
var log = require(setting.path+'/tools/log');
var check = require(setting.path+'/tools/check');
var api = function(handle){
    var _arg = [];
    var _handle = handle;
    var api = this;

    this.handle = function(){
        return function(path){
            log.debug(path);
            if(!api.checkArg(_arg, path))
                return false;
            var result = _handle(path);
            log.debug(result);
            return result;
        }
    };

    this.arg = function(argKey){
        _arg.push(argKey);
        return this;
    };

    this.checkArg = function(arg, path){
        for(var i=0;i<arg.length;i++){
            if(check.isUndefined(path[arg[i]][0])) return false;
        }
        return true;
    };
};

var apiHandle = function(handle){
    return new api(handle);
};

apiHandle.error = function(message){
    return api.error.apply(api, message);
};

module.exports = apiHandle;
