import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import user from './routes/user'

const app = express();

const dev_db_url = 'mongodb://arkixuser:password123@ds027483.mlab.com:27483/arkix_crud';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
const port = 1234;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);

// Not route found handler
app.use((req, res, next) => {
    next({
        message: 'Route not found',
        statusCode: 404,
    });
});

app.use((err, req, res, next) => {
    let { statusCode = 500 } = err;

    res.status(statusCode);
    res.json({
        error: true,
        statusCode,
        message: 'Server error',
    });
});

app.listen(port, () => {
    console.log('Server online in PORT ' + port);
});
