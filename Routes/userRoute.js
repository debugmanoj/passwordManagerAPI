import express from "express"
import user from "../controller/user.js"
import hasher from "../Hashing/hasher.js";

let router=express.Router();

router.post("/addUser",user.addUser)
router.post("/forgottenPass",user.forgottenPass)
router.post("/checkPass",hasher.authenticate,hasher.adminGuard,user.passwordReset)

export default router


//checkPass.authenticate