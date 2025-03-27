const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Важные CORS-настройки
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://seminars-app.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

server.use(middlewares);
server.use('/api', router);

module.exports = server;