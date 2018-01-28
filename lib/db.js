const mongoose = require('mongoose');

module.exports.mountDb = (app) => {
    mongoose.connect(`mongodb://${process.env.MONGO}/visitcounter`);

    app.db = {
        connection: mongoose.connection,
        counter: require('../models/counter'),
    };
};
