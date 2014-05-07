
var test = require('tape');
var mongourl = require('../index');

test('simple', function(t) {
  var url = mongourl(28017, 'localhost');
  t.equal(url, 'mongodb://localhost:28017');
  t.end();
});

test('simple with db', function(t) {
  var url = mongourl(28017, 'localhost', 'test');
  t.equal(url, 'mongodb://localhost:28017/test');
  t.end();
});

test('simple with db and option', function(t) {
  var url = mongourl(28017, 'localhost', 'test', {
    maxPoolSize: 100
  });
  t.equal(url, 'mongodb://localhost:28017/test?maxPoolSize=100');
  t.end();
});