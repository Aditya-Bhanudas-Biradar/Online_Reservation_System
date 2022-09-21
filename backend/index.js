var express = require ("express")
var bodyParser = require ("body-parser")
var mongoose = require ("mongoose")

const app=express() 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('../'))

mongoose.connect("mongodb://localhost:27017/mydb");

var db = mongoose.connection;

//app.post("../reservation", (req, res)=>{
 //   var name = req.body.first-name;

  //  var data = {
   //     "name": name
  //  }

   // db.collection("users").insertOne(data, (err, doc)=>{
  //      if(err){
   //         throw err;
 //       }
 //       console.log("record inserted");
//})});



app.get("/",(req, res) =>{
    res.set({
        "Allow-access-Allow-Origin": "*",
    })
}).listen(3000);

console.log("server is listening at port 3000");


