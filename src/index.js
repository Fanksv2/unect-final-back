const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router   = require('./routes');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true
      }
});

mongoose.connect('mongodb+srv://grupo7:7grupo@unect-final-database.a9mqt.mongodb.net/unect-final-database?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

app.use((req, res, next) => {
    req.io = io;
    next();
})

app.use(cors())
app.use(bodyParser.json());
app.use(router);

server.listen(3030);