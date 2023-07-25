import  express  from "express";
import userRouter from "./routes/userRoute.js"
import taskRouter from "./routes/taskRoute.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";

export const app=express();

config({
    path:"./data/config.env"
});

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URI],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

// using Routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks",taskRouter)

app.get("/",(req,res)=>{
    res.send("Checking node Todo App .....")
})

app.use(errorMiddleware);
