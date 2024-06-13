const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
// this creates my http server
const server = http.createServer(app);

const { Server } = require('socket.io');
// this handles my ws requests
const io = new Server(server);

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(9000, () => {
    console.log('Server is running on port 9000');
    }
);

