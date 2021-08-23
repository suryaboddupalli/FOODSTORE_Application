import React from 'react'
import { useHistory} from 'react-router-dom'
import "../css/Home.css"


function Homepage(){
    const history = useHistory();

    return(
        <div className="home">
            <div className="btns">
                <h1 id="title">FoodStore</h1>
               <button id="register" onClick={()=>{history.push("/register")}} >Register</button> 
               <button id="login" onClick={()=>{history.push("/login")}}>Log in</button>
            </div>

          
          <h2 id="greet">welcome to FoodStore</h2>

        </div>
        
        
    )

}
export default Homepage