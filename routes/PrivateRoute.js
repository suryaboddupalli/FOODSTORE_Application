import React from 'react'
import {Route, Redirect} from "react-router-dom"

function PrivateRoute({ component : Component , ...rest}){
    const token = JSON.stringify(sessionStorage.getItem('token'))
    const admin = JSON.stringify(sessionStorage.getItem('admin'))
    console.log(token)
    return <Route {...rest} render={(props)=>{
        if(token && admin){
            return <Component {...props} />
        }else{
            return <Redirect to = '/login'></Redirect>
        }
    }} />
}
export default PrivateRoute