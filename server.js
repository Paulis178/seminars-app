const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Разрешаем все CORS-запросы
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

server.use(middlewares);
server.use('/api', router); // Все роуты будут начинаться с /api

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
    console.log(`Доступ к данным: http://localhost:${PORT}/api/seminars`);
});