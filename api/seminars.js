const jsonServer = require('json-server');
const db = require('./db.json');

module.exports = (req, res) => {
    const server = jsonServer.create();
    const router = jsonServer.router(db);

    // CORS для фронтенда
    //res.setHeader('Access-Control-Allow-Origin', 'https://seminar-frontend-1b03.onrender.com');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    server.use(jsonServer.defaults());
    server.use(router);

    // Передаем запрос в json-server
    server(req, res);
};