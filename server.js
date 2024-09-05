const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3040;
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static('public'));
app.use(bodyParser.json());

require('./db')();
require('./route/signup-route')(app);

io.on('connection', (socket) => {
    console.log('A client is connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
    setInterval(() => {
        const randomNumber = parseInt(Math.random() * 10);
        socket.emit('number', randomNumber);
        console.log('Emitting Number ' + randomNumber);
    }, 1000);
});

// Use http.listen instead of app.listen
http.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
