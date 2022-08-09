const Course = require('../models/Course');

class SideController {
    // [GET] /
    home(req, res) {
        Course.find({}, function (err, courses) {
            if (!err) res.json(courses);
            else res.status(404).json({ err: 'ERR !!!' });
        });

        // res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SideController();
