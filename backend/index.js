const connection=require('./model');
const express=require('express');
const app=express();
const path=require('path');
const expressHandlerbars=require('express-handlebars');
const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({
extended:true
}));

app.set('src',path.join(__dirname,"/views/"));
app.engine("hbs",expressHandlerbars({
extname:"hbs",
defaultLayout:"mainlayout",
layoutsDir:__dirname+"/views/layouts"

}));
app.set("view ingine", "hbs");

app.get('/', (req,res)=>{

   res.render("index",{});
});



const users=
[
{id:1, name:"user1", age: "age1", email:"email1", adress:"adress1"},
{id:2, name:"user2", age: "age2", email:"email2", adress:"adress2"},
{id:3, name:"user3", age: "age3", email:"email3", adress:"adress3"},
{id:4, name:"user4", age: "age4", email:"email4", adress:"adress4"},
];

app.get('/', (req,res)=>{

    res.send("hello Express!!");
});

app.get('/api/users',(req,res)=>{

res.send(users);

});
app.get('/api/users/:id',(req,res)=>{
    const user=users.find(c=>c.id===parseInt(req.params.id));
if (!user) res.status(404).send("user id not found");
res.send(user);

});


const port= process.env.PORT||3000;
app.listen(port,()=>{

   console.log( 'Running in port '+port);
});
