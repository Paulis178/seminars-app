const jsonServer = require('json-server');
module.exports = jsonServer.create().use(jsonServer.router('db.json'));