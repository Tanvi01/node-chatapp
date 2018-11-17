const path=require('path');
const express=require('express');
const socketIO=require('socket.io');
const http=require('http');
const port=process.env.PORT||3000;
var app=express();

var server=http.createServer(app);
var io=socketIO(server);
const publicPath=path.join(__dirname,'../public');

app.use(express.static(publicPath)); 

io.on('connection',(socket)=>{
console.log('New user is connected');

socket.emit('newMessage',{
	from:"admin",
	message:"Welcome to chat app"
});

socket.broadcast.emit('newMessage',{
	from:"admin",
	message:"new user joined"
});

socket.on('createMessage',(message)=>{
console.log(message,message);
io.emit('newMessage',{
	createdAt:new Date().getTime(),
	from :message.from,
	message:message.message
});
});

socket.on('disconnect',()=>{
  console.log('Client disconnected');
});
});


server.listen(port,()=>{
	console.log(`Server is up at port ${port}`);
});