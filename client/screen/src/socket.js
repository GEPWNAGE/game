import io from 'socket.io-client';

const serverUrl = 'http://localhost:3030';
const namespace = 'screen';
const socket = io(`${serverUrl}/${namespace}`);
export default socket;
