//it all about interaction with db so we use mongoose here
const mongoose=require("mongoose");
const  taskSchema =mongoose.Schema(
{

    name:{
        type:String,
        required:[true,"please add a task"],
    
    },
    completed:{
        type:Boolean,
        required:true,
        default:false
    },

},
{
    //creating timestamp keeps update of when task is created and updated
    timestamps:true
}

)
//we are storing in task in db using this sturcture and store it in variable so that we can use it in another part of application

const Task=mongoose.model("Task",taskSchema);
//export task
module.exports =Task;