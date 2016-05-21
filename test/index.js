/**
 * Created by tutu on 15-11-16.
 */

var should = require('should');
var app = require('../app');
var request = require('supertest');
var log = require("../tools/log");

describe('router testing', function () {
    it('users have not id response', function (done) {
        request(app)
            .get('/')
            .end(function(err, res){
                if (err) throw err;
                should.exist(res.text);
                done();
            });
    });
});