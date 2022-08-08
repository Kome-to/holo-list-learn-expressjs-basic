class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/anime
    anime(req, res) {
        res.send('Wibu');
    }
}

module.exports = new NewsController();
