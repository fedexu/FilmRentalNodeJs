// var config = require('./config.js').get(process.env.NODE_ENV);

var config = {
    production: {
        database: "******",
        databaseName:"*****"
    },
    default: {
        database: 'mongodb://localhost:27017/FilmRental',
        databaseName: 'FilmRental'
    }
}

exports.get =  function (env) {
    return config[env] || config.default;
}
