import axios from "axios";
import React from "react";
import "../css/register.css"


class Register extends React.Component {
    
    constructor(props) {
      super(props);
      this.state={
          Firstname:'',
          Lastname :'',
          Email:'',
          Phone :'',
          Password:'' 
      }
    }
    

    onchange=(event)=>{
        
        this.setState({
        [event.target.name]: event.target.value

         })
         console.log(event.target.name)
         console.log(event.target.value)
    }

  

    handleSubmit= event  =>{
      event.preventDefault()
  
      const userdata = {
            Firstname : this.state.Firstname,
            Lastname : this.state.Lastname,
            Email : this.state.Email,
            Phone : this.state.Phone,
            Password : this.state.Password
      }

      axios({
            url:'http://localhost:8000/user/signup',
            method:'POST',
            data : userdata
        }).then(()=>{
          window.location.href = "./Hotels"
        }).catch(err=>console.log(err))

    };


    
    render() {
        return(
            <div className='page'>
                <div className='text'>
                   <form className='Register' onSubmit={this.handleSubmit}>
                      <h3 id="head">Register</h3>
                      {(this.state.notentered !== undefined)
                      ?<div className="error">
                        {this.state.noteneterd.message}
                      </div>
                      :<div></div>}
                      <label id="labels">Firstname</label>
                      <input type= " text" id='txtbox' placeholder='Firstname' name='Firstname' value = {this.state.Firstname} onChange={this.onchange}  /> 
                      <label  id="labels">Lastname</label>
                      <input type= "text"  id='txtbox' placeholder='Lastname' name='Lastname'value = {this.state.Lastname} onChange={this.onchange}   />
                      <label  id="labels">Email</label> 
                      <input type= "email" id='txtbox' placeholder='Email' name='Email' value = {this.state.Email} onChange={this.onchange}  /> 
                      {/* {(this.state.error.userexist !== undefined)
                      ?<div className ="error">
                         {this.state.error.userexist.message}
                      </div>
                      :
                      <div></div>
                      } */}
                      <label  id="labels">Phone</label>
                      <input type= "number"  id='txtbox' placeholder='Phone' name='Phone'value = {this.state.Phone} onChange={this.onchange} />
                      <label  id="labels">Password</label>
                      <input type= "password"  id='txtbox' placeholder='New-Password' name='Password'value = {this.state.Password} onChange={this.onchange} />
                      <button id='button' >Register</button>
                      <a href='./Login'>Login</a>
                    </form>
                </div>
          </div>
        )
    }
}

export default Register