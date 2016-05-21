/**
 * Created by tutu on 15-11-25.
 */
var setting = require("../../setting");
var should = require('should');
var log = require(setting.path+"/tools/log");
var accountModel = require(setting.apiPath+"/model/demo");

describe('api model testing', function () {
    it('demo', function (done) {
        log.debug(accountModel);
        accountModel.get({id:123}).then(function(){
            log.debug("demo model is ok");
            done();
        }).catch(function(error){
            log.debug(error);
            done();
        });
    });
});