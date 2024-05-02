import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = () => {
  return (
    <DIV>
      <div id='nav'>
        <div><h1>Masai Forum</h1></div>
        <div id='link'>
        <Link to={'/admin'} >Add Post</Link>
        <Link to={'/'} >Home</Link>
        <Link to={'/home'} >Dashboard</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/singup'}>singup</Link>
        </div>
      </div>
    </DIV>
  )
}

const DIV=styled.div`
    position:relative;
    display:flex;
    align-items:center;
    /* gap:25px; */
    background-color:lightblue;
    #nav{
      display:flex;
      justify-content:space-around;
      gap:800px;
    }
    #link{
      display:flex;
      justify-content:space-around;
      gap:25px;
      align-items:center;
    }
`
