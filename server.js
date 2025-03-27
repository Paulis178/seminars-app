const jsonServer = require('json-server');
const db = require('./db.json'); // Явно импортируем данные

// Создаем сервер
const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

// CORS middleware
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

server.use(middlewares);
server.use('/api', router);

// Экспорт для Vercel Serverless
module.exports = (req, res) => {
    // Передаем запрос в json-server
    server(req, res);
};