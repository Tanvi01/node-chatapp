var socket=io();
	socket.on('connect',function(){
		console.log('Connected to server');

		socket.emit('createMessage',{
			'to':'Andrew',
			'message':'Hey Andrew.Tea at 6?'
		});
       
	});

	socket.on('disconnect',function(){
        console.log('disconnected from the server');

});
   socket.on('newMessage',function(message){
   	console.log(message);
   });

   
        
      
	