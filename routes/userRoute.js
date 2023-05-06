import express from "express";
import {register,getMyDetails,login, logout} from "../controller/userFunc.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router=express.Router();


router.post("/register",register)

router.post("/login",login)

router.get("/myDetails",isAuthenticated,getMyDetails)

router.get("/logout",logout)

export default router;