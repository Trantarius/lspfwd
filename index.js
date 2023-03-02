
const net=require('node:net');


var socket=net.createConnection(6005);

socket.on('data',data=>{
  process.stdout.write(data);
});

process.stdin.on('data', data=>{
  socket.write(data);
});
