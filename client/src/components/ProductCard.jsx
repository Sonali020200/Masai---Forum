import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const ProductCard = ({id,title,image,content,category,likes}) => {
   const isAuth=useSelector(store=>store.authReducer.isAuth) 
  return (
    
    <DIV>
        <div id='div1'>
        <div id='left'>
            <Link to={`/view/${id}`}>
                <img src={image} alt={title} />
            </Link>
        </div>
        <div id='right'>
            <h4>{title}</h4>
            <p>content: {content}</p>
            <p>Category: {category}</p>
            <div id='div2'>
            <p><span>👍 </span>{likes}</p>
            {
                isAuth && (
                    <div id='bton'>
                        <button>
                            <Link to={`/edit/${id}`} >Edit</Link>
                        </button>
                        <button>
                            <Link to={`/edit/${id}`} >delete</Link>
                        </button>
                    </div>
                
                )
            }
            </div>
        </div>
        </div>
    </DIV>
    
  )
}

const DIV=styled.div`
    border:1px solid black;
    padding:10px;
    background-color:lightblue;
    
    #left{
        width:30%;
        
    }
    #right{
        width:60%;
        
        
    }
    img{
       width:100%;
       border-radius:10%;
       
    }
    #bton{
        width:50px;
        height:30px;
        display:flex;
        justify-content:center;
        gap:10px;
    }
    #div1{
        display:flex;
        margin:auto;
        gap:30px;
        justify-content:center;
    }
    #div2{
        display:flex;
        margin:auto;
        gap:100px;
        align-items:center;
        justify-content:center;
    }
  

`

