var request = require('supertest');
var app = require('../app.js');
var pjson = require('../package.json');
describe('GET /', function() {
 it('respond with hello world', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('Hello, world! v' + pjson.version, done);
 });
});

var assert = require('chai').assert;
assert.equal(app.testFunction(), 123);
