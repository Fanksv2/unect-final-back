const express  = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://grupo7:7grupo@unect-final-database.a9mqt.mongodb.net/unect-final-database?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    });

app.get('/', (req, res) =>{
    return res.send(mongoose.connection.readyState.toString());
});

app.listen(3030);