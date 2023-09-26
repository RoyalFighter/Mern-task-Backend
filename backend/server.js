//concept of cors is used as front and back are ruunning on different port hence we cannot pass data from front to backtill
//we allow it where cors comes in play
//create a file called gitignore so that we need not push nodemodule
//To get rid of The `uri` parameter to `openUri()` must be a string, got "undefined".
//use following lines of code
const dotenv=require("dotenv").config()
const express=require("express");

const mongoose=require("mongoose");
// const Task = require("./model/taskModel");
const app=express();
const taskRoutes=require("./routes/taskRoute");
const cors=require("cors")


//hurko provides some port so we make env file to define port for now we create varaible
//env files should not be uploaded on github
//Middleware is a function that can perform something between api and asyns func
//next is cumpulosry as next determines which function after middel ware to be learn

// const logger=(req,res,next)=>{
//    console.log("Ima middle ware");
//    next();
// }
// app.post("/api/tasks",logger,async(req,res)=>{
//    console.log( req.body);
//    res.send("Task Created");
 
//  })
 //this is middle ware comes with express framwork
 //here i have create api to create a task now in need  to test api
 //when i testeed it i got undefined to  so using express.json we get tthe value that we send from front end to backend
app.use(express.json())
//this one is to get url encoded data and upper one is to get jason being send from postman
app.use(express.urlencoded({extended:true}))

//accept req form any url put cors above route
app.use(cors({
   origin:["http://localhost:3000","http://mern-taask.onrender.com"]

}));
//for routes appends /api/tasks allof the route
app.use("/api/tasks",taskRoutes);

const PORT = process.env.PORT || 8000
mongoose.connect
   (process.env.MONGO_URI)
   .then(()=>{
    app.listen(PORT,()=>{
         console.log(`Server is running on ${PORT}`);
         })
   })
   .catch((err)=>console.log(err))


//route
app.get("/",(req,res)=>{
res.send("<h2>welcome to home page ...............</h2>");
})

//creating first task using post ie sending some data to db
///api/task ko agi local host 8000 huncha where our backend is running
//logger is a middleware that perform something this middle ware has acess to req res and next
//here first middle ware is run then next function is asyn will run

