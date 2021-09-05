import React,{useContext, useState,useEffect } from "react"
import {store} from "../App"
import { Redirect } from "react-router";
import axios from "axios";



const Profile = ()=>{
    const [token,setToken] = useContext(store);
    const [data,setData] = useState(null);
    useEffect(() =>{
        axios.get('http://localhost:8000/user/Profile',{
            headers: {
                'token' : token 
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))
    })
    if(!token){
        return <Redirect to='/login' />
    }
    return (
        <div>
            {
                data &&
            <center>
                    <h5 class="card-title">Welcome : {data.Firstname}</h5>
                    <button class="btn btn-primary" onClick={() => setToken(null)}>Logout</button>
                    
            </center>
        }
        </div>
    )
}

export default Profile