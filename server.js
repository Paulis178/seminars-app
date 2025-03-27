const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Путь к db.json
const middlewares = jsonServer.defaults();

// Разрешаем CORS для всех запросов
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

server.use(middlewares);
server.use('/api', router); // Все роуты начинаются с /api

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`JSON Server запущен на порту ${PORT}`);
    console.log(`API доступно по пути: http://localhost:${PORT}/api/seminars`);
    console.log('Проверьте данные в db.json:', router.db.get('seminars')); // Логируем данные
});