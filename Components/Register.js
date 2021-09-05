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
          Password:'' ,
          error:''
      }
    }
  
    onchange=(event)=>{
    this.setState({
      [event.target.name]: event.target.value
      })
    }

    handleSubmit= event  =>{
      event.preventDefault()

      const userdata = {
        Firstname: this.state.Firstname,
        Lastname : this.state.Lastname,
        Email: this.state.Email,
        Phone :this.state.Phone,
        Password : this.state.Password 

      }

      axios({
        url:'http://localhost:8000/user/Register',
        method:'POST',
        data : userdata
        }).then(()=>{
          console.log(userdata)
        }).catch((e)=>{
          this.setState({
            errormessage : e.response.data.error.notentered.message})
        }  
    )};

    render() {
        return(
            <div className='page'>
                <div className='text'>
                   <form className='Register' onSubmit={this.handleSubmit}>
                      <h3 id="head">Register</h3>
                      {(this.state.errormessage !== null)
                      ?<div className="error">
                        {this.state.errormessage}
                      </div>
                      :<div></div>}
                      <label id="labels">Firstname</label>
                      <input type= " text" className='txtbox' placeholder='Ex:Surya' name='Firstname' value = {this.state.Firstname} onChange={this.onchange} pattern="[A-Z a-z]{1,}"  required title="Firstname should be in alphabets" /> 
                      <label  id="labels">Lastname</label>
                      <input type= "text"  className='txtbox' placeholder='Ex:Boddupalli' name='Lastname'value = {this.state.Lastname} onChange={this.onchange}  pattern="[A-Z a-z]{1,}" required title="Lastname should be in alphabets" />
                      <label  id="labels">Email</label> 
                      <input type= "email" className='txtbox' placeholder='Example@gmail.com' name='Email' value = {this.state.Email} onChange={this.onchange}  required  />
                      <label  id="labels">Phone</label>
                      <input type= "text"  className='txtbox' placeholder='Ex:9029288938' name='Phone'value = {this.state.Phone} onChange={this.onchange} pattern="[6-9][0-9]{9}" required title="please enter valid 10 digit number"/>
                      <label  id="labels">Password</label>
                      <input type= "password"  className='txtbox' placeholder='ABCabc!@#$%^123' name='Password'value = {this.state.Password} onChange={this.onchange} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?])[A-Za-z\d@$!%*?]{8,}$"  required/>
                      <button id='button' >Register</button>
                      <a href='./Login'>Login</a>
                    </form>
                </div>
          </div>
        )
    }
}

export default Register