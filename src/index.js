// Express Server
import express from 'express';
import cors from 'cors';

import routes from './routes';
import models from './models';
import path from 'path';
import users from './routes/users'  //breng users route from routes folder

import mongoose from 'mongoose';

const app = express(); //create instance from the server
const port=process.env.port||3003;


// app.use(express.static('public'))//serve files in public folder
// app.use('/static', express.static(path.join(__dirname, 'public')))//serve files in public folder

//////////////express routing


app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res)=>
  res.send('Got a POST request')
)

// app.use('/users',users) //breng users route from routes folder


///////////////middleware

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
/////////////////

app.get('/user/:id', function (req, res, next) {
  res.send('USER')
})
//setup an error handler for 404: the source not found
app.use((req, res, next)=> {
  console.log('404')
  // res.status(404).send("404: Sorry can't find that!")
  res.sendFile('./errors/404.html')
})


//setup an error handler for 500: somthing going wrong on the server

app.use((err, req, res, next) =>{
  console.error(err.stack)
  res.status(500).send('500: Something broken on the server!')

})


// Start Server
app.listen({port}, () => console.log(`Example app listening on port ${port}!`));
///////////////////mongodb database connection

mongoose.connect('mongodb+srv://shadia:1988Shadia@cluster0-j5x8m.gcp.mongodb.net/test',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
});


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


// //////thijs code
// // Application-Level Middleware
// app.use((req, res, next) => {
//   req.context = {
//     models,
//     me: models.users[1],
//   };
//   next();
// });
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use('/users', routes.users);
// app.use('/messages', routes.messages);

// //////thijs code

