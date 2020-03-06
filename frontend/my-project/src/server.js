

const express = require('express');
const app = express();

app.get('/', (request, response) => {
//   response.send('hello world');
});
app.use(express.static('public'));

app.listen(3001, () => {
  console.log('Express intro running on localhost:3001');
});


//mongodb
const  mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/userdb', {useNewUrlParser:true},(error)=>{

if(!error) {console.log("success");}
else {console.log("error connecting to db");} 

});