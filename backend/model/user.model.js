const mongoose=require('mongoose');
var UserSchema=new mongoose.Schema({
    fname:{type: String, required:"Required"},
    lname:{type: String, required:"Required"},
    age:{type: Number},
    email:{type: String, required:"Required"},
    adress:{type: String, required:"Required"},
    gsm:{type: Number, required:"Required"}

});
mongoose.model("user",UserSchema);