const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Member = new Schema(
    {
        talent: { type: String, require: true },
        gen: { type: String, require: true },
        sub: { type: String, require: true },
        slug: { type: String, slug: 'talent', unique: true },
    },
    {
        timestamps: true,
    },
);

Member.plugin(mongoose_delete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Member', Member);
