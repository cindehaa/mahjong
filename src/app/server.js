// server.js

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Listen for incoming WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle messages from the client
  socket.on('message', (data) => {
    console.log('Message received:', data);

    // Broadcast the message to all connected clients (excluding the sender)
    socket.broadcast.emit('message', data);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`WebSocket server listening on port ${port}`);
});
