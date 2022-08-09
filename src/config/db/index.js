const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/myDatabase_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to mongodb');
    } catch (error) {
        console.log('Failed to connect to mongodb');
    }
}
module.exports = { connect };
