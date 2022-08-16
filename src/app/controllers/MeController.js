const Member = require('../models/Members');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class MeController {
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

    //[POST] /stored
    stored(req, res, next) {
        const data = req.body;
        data.slug = data.talent;
        Member.create(req.body)
            .then(() => {
                res.redirect('/me/member');
            })
            .catch(next);
    }

    //[GET] /edit
    edit(req, res, next) {
        Member.findOne({ _id: req.params.id })
            .then((member) => {
                res.render('members/edit', {
                    member: mongooseToObject(member),
                });
            })
            .catch(next);
    }

    //[PUT] /stored/:id
    edit_req(req, res, next) {
        const update = Member.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect('/me/member');
            })
            .catch(next);
    }

    //[DELETE] /delete/:id
    delete(req, res, next) {
        Member.delete({ _id: req.params.id })
            .then(() => res.redirect('/me/member'))
            .catch(next);
    }

    //[GET] /trash
    trash(req, res, next) {
        Promise.all([Member.findDeleted({}), Member.countDeleted()])
            .then(([members, count]) => {
                res.render('members/trash', {
                    count,
                    members: multipleMongooseToObject(members),
                });
            })
            .catch(next);
    }

    //[GET] /restore
    restore(req, res, next) {
        Member.restore({ _id: req.params.id })
            .then(() => res.redirect('/me/member/trash'))
            .catch(next);
    }

    //[DELETE] /remove/:id
    remove(req, res, next) {
        Member.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/me/member/trash'))
            .catch(next);
    }
}

module.exports = new MeController();
