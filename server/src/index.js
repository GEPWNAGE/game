import express from 'express';
import { Server } from 'http';
import { createStore } from 'redux';
import socketIo from 'socket.io';

import reducer from './button-game/reducer';

// Create game state store
const store = createStore(reducer);

// Setup Express server
const app = express();
const server = new Server(app);

// TODO: Serve client builds
// TODO: Serve client dev server via proxy?

// Setup Socket.IO
export const io = socketIo(server);
export const ioPhone = io.of('/phone');
export const ioScreen = io.of('/screen');

// Connect client reducers
ioPhone.on('connection', (socket) => {
    socket.on('game-action', (action) => {
        console.log('client: game-action', action);
        store.dispatch(action);
        ioScreen.emit('game-action', action);
    });
});

// Start the server
const port = 3030;
server.listen(port);
