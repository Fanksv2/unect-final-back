const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router   = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://grupo7:7grupo@unect-final-database.a9mqt.mongodb.net/unect-final-database?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

app.use(bodyParser.json());
app.use(router);

app.listen(3030);