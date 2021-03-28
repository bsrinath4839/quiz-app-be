const { waterfall } = require('async');
const http = require('http');
const express = require('express');
const cors = require('cors');
const DataRoutes = require('./data.routes');
const app = express();

const init = (cb) => {
    waterfall([
        (next) => {
            http
                .createServer(app)
                .listen(5000, (error) => {
                    if (error) {
                        next(error)
                    }
                    else {
                        console.log("Server is running");
                        next(null);
                    }
                })
        },
        (next) => {
            app.use(express.json());
            app.use(express.urlencoded({
                extended: true
            }));
            app.use(cors());
            app.use('/data', DataRoutes);
            next(null);
        },
    ], cb);
}

module.exports = init;