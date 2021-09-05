import axios from "../services"
import { useEffect, useState ,useContext} from 'react'
import {store} from "../App"
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";


const Hotels= ()=>{
    const history = useHistory();
    const [token,setToken] = useContext(store);
    const [data, setData]= useState([]);
    
    useEffect(()=>{
        axios.get("/hotel",{
            headers:{
                'token': token
            }
        })
        .then(res=>setData(res.data)).catch((error)=>console.log(error))
    })
    if(!token){
        return <Redirect to='/login' />
    }

    return(
        <div className="home">
            <nav className="navbar bg-dark fixed-top">
                <div className="container-fluid">
                   <div className="navbar-header">
                        <a href="/hotels" className="navbar-brand text-light">FOODSTORE</a>
                    </div>
            
                   <ul className="nav">
                       <li ><a  className="nav-link text-light" href="/hotels">Home</a></li>
                       <li ><a className="nav-link text-light"  href="/cart">Cart</a></li>
                       <li ><button style={{background:"black" , color:"white"}} onClick={() => setToken(null)}>Signout</button></li>
                    </ul>
                </div>
            </nav><br/><br/>
            <div className="row">
                <div className="col-12 ">
                    <div className="card" >
                        <div class="card-body">
                        {data.map((hotel)=><div >
                                <div key={hotel.id} ><img src={`/uploads/${hotel.HotelImg}`}  alt={hotel.HotelImg}/></div><br/>
                                <h1 className="card title">{hotel.HotelName}</h1>
                                <h6 class="card-subtitle " style={{  fontSize:"15px" }}>{hotel.Locality}</h6>
                                <h6>{hotel.HotelType}</h6>
                                <button id="button" onClick={()=>{history.push("/hotel/recipe")}}>Open</button><br/><br/><br/><br/>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
       

    )
}
export default Hotels