import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const Sidebar = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const [category,setCategory]=useState(searchParams.getAll("category")||[])
    const [order,setOrder]=useState(searchParams.get("order")||"")
    

    const handlCategory=(e)=>{
        const {value}=e.target
        let newCategory=[...category];

        if(newCategory.includes(value)){
            newCategory=newCategory.filter(el=>el!==value)
        }
        else{
            newCategory.push(value);
        }
        setCategory(newCategory)
        console.log(category)
    }
    const handleOrder=(e)=>{
        const {value}=e.target;
        setOrder(value)
    }
    useEffect(()=>{
        let params={
            category:category,
        }
        order && (params.order=order);
        
        setSearchParams(params)

    },[category,order])
  return (
    <div>
        <h3>Filter by Category</h3>
        <div>
            <input type="checkbox" value={"Development"} onChange={handlCategory} checked={category.includes("Development")}/>
            <label>Development</label>
        </div>
        <div>
            <input type="checkbox" value={"Design"} onChange={handlCategory} checked={category.includes("Design")}/>
            <label>Design</label>
        </div>
        <div>
            <input type="checkbox" value={"Innovation"} onChange={handlCategory} checked={category.includes("Innovation")}/>
            <label>Innovation</label>
        </div>
        <div>
            <input type="checkbox" value={"Tutorial"} onChange={handlCategory} checked={category.includes("Tutorial")}/>
            <label>Tutorial</label>
        </div>
        <div>
            <input type="checkbox" value={"Bussiness"} onChange={handlCategory} checked={category.includes("Bussiness")}/>
            <label>Bussiness</label>
        </div>
        <h3>Sort by Likes</h3>
        <div>
            <input type="radio" name='order' value={"asc"} onChange={handleOrder} checked={order==="asc"}/>
            <label>Low to Heigh</label>
        </div>
        <div>
            <input type='radio' name='order' value={"desc"} onChange={handleOrder} checked={order==="desc"}/>
            <label>High to Low</label>
        </div>
    </div>
    
  )
}
