const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('path').join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

server.use(middlewares);
server.use('/api', router);

// Экспорт для Vercel Serverless
module.exports = (req, res) => {
    server(req, res);
};