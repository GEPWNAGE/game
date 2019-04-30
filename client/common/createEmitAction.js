export default function createEmitAction(socket) {
    return (actionCreator) => (...params) => {
        const action = actionCreator(...params);
        socket.emit('game-action', action);
        return action;
    };
}
