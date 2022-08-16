const sideRouter = require('./side');
const memberRouter = require('./member');
const newsRouter = require('./news');
const meRouter = require('./me');

function routes(app) {
    app.use('/me', meRouter);
    app.use('/news', newsRouter);
    app.use('/member', memberRouter);
    app.use('/', sideRouter);
}

module.exports = routes;
