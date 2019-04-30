import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';

import Screen from './button-game/Screen';
import store from './button-game/redux/store';
import socket from './socket';

socket.on('game-action', (action) => {
    store.dispatch(action);
});

ReactDOM.render((
    <StoreProvider store={store}>
        <Screen />
    </StoreProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
