
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {styled} from 'styled-components'
import { addProduct } from '../Redux/Products/action'
import './admin.css';
const initialState={
    title:"",
    image:"",
    likes:0,
    category:"",
    content:""
}
export const Admin = () => {
    const [data,setData]=useState(initialState);
    const dispatch=useDispatch()

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setData(prev=>{
            return {...prev, [name]:name === "price" ? +value :value}
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
        dispatch(addProduct(data))
        setData(initialState)
        
    }
  return (
    <div id='banner1'>
    <DIV>
        <form onSubmit={handleSubmit}>
        <h1>Add Post</h1>
        <input type="text" name='title' value={data.title} placeholder='Title' onChange={handleChange}/>
        <input type="text" name='image' value={data.image} placeholder='Image' onChange={handleChange}/>
        <input type="text" name='content' value={data.content} placeholder='content' onChange={handleChange}/>
        <input type="number" name='likes' value={data.likes} placeholder='likes' onChange={handleChange}/>
        
        <select name="category" onChange={handleChange} value={data.category}>
            <option value="">Select Category</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Innovation">Innovation</option>
            <option value="Tutorial">Tutorial</option>
            <option value="Bussiness">Bussiness</option>
        </select>
        <button type='submit'>Add Post</button>
        
    </form>
    </DIV>
    </div>
  )
}

const DIV=styled.div`
    width:40%;
    margin:auto;
    border:1px solid gray;
    padding:40px;
    background-color: rgba(0, 0, 0, 0.2);
    form{
        display:flex;
        flex-direction:column;
        gap:20px;
        align-items:center;
    }
    input,select{
        height:40px;
        width:100%;
        font-size:large
    }
    button{
        width:50%;
        height:35px;
        border-radius:15px;
        cursor: pointer;
    }
`
