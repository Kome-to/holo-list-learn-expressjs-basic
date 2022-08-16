const Member = require('../models/Members');
const { mongooseToObject } = require('../../util/mongoose');
const { multipleMongooseToObject } = require('../../util/mongoose');

class memberController {
    //[GET] /member/:slug
    show(req, res, next) {
        Member.findOne({ slug: req.params.slug })
            .then((member) => {
                res.render('members/show', {
                    member: mongooseToObject(member),
                });
            })
            .catch(next);
    }
}

module.exports = new memberController();
