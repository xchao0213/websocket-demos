const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', function open() {
  ws.send('hi server');
});

ws.on('message', function incoming(data) {
  console.log('incoming')
  console.log(data);
});