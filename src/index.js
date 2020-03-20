// Express Server
import express from 'express';


import mongoose from 'mongoose';
const bodyparser=require('body-parser');

//const route=require("./routes/api");

const app = express(); //setup express app
app.use(bodyparser.json());
const port=process.env.port||3000;

///////////////////mongodb database connection
const dburl='mongodb+srv://shadia:1988Shadia@cluster0-j5x8m.gcp.mongodb.net/booksapi';

mongoose.connect(dburl, { useNewUrlParser: true });
mongoose.set('useNewUrlParser', true);///to avoid url deprication

mongoose.Promise=global.Promise;///to avoid url deprication


// app.use(express.static('public'))//serve files in public folder


//////////////express routing


app.get('/', (req, res) => res.send('Hello World!'));//main route

app.use('/api',require("./routes/api"));//the customers route


///error handling middleware
app.use((err,req,res,next)=>{
  console.log (err);
  res.status(422).send({ERROR: err.message});//'422' unprocessable error : field required
})

///////////////middleware


// Start Server listen for requests
app.listen({port}, () => console.log(`Example app listening on port ${port}!`));

/* var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shadia:1988Shadia@cluster0-j5x8m.gcp.mongodb.net/test"; */

/* MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  
  db.close();
}); */
///////////Mongodb create collection(as Table)
/* MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("booksdb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
}); */
////////////////Mongodb Insert data in a collection
/* MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("booksdb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
}); */
//////////////Insert many data in acollection
/* 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("booksdb");
  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    console.log(res);
    db.close();
   
  });
}); */

////////////////Insert many in a collection
/* MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("booksdb");
  var myobj = [
    { id: 154, name: 'Chocolate Heaven'},
    { id: 155, name: 'Tasty Lemon'},
    { id: 156, name: 'Vanilla Dream'}
  ];
  dbo.collection("products").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
}); */
///////////////////mongodb databade



