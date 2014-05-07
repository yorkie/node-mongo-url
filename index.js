
var url = require('url');

function createMongoURL(port, hostname, db, option) {
  return 'mongodb:' + url.format({
    hostname: hostname,
    port: port,
    pathname: db,
    query: option
  });
}

module.exports = createMongoURL;