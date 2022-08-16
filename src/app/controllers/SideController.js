const Member = require('../models/Members');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SideController {
    // [GET] /
    home(req, res, next) {
        // Course.find({}, function (err, courses) {
        //     if (!err) res.json(courses);
        //     else res.status(404).json({ err: 'ERR !!!' });
        // });

        Member.find({})
            .then((members) => {
                res.render('home', {
                    members: multipleMongooseToObject(members),
                });
            })
            .catch(next);
    }

    //[GET] /list
    list(req, res, next) {
        Member.find({})
            .then((members) => {
                res.render('members/list', {
                    members: multipleMongooseToObject(members),
                });
            })
            .catch(next);
    }

    //[GET] /create
    create(req, res, next) {
        res.render('members/create');
    }
}

module.exports = new SideController();
