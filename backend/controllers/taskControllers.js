//model is the door for curd
const Task = require("../models/taskModel");

const createTask =async(req,res)=>{
//   console.log( req.body);
    //   res.send("Task Created");
    
    //storing data to data base
    try{
        //to store  task we need tto access a model that we created so importing it
        //() ma k data store garna tyo mention garna hamro data req .body ma so so we passed it
        const task=await Task.create(req.body);
        res.status(200).json(task)
     
     }catch(error)
     {
       res.status(500).json({msg:error.msg})
     }
     
};
//to get all tasks

const getTasks=async(req,res)=>{
    
    try{
        const tasks=await Task.find();
        res.status(200).json(tasks)
        
        }catch(error)
        {
          res.status(500).json({msg:error.msg})
        }
         
    };
    //to update
    const getTask=async(req,res)=>{
        //to get the parameter commming form api in post man copy id of any task and paste it after url you get id in console
        // id represent id that we added in parameter
        //destructuring id 
        // const {id}=req.params
        // console.log(id);
         // res.send("walla");
         try {
            const {id}=req.params
            const task=await Task.findById(id);
            //if id not found 
            if(!task)
            {
               return res.status(404).json(`NO task with id: ${id}`)
            }
            //we are sending data back
            res.status(200).json(task)
            } catch (error) {
            res.status(500).json({msg:error.msg})
         }

    }
   // Delete task always add await for async
    const deleteTask= async (req,res)=>{
        try {
            const {id }= req.params
            const task=await Task.findByIdAndDelete(id)
            if(!task)
            {
               return res.status(404).json(`NO task with id: ${id}`)
            }
            res.status(200).send("Task is deleted")

        } catch (error) {
            res.status(500).json({msg:error.msg})
            
        }

    }
    //update a task
    const updateTask= async (req,res)=>{
        try {
            const {id}=req.params
            const task= await Task.findByIdAndUpdate(
                {  _id:id},req.body,{
                    new:true,
              
                //now we need to add validator because model ma bhako validator kam gardina update ma empty ni string ni 
                //jancha so run validator to prevent this
                runValidators :true,
            });
            if(!task)
            {
               return res.status(404).json(`NO task with id: ${id}`)
            }
                res.status(200).json(task)
              
            
        } catch (error) {
            res.status(500).json({msg:error.msg})
            
        }


    }

module.exports={
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}