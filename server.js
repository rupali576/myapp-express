const express=require("express");
const bodyParser= require('body-parser');
const routeremployee=require('./routes/employee')
const app=express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json())
app.use('/emp',routeremployee)

app.listen(3434,'0.0.0.0',()=>{
console.log('Server started on port 9898')
})