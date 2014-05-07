
var url = require('url');

function createMongoURL(port, hostname, db, option) {
  return url.format({
    protocol: 'mongodb:',
    slashes: true,
    hostname: hostname,
    port: port,
    pathname: db,
    query: option
  });
}

module.exports = createMongoURL;