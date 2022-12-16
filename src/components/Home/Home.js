import React, { useState } from 'react'
import './Home.css'
import { Link } from "react-router-dom";
const Home = ({data}) => {
    const [showdesc,setdesc] = useState(false)
    const [ind,setIndex] = useState(null)
  
    const onCardHandle = (index) =>{
        setdesc(!showdesc)
        setIndex(index)
    }
  return (
    
    <div className='Home-container'>
       
        {data.map((CI,index)=>{
            return(
                <Link className='link' to = {`./post/${CI.id}`}>
                <div key={index} className = "cart-contanier">
                    <h4 className='cart-heading'>{CI.title}</h4>
                    <img src={CI.img} alt = {CI.title} className = "card-image"/>
                    <p className='card-description'>{showdesc && index === ind ?CI.longDesc:CI.desc}</p>
                    <span className='read-more'  onClick={()=>onCardHandle(index)}>{showdesc && index === ind?"Read Less":"Read More"}</span>
                </div>
                
                </Link>
                

            )
        })}
    </div>
  )
}

export default Home