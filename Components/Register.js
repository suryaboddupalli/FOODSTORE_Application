import React, {useState} from 'react';
import api from '../services'
import '../css/register.css'
import RegisterValidation from '../Validation/RegisterValidation';
import { useHistory } from 'react-router-dom';

const Register = () => {
	const history = useHistory()
    const [data,setData] = useState({
        Firstname : '',
        Lastname : '',
        Email : '',
        Phone : '',
        Password : '' ,
    })
	const[success, setSuccess] = useState()
	const[userError, setUserError] = useState({})
    const[error,setError] = useState()
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault();
		setUserError({error :RegisterValidation(data)})
		console.log(userError)
		if(Object.keys(RegisterValidation(data)).length === 0){
			api.register(data).then(res=>{
				setSuccess(res.data)
				history.push('/login')
			}
			).catch((error)=>{
				console.log(error.response.data.error.userExist.errorMessage)
				setError( error.response.data.error.userExist.errorMessage)
			})
		}
    }

	return(
        <div className='page'>
	    <div className='form-container '>
			<div className='bg-secondary p-3 text-white text-center '>
				<h2>Register </h2>
				{success && <div className='error text-success'>{success}</div>}
				{error && <div className='error text-danger'>{error}</div>}
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
					    <label className='labels'>Firstname</label><br/>
						<input type= ' text'  placeholder='Ex:Surya' name='Firstname' onChange={changeHandler }  /><br/>
							{userError ? <span style ={{color :'red'} }>{userError.error.Firstname}</span>:null}
					</div>
					<div className='form-group'>
						<label  className='labels'>Lastname</label><br/>
						<input type= 'text'   placeholder='Ex:Boddupalli' name='Lastname' onChange={changeHandler}  /><br/>
						{userError ? <span style ={{color :'red'} }>{userError.error.Lastname}</span>:null}
					</div>
					<div className='form-group'>
						<label  className='labels'>Email</label> <br/>
                        <input type= 'text'  placeholder='Example@gmail.com' name='Email'  onChange={changeHandler}  /><br/>
						{userError ? <span style ={{color :'red'} }>{userError.error.Email}</span>:null}
                    </div>
					<div className='form-group'>
						<label  className='labels'>Phone</label><br/>
                        <input type= 'text'   placeholder='Ex:9029288938' name='Phone' onChange={changeHandler} /><br/>
						{userError ? <span style ={{color :'red'} }>{userError.error.phone}</span>:null}
					</div>
					<div className='form-group'>
						<label  id='labels'>Password</label><br/>
                        <input type= 'password'  placeholder='ABCabc!@#$%^123' name='Password' onChange={changeHandler} /><br/>
						{userError? <span style ={{color :'red'} }>{userError.error.Password}</span>:null}
                    </div><br/>
					<div>
						<button  className= 'btn btn-primary'>Register</button>
					</div><br/>
					<a href='./Login' className='text-white' >Login</a>
				</form>
			</div>
		</div>
        </div>
    )
}

export default Register