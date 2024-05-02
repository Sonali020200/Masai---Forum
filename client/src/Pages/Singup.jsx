import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './admin.css';

export const Singup = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("")
    const navigate=useNavigate()

    const handlSingup=()=>{
        const payload={
            name,
            email,
            password
        }
        fetch("https://tasty-khakis-tuna.cyclic.app/users/register",{
            method:"POST",
            headers:{
                "content-type":"application/json"

            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }
    const handleroute=()=>{
        navigate('/login')
    }
  return (
    <div id='banner1'>
    <DIV>
        
        <h1>Please Register</h1>
        <input type="text" value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} />
        <input type="text"  value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handlSingup}>Register</button>
        <h4>already have a account <span id='span' onClick={handleroute}>Login</span></h4>
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
    button{
        width:100%;
        height:35px;
        border-radius:15px;
        cursor: pointer;  
    }
    h1{
        color:black;
    } 
    #span{
        color:lightgoldenrodyellow;
        cursor:pointer;
    }
`
