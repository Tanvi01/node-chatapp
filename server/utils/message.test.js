var expect=require('expect');
var {generateMessage}=require('./message');

describe('generateMesaage',()=>{
    it('should generate correct Mesaage object',()=>{
          var from ='Jenna';
          var text  ='something';
          var message=generateMessage(from,text);

          expect(message.createdAt).toBeA('number');
          expect(message).toInclude({from,text});


    });
});