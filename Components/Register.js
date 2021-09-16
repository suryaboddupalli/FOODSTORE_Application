import React, {useState} from 'react';
import api from '../services'
import '../css/register.css'
import RegisterValidation from '../Validation/RegisterValidation';

const Register = () => {
    const [data,setData] = useState({
        Firstname : '',
        Lastname : '',
        Email : '',
        Phone : '',
        Password : '' ,
    })
	const[userError, setUserError] = useState({})
    const[error,setError] = useState(null)
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault();
		setUserError(RegisterValidation(data))
		console.log(RegisterValidation(data).Firstname)
		console.log(userError)
        api.register(data).then(
            res => res.json(res.data)
        ).catch((error)=>{
            setError( error.response.data.error.userExist.errorMessage)
        })
    }

	return(
        <div className='page'>
	    <div className='form-container '>
			<div className='bg-secondary p-3 text-white text-center '>
				<h2>Register </h2>
				{error && <div className='error text-danger'>{error}</div>}
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
					    <label className='labels'>Firstname</label><br/>
						<input type= ' text'  placeholder='Ex:Surya' name='Firstname' onChange={changeHandler }  /> 
					</div>
					<div className='form-group'>
						<label  className='labels'>Lastname</label><br/>
						<input type= 'text'   placeholder='Ex:Boddupalli' name='Lastname' onChange={changeHandler}  />
					</div>
					<div className='form-group'>
						<label  className='labels'>Email</label> <br/>
                        <input type= 'email'  placeholder='Example@gmail.com' name='Email'  onChange={changeHandler}  />
                    </div>
					<div className='form-group'>
						<label  className='labels'>Phone</label><br/>
                        <input type= 'text'   placeholder='Ex:9029288938' name='Phone' onChange={changeHandler} />
					</div>
					<div className='form-group'>
						<label  id='labels'>Password</label><br/>
                        <input type= 'password'  placeholder='ABCabc!@#$%^123' name='Password' onChange={changeHandler} />
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