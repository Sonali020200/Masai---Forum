const express=require("express")
const cors=require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routers/user.router");
const { postRouter } = require("./routers/post.router");
const app=express();

app.use(
    cors({
      origin:true,
      credentials: true,
    })
  );

app.use(express.json());

app.use("/users",userRouter)
app.use("/posts",postRouter)

app.listen(4500,async()=>{
    try {
        await connection;
        console.log("connected to server")
    } catch (error) {
        console.log(error)
    }
})