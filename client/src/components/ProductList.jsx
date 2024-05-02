import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Redux/Products/action'
import { ProductCard } from './ProductCard'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'

export const ProductList = () => {
    const dispatch=useDispatch()
    const [searchParams,setSearchParams]=useSearchParams()
    const Products=useSelector((store)=>store.productsReducer.products)

    const paramObj={
        params:{
            category:searchParams.getAll("category"),
            _sort:searchParams.get("order") && "likes",
            _order:searchParams.get("order"),
        },
        
    }
    useEffect(()=>{
        dispatch(getProduct(paramObj))
    },[searchParams])
  return (
    <DIV>
        {
           Products.length>0 && 
           Products.map((el)=>{
            return <ProductCard key={el.id} {...el}/>
           }) 
        }
    </DIV>
  )
}

const DIV=styled.div`
    width:60%;
    height:200px;
    display: grid;
    grid-template-columns:auto;
    gap:10px;
    padding:20px;
    text-align:center;
    
    
`
