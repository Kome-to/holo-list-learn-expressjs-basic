const newsRouter = require('./news');
const sideRouter = require('./side');

function routes(app) {
    app.use('/news', newsRouter);

    app.use('/', sideRouter);
}

module.exports = routes;
