const LoginValidation = (userData) =>{
    const userErrors = {}
    const emailregex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    console.log(userData)

    if(!userData.Email){
        userErrors.Email = 'Please enter the Email'
    }
    if(emailregex.test(userData.Email)){
        userErrors.Email = 'Please enter the valid Email'
    }
    if(userData.Password < 8){
        userErrors.Password = 'please enter the valid password'
    }

}
export default LoginValidation