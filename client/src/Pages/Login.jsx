import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Authentication/action';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import './admin.css';

export const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const location=useLocation();
    const navigate=useNavigate()
    const {isAuth,isError,errorMessage}=useSelector((store)=>{
        return{
            isAuth:store.authReducer.isAuth,
            isError:store.authReducer.isError,
            errorMessage:store.authReducer.errorMessage
        }
    },shallowEqual)

    const handleLogin=()=>{
        const userData={
            email,
            password
        }
        dispatch(
            login(userData)).then(()=>{
            navigate(location.state,{replace:true})
           })
    }
    const handleroute=()=>{
        navigate('/singup')
    }
  return (
    <div id='banner1'>
    <DIV auth={isAuth.toString()} err={isError.toString()}>
        <h1>{isAuth?"Login Sucessfull":"Login to Continue"}</h1>
        <h3>{isAuth && errorMessage}</h3>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
        <button id='button' onClick={handleLogin}>Login</button>
        <div id='sing'>
            <h4>create new account <span id='span' onClick={handleroute}>singUp</span></h4>
            
        </div>
    </DIV>
    </div>
  )
}

const DIV=styled.div`
    width:400px;
    margin: auto;
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:40px;

    input{
        height:40px;
        font-size:large;
        border:${({err})=>(err==="true"?"1px solid red":"1px solid gray")}
    }
    #button{
        width:100%;
        height:35px;
        border-radius:15px;
        cursor: pointer;  
    }
    h1{
        color:${({auth})=>(auth==="true"?"green":"red")}
    } 
    #span{
        color:lightgoldenrodyellow;
        cursor:pointer;
    }
`
