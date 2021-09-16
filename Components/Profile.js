import React,{ useState,useEffect } from 'react'
import api from '../services';

const Profile = ()=>{
   
    const [data,setData] = useState(null);
    useEffect(() =>{
        api.users()
        .then((res)=>{
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    })
    const logout = ()=>{
        sessionStorage.clear()
    }
    
    return (
        <div className='home'>
        <nav className='navbar bg-dark fixed-top'>
            <div className='container-fluid'>
               <div className='navbar-header'>
                    <a href='/' className='navbar-brand text-light'>FOODSTORE</a>
                </div>
               <ul className='nav'>
                   <li ><a  className ='nav-link text-light' href='/hotel/add'>Add Hotels</a></li>
                   <li ><a className='nav-link text-light'  href='/recipe/add'>Add Recipe</a></li>
                   <li ><a className='nav-link text-light' href='/profile'>Users</a></li>
                   <li ><a className='nav-link text-light' href='/login' onClick={logout}>Signout</a></li>
                </ul>
            </div>
        </nav><br/><br/>
        <div className="card">
            {data && data.map(user=>
            <div className="card-body" key={user._id}>
              <h5 className="card-title">{user.Firstname} {user.Lastname} <br/></h5>
              <h6 className="card-subtitle mb-2 text-muted">{user.Email}<br/>{user.Phone}</h6>
            </div>)}
        </div>
    </div>
       
    )
}

export default Profile