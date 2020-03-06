


//mongodb
const  mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/userdb', {useNewUrlParser:true},(error)=>{

if(!error) {console.log("success database");}
else {console.log("error connecting to db");} 

});
const user= require('./user.model');