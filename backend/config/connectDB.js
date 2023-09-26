//to connect to moongoose we need to get it in our app
const mongoose=require("mongoose");
//connectDb for db connection server for connection to server
connectDB = async () => {
try{
const connect =await mongoose.connect(process.env.MONGO_URI)
console.log("Mongo db connected");
}catch(error){
console.log(error);
//if error then exit which is implemented as
process.exit(1);
}

};

//we need to export this file
module.exports =connectDB
//use this function in server.js to connect to mongo db
// const startserver =async () =>{
//     try{
//     //simply mean connect to DB first then fire app.listen
// await connectDB();
// app.listen(PORT,()=>{
//     console.log(`Server is running on ${PORT}`);
// })
//     }catch(error){
//         console.log(error);
//     }
// }
// startserver();
