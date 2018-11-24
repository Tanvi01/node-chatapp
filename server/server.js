const path=require('path');
const express=require('express');
const socketIO=require('socket.io');
const http=require('http');
const {generateMessage}=require('./utils/message');
const port=process.env.PORT||3000;
var app=express();

var server=http.createServer(app);
var io=socketIO(server);
const publicPath=path.join(__dirname,'../public');

app.use(express.static(publicPath)); 

io.on('connection',(socket)=>{
console.log('New user is connected');

socket.emit('newMessage',generateMessage('Admin','Welcome to the chatapp'));

socket.broadcast.emit('newMessage',generateMessage('Admin','New user joined'));

socket.on('createMessage',(message)=>{
console.log(message,message);
io.emit('newMessage',generateMessage(message.from,message.message));
});

socket.on('disconnect',()=>{
  console.log('Client disconnected');
});
});


server.listen(port,()=>{
	console.log(`Server is up at port ${port}`);
});