import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { editProduct } from '../Redux/Products/action';
import styled from 'styled-components';
import './admin.css';
export const EditProduct = () => {
    const {id}=useParams();
    const products=useSelector((store)=>store.productsReducer.products)
    const [likes,setLikes]=useState(0);
    const [title,setTitle]=useState("")
    const dispatch=useDispatch()

    
    useEffect(()=>{
        const {likes,title}=products.find(el=>el.id===+id);
        setLikes(likes)
        setTitle(title)
        
    },[])

    const handleEdit=()=>{
        const data={
            title,
            likes
        };
        dispatch(editProduct(id,data))
        console.log(data)
    }
  return (
    <div id='banner1'>
    <DIV>
        <h1>Post-Id: {id}</h1>
        <label>Like</label>
        <input 
            type="number"
            value={likes}
            onChange={(e)=>setLikes(+e.target.value)}
        />
        <label>Title</label>
         <input 
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
        />
        <button onClick={handleEdit}>Update</button>
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
        color:green;
        cursor:pointer;
    }
`


