import io from 'socket.io-client';
import createEmitAction from '@gepwnage-game/client-common/createEmitAction';

const serverUrl = 'http://localhost:3030';
const namespace = 'phone';
const socket = io(`${serverUrl}/${namespace}`);
export default socket;

export const emitAction = createEmitAction(socket);
