import React from 'react'
import axios from 'axios'
import { useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

function Hotels(){
    const history = useHistory();
    const [data, setData]= useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/hotel')
        .then(res=>setData(res.data))
    })
  
    return(
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
                        <button className='btn btn-primary' onClick={()=>{history.push('/hotel/recipe')}}>Open</button><br/><br/><br/><br/>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
export default Hotels