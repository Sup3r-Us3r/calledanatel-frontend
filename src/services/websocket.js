import socketio from 'socket.io-client';

const socket = socketio(process.env.REACT_APP_API_URL);

socket.on('connect', () =>
  console.log('[IO] Connect => A new connection has been established')
);

export default socket;
