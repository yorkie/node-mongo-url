
var url = require('url');

function createMongoURL(port, hostname, db, option) {
  var args = normalizeArgs(arguments);
  return 'mongodb:' + url.format({
    hostname: args.hostname,
    port: args.port,
    pathname: args.db,
    query: args.option
  });
}

module.exports = createMongoURL;