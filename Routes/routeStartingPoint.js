import express from "express"

let  router=express.Router();
import apiHomePage from "../controller/apiHomePage.js";
import userRoute from "../Routes/userRoute.js"
router.get("/",apiHomePage.homePage)

//Other Routes

router.use("/user",userRoute)

export default router
