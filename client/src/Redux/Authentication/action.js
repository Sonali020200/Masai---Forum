import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS } from "./actionType"

export const login=(userData)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})

    return axios.post("https://masai-forum-vjeg.vercel.app//users/login",userData).then((res)=>{
        console.log(res.data.token)
        dispatch({type:LOGIN_SUCESS,payload:res.data.token})

    })
    .catch((err)=>{
        dispatch({type:LOGIN_FAILURE, payload:err.message})
    })
}