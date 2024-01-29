import dotenv from 'dotenv'
dotenv.config()
import userSchema from "../database/formSchema.js"
import hasher from '../Hashing/hasher.js'


const addUser=async(req,res)=>{
    try {
        try {
            const user = await userSchema.findOne({email:req.body.email})
            if(!user){
                req.body.password = await hasher.createHash(req.body.password)
                let newUser = await userSchema.create(req.body)
                res.status(200).send({
                    message:"User Added Successfully"
                })
            }
            else{
                res.status(400).send({
                    message:`User with ${req.body.email} already exists`
                })
            }
        } catch (error) {
            res.status(500).send({
                message:"Internal Server Error",
                error:error.message
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}
const forgottenPass=async(req,res)=>{
    try {
        const {email} = req.body
        const user = await userSchema.findOne({email:email})
        if(user){
            user.resetStatus=true
            const token = await hasher.createToken({
                name:user.name,
                email:user.email,
                resetStatus:user.resetStatus
            })
            user.passwordReset=token
            await user.save();

            res.status(200).send({
                message:"Password link sent Successfully",
                token
            })
        }
        else{
            res.status(400).send({
                message:`${email} does not exist enter Correctly`
            })
        }

    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
        
    }

}
const checkPass=async(req,res)=>{
    try {
        const {tokenCheck} = req.body
        const user = await userSchema.findOne({
            passwordReset:tokenCheck})
        if(user){
            if(user.passwordReset==tokenCheck){

                res.status(200).send({
                    message:"Enter your details for password reset",
                })
            }
        }
        else{
            res.status(400).send({
                message:`Inavlid token enter correct token`
            })
        }

    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
        
    }

}
const passwordReset=async(req,res)=>{
    let {email,password}=req.body
    try {
        
        try {
            const user = await userSchema.findOne({email:email})
        
            if(user!=null){
                req.body.password = await hasher.createHash(req.body.password)

                user.password=req.body.password
                user.passwordReset=""
                user.resetStatus=false
                await user.save();
                res.status(200).send({
                    message:"Password resetted Successfully",
                })
            }else{
                res.status(400).send({
                    message:"I am not working"
                })

            }
        } catch (error) {
            res.status(500).send({
                message:"Internal Server Error",
                error:error.message
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }

}




export default {addUser,forgottenPass,checkPass,passwordReset}