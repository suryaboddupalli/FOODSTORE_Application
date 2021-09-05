
import {useHistory} from 'react-router-dom'

function Admin(){
    const history = useHistory();


    return(
        <div className="home">
            <div className="Navbar">
                <h1 id="title">FoodStore</h1>
                <button id="hotel" onClick={()=>{history.push("/addhotel")}}>Add Hotels</button>
                <button id="recipe" onClick={()=>{history.push("/recipe")}}>Add Hotels</button>
               <button id="signout" onClick={()=>{history.push("/login")}}>Sign Out</button> 
        
            </div>
            <div>
                <h2>Welcome to Admin</h2>
            </div>
            
        </div>
       

    )
}
export default Admin