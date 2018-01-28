const mongoose = require('mongoose');
mongoose.Promise = Promise;

module.exports.mountDb = (app) => {
    mongoose.connect(`mongodb://${process.env.MONGO}/visitcounter`, { useMongoClient: true });

    app.db = {
        connection: mongoose.connection,
        counter: require('../models/counter'),
    };
};
