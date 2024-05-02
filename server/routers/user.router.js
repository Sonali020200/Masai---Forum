const express=require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { UserModel } = require("../models/user.model");
const { BlacklistModel } = require("../models/blacklist.model");
const { auth } = require("../middlewere/auth.middlewere");
const userRouter=express.Router();

userRouter.post("/register",async(req,res)=>{
    
    try {
        const exist= await UserModel.findOne({email:req.body.email})
        if(exist){
            res.status(200).send({msg:"User already exist, please login"})
            return;
        }
    } catch (error) {
        res.status(400).send({"error":error})
        return;
    }
    try {
        bcrypt.hash(req.body.password,5,async(err,hash)=>{
            if(err){
                res.status(400).send({"error":err})
            }
            else{
                let user= new UserModel({...req.body,password:hash})
                await user.save()
                res.status(200).send({"msg":"New user has been added","new_user":user})
            }
        })
    } catch (error) {
        res.status(400).send({"error":error})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await UserModel.findOne({email});
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    const token=jwt.sign({userID:user._id,name:user.name},"masai")
                    res.status(200).send({msg:"Login successful","token":token})
                }
                else{
                    res.status(200).send({msg:"Wrong Ceranditials"})   
                }
            })
        }
        else{
            res.status(200).send({msg:"Please Login First!"})
        }
    } catch (error) {
        res.status(400).send({"error":error})
    }
})

userRouter.get("/logout",auth,async(req,res)=>{
    let token=req.headers.authorization.split(" ")[1]
    try {
        let blacklist=new BlacklistModel({token:token});
        await blacklist.save()
        res.status(200).send({"msg":"User has been loggedout"})
    } catch (error) {
        res.status(400).send({"error":error})
    }
})

module.exports={
    userRouter
}
