import mongoose from "mongoose";

// mongoDB connection
export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"backendApi",
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("Mongodb connected successfully"))
    .catch((e)=>console.log(e))
} 