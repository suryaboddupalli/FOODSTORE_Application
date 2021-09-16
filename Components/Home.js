import React from 'react'
import api from '../services'
import { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'

function Home(){
    const history = useHistory();
    const [data, setData]= useState([]);
    
    useEffect(()=>{
        api.hotels()
        .then(res=>setData(res.data))
    },[])
  
    return(
        <div className='home'>
            <nav className='navbar bg-dark fixed-top'>
                <div className='container-fluid'>
                   <div className='navbar-header'>
                        <a href='/' className='navbar-brand text-light'>FOODSTORE</a>
                    </div>
                   <ul className='nav'>
                       <li ><a  className ='nav-link text-light' href='/'>Home</a></li>
                       <li ><a className='nav-link text-light'  href='/register'>Register</a></li>
                       <li ><a className='nav-link text-light' href='/login'>Login</a></li>
                    </ul>
                </div>
            </nav><br/><br/>        
            <div className= 'container mt-5' >
                <div className='card'>
                    {data.map((hotel)=><div className='row' key={hotel._id}>
                        <div  className='col-lg-4'>
                           <img src={`./uploads/${hotel.HotelImg}`} className='img-fluid' alt={hotel.HotelImg} style={{width:600, height:180}}/> 
                        </div>
                        <div className='col-lg-8 px-5' >
                           <h2>{hotel.HotelName} </h2>
                           <h6>{hotel.Locality}</h6>
                           <p>{hotel.HotelType}</p>
                           <button className='btn btn-primary' onClick={()=>{history.push('/login')}}>Open</button><br/><br/><br/><br/>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>   
    )
}
export default Home