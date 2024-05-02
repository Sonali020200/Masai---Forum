const jwt=require("jsonwebtoken");

const auth=async(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1]
    if(token){
        jwt.verify(token,"masai",(err,decoded)=>{
            if(decoded){
                req.body.userID=decoded.userID,
                req.body.name=decoded.name;
                console.log(decoded)
                next()
            }
            else{
                res.status(200).send({"msg":"You are not authorised.."})
            }
        })
    }
    else{
        res.status(200).send({"msg":"Please login first"})
    }
}

module.exports={
    auth
}