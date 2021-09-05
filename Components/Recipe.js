import axios from "../services"
import { useEffect, useState , useContext} from "react"
import { store } from "../App";
import {Redirect} from "react-router-dom"


function Recipe(){
    const [token,setToken]= useContext(store);
    const [data, setData]= useState([]);

    useEffect(()=>{
        axios.get("/recipe",
        {
            headers:{
                'token': token
            }
        })
        .then(res=>setData(res.data)).catch((error)=>{
            console.log(error)
        })
    })
    if(!token){
        return <Redirect to='/login' />
    }

    return(
       <div className="home">
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
                           {data.map(recipe=><div>
                              <div key={recipe.Id} ><img src={`/uploads/${recipe.HotelImg}`}  alt={"recipe.HotelImg"}/></div>
                              <h2>{recipe.Name}</h2>
                              <p >{recipe.Cost}</p>
                              <button id="button">Add Cart</button><br/><br/>  
                            </div>)}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
       </div>
            
    )
}
export default Recipe

