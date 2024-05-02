const express=require('express');
const { auth } = require('../middlewere/auth.middlewere');
const { PostModel } = require('../models/post.model');

const postRouter=express.Router();

postRouter.post("/add",auth,async(req,res)=>{
    try {
        let post=new PostModel(req.body);
        await post.save();
        res.status(200).send({msg:"A new post has been added","post":post})
    } catch (error) {
        res.status(400).send({"error":error})
    }
})

postRouter.get("/",async(req,res)=>{
    try {
        const post=await PostModel.find(req.query);
        res.status(200).json({post})
    } catch (error) {
        res.status(400).json({error:error})
    }
})

postRouter.get('/top',async(req,res)=>{
    try {
        let post=await PostModel.find({userID:req.body.userID})
        let top=post.sort((a,b)=>b.no_of_comments-a.no_of_comments)
        top=[top[0],top[1],top[2]]
        res.status(200).send({"msg":"data fetched successfully","post":top})
    } catch (error) {
        res.status(400).send({"error":error})
    }
})

postRouter.patch('/update/:id',auth,async(req,res)=>{
    let {id}=req.params;
    try {
        let post=await PostModel.findOne({_id:id})
        if(req.body.userID=post.userID){
            await PostModel.findByIdAndUpdate({_id:id},req.body)
            res.status(200).send({"msg":"data updated successfully"})
        }
        else{
            res.status(200).send({"msg":"User is not authorised"})
        }
    } catch (error) {
        res.status(400).send({"error":error})
    }
})
 
postRouter.delete('/delete/:id',auth,async(req,res)=>{
    let {id}=req.params;
    try {
        let post=await PostModel.findOneAndDelete({userID:req.body.userID,_id:id})
        if(post){
            res.status(200).send({"msg":"data deleted successfully"})
        }
        else{
            res.status(200).send({"msg":"User is not authorised"})
        }
    } catch (error) {
        res.status(400).send({"error":error})
    }
})

module.exports={
    postRouter
}