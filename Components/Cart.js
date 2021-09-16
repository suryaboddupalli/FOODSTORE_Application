// import axios from '../services'
// import { useEffect, useState } from 'react'

// const PAGE_RECIPE= 'recipe';
// const PAGE_CART = 'cart';


// function Recie(){
//     const[ cart ,setCart] = useState([]);
//     const [data, setData]= useState([]);
//     const [page,setPage]= useState('recipe')

//     useEffect(()=>{
//         axios.get('/recipe',
//         )
//         .then(res=>setData(res.data)).catch((error)=>{
//             console.log(error)
//         })
//     })

//     const addToCart = (recipe)=>{
//         console.log('addtocart')
//         setCart({...cart,recipe})
//     }
//     const navigateTo = (nextpage)=>{
//         setPage(nextpage)
//     }

//     const renderRecipe=()=>
//     <div className='home'>
//             <nav className='navbar bg-dark fixed-top'>
//                 <div className='container-fluid'>
//                    <div className='navbar-header'>
//                         <a href='/hotels' className='navbar-brand text-light'>FOODSTORE</a>
//                     </div>
            
//                    <ul className='nav'>
//                        <li ><a  className='nav-link text-light' href='/hotels'>Home</a></li>
//                        <li ><a className='nav-link text-light'  href='/cart'>Cart({cart.length})</a></li>
//                        <li ><button style={{background:'black' , color:'white'}} >Signout({cart.length})</button></li>
//                     </ul>
//                 </div>
//             </nav><br/><br/><br/><br/>
//             <div className='recipe'>
//                 <div className='Recipedetails'>
//                     {data.map(recipe=><div>
//                     <h3 key={recipe.Id} style={{color:'red'}}>{recipe.Name}</h3>
//                     <p >{recipe.Cost}</p>
//                     <button id='button' onClick={()=>addToCart(recipe)}>Add Cart</button><br/><br/>  
//                     </div>)}
//                 </div>
//             </div>
//         </div>
//         const renderCart=()=>
//         <div className='home'>
//             <nav className='navbar bg-dark fixed-top'>
//                 <div className='container-fluid'>
//                    <div className='navbar-header'>
//                         <a href='/hotels' className='navbar-brand text-light'>FOODSTORE</a>
//                     </div>
//                    <ul className='nav'>
//                        <li ><a  className='nav-link text-light' href='/hotels'>Home</a></li>
//                        <li ><a className='nav-link text-light'  href='/cart'>Carr({cart.length})</a></li>
//                        <li ><button onClick={()=>navigateTo(PAGE_RECIPE)} >recipe</button></li>
//                     </ul>
//                 </div>
//             </nav><br/><br/><br/><br/>
//             <div className='recipe'>
//                 <div className='Recipedetails'>
//                     {cart.map(recipe=><div>
//                     <h3 key={recipe.Id} style={{color:'red'}}>{recipe.Name}</h3>
//                     <p >{recipe.Cost}</p>
//                     <button id='button' onClick={()=>(recipe)}>hotel</button><br/><br/>  
//                     </div>)}
//                 </div>
//             </div>
//         </div>
//     return(
//         <div>
//             {page === PAGE_RECIPE && renderRecipe}
//             {page ===  PAGE_CART && renderCart}
//         </div>
//     )
// }
// export default Recie