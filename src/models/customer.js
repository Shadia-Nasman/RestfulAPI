
const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const CustomerSchema=new Schema({

name:{type: String, required:[true,'Name is required']},
age: {type:Number},
adress:{type:String}

});

const Customer=mongoose.model('customer',CustomerSchema);//Customer: model///customer: collection in mongodb
module.exports=Customer;