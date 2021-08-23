import axios from "axios";
import React from "react"


class HotelRegister extends React.Component {
    
    constructor() {
      super();
      this.state={
          Id:'',
          Name:'',
          Lankmark:'',
          City :'',
          States :'',
          Pincode:''
      }
    }

    onchange=(event)=>{
        this.setState({
        [event.target.name]: event.target.value

         })
    }
    handleSubmit= event  =>{
        event.preventDefault()
        const Hoteldata = {
            Id: this.state.Id,
            Name : this.state.Name,
            Landmark : this.state.Landmark,
            City: this.state.City,
            States: this.state.States,
            Pincode : this.state.Pincode
           
        }

        axios({
            url:'http://localhost:8000/hotel/addhotel',
            method:'POST',
            data : Hoteldata
        })
       
    };
    
    render() {
        return(
            <div className='page'>
                <div className='text'> 
                  
                   <form className='Hotel' onSubmit={this.handleSubmit}>
                      <h3 id="head">Hoteldata</h3>
                        <label>Id</label>
                        <input type="number" id="txtbox" placeholder="Id" name='Id' value={this.state.Id} onChange={this.onchange}/>
                       <label id="labels">Name</label>
                       <input type= " text" id='txtbox' placeholder='Hotel Name' name='Name' value = {this.state.Name} onChange={this.onchange}  /> 
                       <label  id="labels">Lankmark</label>
                       <input type= "text"  id='txtbox' placeholder='Lankmark' name='Landmark'value = {this.state.Landmark} onChange={this.onchange}   />
                       <label  id="labels">City</label> 
                       <input type= "text" id='txtbox' placeholder='City' name='City' value = {this.state.City} onChange={this.onchange}  /> 
                       <label  id="labels">State</label>
                       <input type= "text"  id='txtbox' placeholder='State' name='States'value = {this.state.States} onChange={this.onchange} />
                       <label  id="labels">Pincode</label>
                       <input type= "number"  id='txtbox' placeholder='Pincode' name='Pincode'value = {this.state.Pincode} onChange={this.onchange} />
                      <button id='button'>Register</button>
                
                    </form>

                </div>
            
          </div>
        )
    }
}
export default HotelRegister