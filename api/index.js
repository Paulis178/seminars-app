const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Настройка CORS для фронтенда на Render
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://seminar-frontend-1b03.onrender.com/'); // Укажите ваш URL фронтенда
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    next();
});

server.use(middlewares);
server.use('/api', router);

module.exports = server; // Важно для Vercel Serverless