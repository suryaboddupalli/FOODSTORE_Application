import React from "react"
import axios from "axios";
import "../css/login.css";


class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={
            email :"",password :""
        }
    }
    
    onchange=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })    
    }
    handleSubmit= event  =>{
       event.preventDefault()
       

       const userdata = {
           email : this.state.email,
           password : this.state.password
       }

       axios({
           url:'http://localhost:8000/user/login',
           method:'post',
           data : userdata
       })
       .then(()=>{
        window.location.href = "/hotels"
       }).catch(()=>{
           console.log('error')
       });

   };

    render(){
        return(
            <div className='page'>
                <div className="login">
                    <form className="forms" onSubmit = {this.handleSubmit} >
                       <label id="labels">Email</label>
                       <input type='email' id="txtbox" name='email' placeholder='example@gmail.com' value={this.state.email} onChange={this.onchange}/>
                       <label id="labels">Password</label>
                       <input type="password" id="txtbox" name='password' placeholder='Example123' value={this.state.password} onChange={this.onchange}/>
                       <button id="button" >Login</button>
                       <a href='./Register'>Register</a>
                    </form>

                </div>
                
            </div>
        )
    }
}
export default Login