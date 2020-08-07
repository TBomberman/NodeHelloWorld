var request = require('supertest');
var app = require('../app.js');
describe('GET /', function() {
 it('respond with hello world', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('Hello, world!', done);
 });
});

var assert = require('chai').assert;
assert.isEqual(app.testFunction(), 123);
