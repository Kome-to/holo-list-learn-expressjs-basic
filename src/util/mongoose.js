module.exports = {
    multipleMongooseToObject(mongooses) {
        return mongooses.map((mg) => mg.toObject());
    },
    mongooseToObject(mg) {
        return mg ? mg.toObject() : mg;
    },
};
