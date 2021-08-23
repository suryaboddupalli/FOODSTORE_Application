import axios from 'axios'
import { useEffect, useState } from 'react'
import "../css/Hotels.css"
import {useHistory} from 'react-router-dom'

function Hotels(){
    const history = useHistory();
    const [data, setData]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/hotel")
        .then(res=>setData(res.data))
    },[])


    return(
        <div className='home'>
            <div className="Navbar">
                <h1 id="title">FoodStore</h1>
               <button id="signout" onClick={()=>{history.push('/login')}}>Sign out</button> 
               <button id="cart" >cart</button>
               <div className="search">
                <input type="search" placeholder='SEARCH' />
                <button >search</button>
               </div>
               
            </div>
            <div className='hoteldetails'>
              {data.map(hotel=><div>
                <li key={hotel.Id} style={{color:'blue'}}>{hotel.Name}</li>
                <li >{hotel.Landmark}</li>
                <li >{hotel.City}</li>
                <li >{hotel.States}</li>
                <li >{hotel.Pincode}</li>
                <button onClick={()=>{history.push('/recipe')}}>open</button>   
            </div>)}

        </div>
        </div>
       

    )
}
export default Hotels