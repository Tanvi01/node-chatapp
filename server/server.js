const path=require('path');
const express=require('express');
const socketIO=require('socket.io');
const port=process.env.PORT||3000;
var app=express();

const publicPath=path.join(__dirname,'../public');

app.use(express.static(publicPath)); 


app.listen(port,()=>{
	console.log(`Server is up at port ${port}`);
});