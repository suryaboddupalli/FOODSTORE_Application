import axios from "axios";
import React from "react";


class RecipeRegister extends React.Component {
    
    constructor() {
      super();
      this.state={
          Id:'',
          Name:'',
          Cost :''
      }
    }

    onchange=(event)=>{
        this.setState({
        [event.target.name]: event.target.value

         })
    }
    handleSubmit= event  =>{
        event.preventDefault()
        const Recipedata = {
            Id: this.state.Id,
            Name : this.state.Name,
            Cost: this.state.Cost,
        }

        axios({
            url:'http://localhost:8000/recipe/addrecipe',
            method:'POST',
            data : Recipedata
        })
       
    };
    
    render() {
        return(
            <div className='HotelRecipe'>
                <div className='text'> 
                   <form className='Recipe' onSubmit={this.handleSubmit}>
                      <h3 id="head">Hoteldata</h3>
                        <label>Id</label>
                        <input type="number" id="txtbox" placeholder="Id" name='Id' value={this.state.Id} onChange={this.onchange}/>
                       <label id="labels">Name</label>
                       <input type= " text" id='txtbox' placeholder='Recipe Name' name='Name' value = {this.state.Name} onChange={this.onchange}  /> 
                       <label  id="labels">Cost</label> 
                       <input type= "number"  id='txtbox' placeholder='Cost' name='Cost' value = {this.state.Cost} onChange={this.onchange} />
                      <button id='button'>Register</button>
                
                    </form>

                </div>
            
          </div>
        )
    }
}
export default RecipeRegister