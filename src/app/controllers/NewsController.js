const Member = require('../models/Members');

class NewsController {
    //[GET] /news
    index(req, res, next) {
        Member.findOne({ talent: 'Minato Aqua' })
            .then((member) => {
                res.json(member);
            })
            .catch(next);
    }

    //[GET] /news/anime
    anime(req, res) {
        res.send('Wibu');
    }
}

module.exports = new NewsController();
