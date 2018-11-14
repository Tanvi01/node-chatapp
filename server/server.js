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

socket.on('disconnect',()=>{
  console.log('Client disconnected');
});
});
server.listen(port,()=>{
	console.log(`Server is up at port ${port}`);
});