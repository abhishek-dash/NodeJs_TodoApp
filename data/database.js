import mongoose from "mongoose";

// mongoDB connection
export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"backendApi",
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then((c)=>console.log(`Mongodb connected with ${c.connection.host}`))
    .catch((e)=>console.log(e))
} 