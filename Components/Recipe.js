import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../css/Recipe.css'


function Recipe(){
    const history = useHistory();

    const [data, setData]= useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/recipe")
        .then(res=>setData(res.data))
    },[])


    return(
        <div className='home'>
              <div className="Navbar">
                <h1 id="title">FoodStore</h1>
               <button id="signout" onClick={()=>{history.push('/login')}}>Sign out</button> 
               <button id="cart" >cart</button>
               <div className="search">
                <input type="search" placeholder='SEARCH' />
                <button >search</button>
               </div>
               
            </div>
            

            <div className='recipe'>
               <div className='Recipedetails'>
                 {data.map(recipe=><div>
                 <li key={recipe.Id} style={{color:'blue'}}>{recipe.Name}</li>
                 <li >{recipe.Cost}</li>
                  <button>addcart</button>   
                  </div>)}

                </div>
           </div>

        </div>

    )
}
export default Recipe