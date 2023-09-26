//for seperation of concern we are doing this
const express=require("express");
const Task = require("../models/taskModel");
const { createTask, getTasks ,getTask, deleteTask, updateTask} = require("../controllers/taskControllers");

//routeer variable to attach to express and we use it in server.js so export it
const router =express.Router()
//curd c here isntead of app.post we use router.post and createTask is defined in controller route pachi ko function ho
router.post("/",createTask)
    

//Get or read data
    //get request reads data from db in post man just change to get req
    router.get("/",getTasks);
    //to update we need to add params
    router.get("/:id",getTask);
    //delete route
    router.delete("/:id",deleteTask);
    //put for update and all feild need to send during update hence we use path
    // router.put("/api/tasks/:id",updateTask);
    router.put("/:id",updateTask);
    //here all our route has /api/tasks common so we can put it into server where we are using route

module.exports = router