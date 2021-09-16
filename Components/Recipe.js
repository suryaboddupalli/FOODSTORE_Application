import React from 'react'
import api from '../services'
import { useEffect, useState} from 'react'

function Hotel(){
    const [data, setData]= useState([]);
    
    const logout =()=>{
        sessionStorage.clear()
    }

    useEffect(()=>{
        api.recipe()
        .then(res=>setData(res.data))
    })
  
    return(
        <div className='home'>
            <nav className='navbar bg-black fixed-top'>
                <div className='container-fluid'>
                   <div className='navbar-header'>
                        <a href='/' className='navbar-brand text-light'>FOODSTORE</a>
                    </div>
                   <ul className='nav'>
                       <li ><a  className = 'nav-link text-light' href='/hotels'>Home</a></li>
                       <li ><a className ='nav-link text-light'  href='/Cart'>Cart</a></li>
                       <li ><a className ='nav-link text-light' href='/login' onClick = {logout}>Signout</a></li>
                    </ul>
                </div>
            </nav><br/><br/>
            <div className= 'container mt-5' >
                <div className='card'>
                    {data && data.map((recipe)=><div className='row' key={recipe._id}>
                        <div className='col-lg-4'>
                           <img src={`../uploads/${recipe.RecipeImg}`} className='img-fluid' alt={recipe.RecipeImg} style={{width:600, height:200}}/> 
                        </div>
                        <div className='col-lg-8 px-5' >
                           <h2>{recipe.Name} </h2>
                           <h6>Rs.{recipe.Cost}</h6>
                           <button className='btn btn-primary'>Add To Cart</button><br/><br/><br/><br/><br/><br/>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>   
    )
}
export default Hotel