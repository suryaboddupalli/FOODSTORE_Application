import React from "react"
import axios from "../services"
import { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
function Home(){
    const history = useHistory();
    const [data, setData]= useState([]);
    
    useEffect(()=>{
        axios.get("/hotel")
        .then(res=>setData(res.data))
    },[])
  
    

    return(
        <div className="home">
            <nav className="navbar bg-dark fixed-top">
                <div className="container-fluid">
                   <div className="navbar-header">
                        <a href="/" className="navbar-brand text-light">FOODSTORE</a>
                    </div>
            
                   <ul className="nav">
                       <li ><a  className="nav-link text-light" href="/">Home</a></li>
                       <li ><a className="nav-link text-light"  href="/register">Register</a></li>
                       <li ><a className="nav-link text-light" href="/login">Login</a></li>
                    </ul>
                </div>
            </nav><br/><br/>
            <div className="row">
                <div className="col-12">
                    <div className="card" >
                        <div class="card-body">
                        {data.map((hotel)=><div >
                                <div key={hotel.id} ><img src={`/uploads/${hotel.HotelImg}`}  alt={hotel.HotelImg}/></div><br/>
                                <h1 className="card title">{hotel.HotelName}</h1>
                                <h6 class="card-subtitle " style={{  fontSize:"15px" }}>{hotel.Locality}</h6>
                                <h6>{hotel.HotelType}</h6>
                                <button id="button" onClick={()=>{history.push("/login")}}>Open</button><br/><br/><br/><br/>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
       
    )
}
export default Home