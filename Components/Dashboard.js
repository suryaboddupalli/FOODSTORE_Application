import React from 'react'
import Hotels from './Hotels'

function Dashboard(){
    const logout =()=>{
       sessionStorage.clear();
    }
    
    return(
        <div className='home'>
        <nav className='navbar bg-black fixed-top'>
            <div className='container-fluid'>
               <div className='navbar-header'>
                    <a href='/' className='navbar-brand text-light'>FOODSTORE</a>
                </div>
                <ul className='nav'>
                   <li ><a  className = 'nav-link text-light' href='/'>Home</a></li>
                   <li ><a className ='nav-link text-light'  href='/Cart'>Cart</a></li>
                   <li ><a className ='nav-link text-light' href='/login' onClick = {logout}>SignOut</a></li>
                </ul>
            </div>
        </nav><br/><br/>
        <Hotels/>
    </div>   
    )
}
export default Dashboard