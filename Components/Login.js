import React, {useState,useContext} from "react";
import axios from "axios"
import {store} from "../App"
import { Redirect } from "react-router";

const Login = () => {
    const [token,setToken] = useContext(store)
    const [data,setData] = useState({
        Email:'',
        Password:''
    })
    const[error,setError]=useState(null)

    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/user/login',data).then(
            res => setToken(res.data.token)
        ).then(res=>{
            if(token){
                res.data.Role?<Redirect to ='/hoteladd'/>:<Redirect to ="/hotel"/>
            }
        })
        
        .then(res=>{
            if(!token){
                throw Error('invalid credentials')
            }
           return res.json();
        }).catch((error)=>{
            setError(error.message)
        })
    }
   
    
    return (
        <div>
            <center>
            
            <form className='Register' onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}
            <label  id="labels">Email</label> 
            <input type= "email" className='txtbox' placeholder='Example@gmail.com' name='Email'  onChange={changeHandler} required />
            <label  id="labels">Password</label>
            <input type= "password"  className='txtbox' placeholder='ABCabc!@#$%^123' name='Password' onChange={changeHandler}  required/>
            <button id='button' >Login</button>
            <a href='./Register'>Register</a>
            </form>
            </center>
        </div>
    )
}

export default Login
