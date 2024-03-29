const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const driver = require('./routes/api/driver');
const product = require('./routes/api/product');


const app = express();

const db = require('./config/keys').mongoURI;
// Connect to MongoDb
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MOngoDb connected"))
    .catch((err) => console.log(err))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Use Routes
app.use('/api/driver', driver);
app.use('/api/product', product);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));