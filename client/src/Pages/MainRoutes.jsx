import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { Login } from './Login'
import { Admin } from './Admin'
import { EditProduct } from './EditProduct'
import { SingleProduct } from './SingleProduct'
import { PrivateRoute } from '../components/PrivateRoute'
import { Singup } from './Singup'
import { Landing } from './Landing'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/singup' element={<Singup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={
            <PrivateRoute>
                <Admin/>
            </PrivateRoute>
        
        }/>
        <Route path='/edit/:id' element={
            <PrivateRoute>
                <EditProduct/>
            </PrivateRoute>
        
        }/>
        <Route path='/view/:id' element={
            <PrivateRoute>
                <SingleProduct/>
            </PrivateRoute> 
        
        }/>

        <Route path='*' element={<h2>404 Page not fount!</h2>}/>
    </Routes>
  )
}
