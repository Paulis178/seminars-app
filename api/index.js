const jsonServer = require('json-server');
const path = require('path'); // Добавьте эту строку

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Используем абсолютный путь
const middlewares = jsonServer.defaults();

// Настройка CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    next();
});

server.use(middlewares);
server.use('/api', router); // Все роуты будут начинаться с /api

module.exports = (req, res) => {
    res.json({ message: "Test successful", dbExists: require('fs').existsSync('./db.json') });
};