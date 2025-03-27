const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');

// Создаем временный db.json если его нет
const dbPath = path.join(__dirname, '../db.json');
if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ seminars: [] }));
}

const server = jsonServer.create();
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

// Production CORS settings
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://seminars-app.vercel.app/');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

server.use(middlewares);
server.use('/api', router); // Все роуты начинаются с /api

module.exports = server;