import React from 'react'
import { ProductList } from '../components/ProductList'
import { Sidebar } from '../components/Sidebar'
import styled from 'styled-components'

export const HomePage = () => {
  return (
    <DIV>
        <div className='sidebar'>
            <Sidebar/>
        </div>
        <div className='product-list'>
            <ProductList/>
        </div>
    </DIV>
  )
}

const DIV=styled.div`
  display:flex;
  align-items:flex-start;

  .sidebar{
    width:15%;
    
  }  
  .product-list{
    width:85%;
    /* background-color:teal; */
  }
`
