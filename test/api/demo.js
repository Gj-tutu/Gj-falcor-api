/**
 * Created by tutu on 15-11-16.
 */
var setting = require("../../setting");
var should = require('should');
var request = require('supertest');
var app = require(setting.path+'/app');
var log = require(setting.path+"/tools/log");

describe('api router account testing', function () {
    it('get list', function (done) {
        request(app)
            .get('/api?paths=[["demo",[0,1],["name","title"]],["demo",[2,3],["name","title"]]]&method=get')
            .end(function(err, res){
                if (err) throw err;
                log.debug("result->", res.text, "->end");
                var json = JSON.parse(res.text);
                json.jsonGraph.should.eql({account: {
                    0: {title: "title", name: "name"},
                    1: {title: "title", name: "name"},
                    2: {title: "title", name: "name"},
                    3: {title: "title", name: "name"}
                }});
                done();
            });
    });
    it('get one', function (done) {
        request(app)
            .get('/api?paths=[[["demo"],0,["name","title"]]]&method=get')
            .end(function(err, res){
                if (err) throw err;
                log.debug("result->", res.text, "->end");
                var json = JSON.parse(res.text);
                json.jsonGraph.should.eql({account: {
                    0: {title: "title", name: "name"}
                }});
                done();
            });
    });
    it('get one not key', function (done) {
        request(app)
            .get('/api?paths=[["demo",0]]&method=get')
            .end(function(err, res){
                if (err) throw err;
                log.debug("result->", res.text, "->end");
                var json = JSON.parse(res.text);
                json.jsonGraph.should.have.property("error");
                done();
            });
    });
    it('get one not id', function (done) {
        request(app)
            .get('/api?paths=[[["demo"]]]&method=get')
            .end(function(err, res){
                if (err) throw err;
                log.debug("result->", res.text, "->end");
                var json = JSON.parse(res.text);
                json.jsonGraph.should.have.property("demo", {$type: "atom"});
                done();
            });
    });
});