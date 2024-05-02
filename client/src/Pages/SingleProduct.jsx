import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard';
import styled from 'styled-components';
import './admin.css';

export const SingleProduct = () => {
    const {id}=useParams();
    const [data,setData]=useState({})
    const products=useSelector((store)=>store.productsReducer.products);
    useEffect(()=>{
        const product=products.find((el) => el.id===+id)
        setData(product)
    },[id,products])
  return (
    <div id='banner1'>
    <DIV>
        <h2>Post-id: {id}</h2>
        <ProductCard {...data} />
    </DIV>
    </div>
  )
}
const DIV=styled.div`
    width:50%;
    border:1px solid black;
    padding:10px;
    margin:auto;
    text-align:center;
    
    

    img{
        width:100%
    }
`