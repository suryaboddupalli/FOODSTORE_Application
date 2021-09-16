import api from '../services';
import React, { useState , useEffect} from 'react'

const Addrecipe = ()=>{
    const [recipe, setRecipe]=useState({
        Name :'',
        Cost : '',
    })
    const [success, setSuccess] = useState()
    const [data,setData] = useState()
    const [ RecipeImg, setRecipeImg]=useState()
    const changeHandler = (e)=>{
        setRecipe({...recipe,[e.target.name]:e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault();
        const Recipedata = new FormData();
        Recipedata.append('Name',recipe.Name)
        Recipedata.append('Cost',recipe.Cost)
        Recipedata.append('RecipeImg',RecipeImg)

        api.addrecipe(Recipedata)
        .then((res)=>{
            setSuccess(res.data)
        } ).catch((err)=>{
            console.log(err)
        });
    }
    useEffect(()=>{
        api.recipe()
        .then(res=>{
            setData(res.data)
        })
    })

    return(
        <div className='home'>
            <div className='text'> 
               <form className='Hotel' enctype='multipart/form-data' onSubmit={handleSubmit}>
                   <h3 id='head'className="text-center">Recipedata</h3>
                   {success && <h4 className="text-success">{success}</h4>}
                   <label id='labels'>Name</label>
                   <input type= ' text' className='txtbox' placeholder='Recipe Name' name='Name'  onChange={changeHandler}  /> 
                   <label  id='labels'>Cost</label> 
                   <input type= ' text' className='txtbox' placeholder='Recipe Name' name='Cost'  onChange={changeHandler}  /> 
                   <label>Upload</label>
                   <input type='file' className='txtbox'  name='RecipeImg'  onChange={event=>{const file=event.target.files[0]; setRecipeImg(file)}} />
                  <button id='button'>Register</button>
                </form>
            </div>
            <div className= 'container mt-5' >
                <div className='card'>
                    {data && data.map((recipe)=><div className='row' key={recipe._id}>
                        <div  className='col-lg-4'>
                           <img src={`../uploads/${recipe.RecipeImg}`} className='img-fluid' alt={recipe.RecipeImg} style={{width:600, height:200}}/> 
                        </div>
                        <div className='col-lg-8 px-5' >
                           <h2>{recipe.Name} </h2>
                           <h6>Rs.{recipe.Cost}</h6>
                           <button className='btn btn-primary'>Add To Cart</button><br/><br/><br/><br/><br/><br/>
                        </div>
                    </div>)}
                </div>
            </div>
      </div>
    )
    }

export default Addrecipe


