const RegisterValidation = (userdata)  =>{
    const userErrors = {}
    const emailregex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?])[A-Za-z\d@$!%*?]{8,}$/

    if(!userdata.Firstname){
        userErrors.Firstname = 'Please enter the Firstname'
    }
    if(!userdata.Lastname){
        userErrors.Lastname = 'please enter the Lastname'
    }
    if(!userdata.Email){
        userErrors.Email = 'please enter the Email'
    }
    if(!(emailregex.test(userdata.Email))){
        userErrors.Email = 'Please enter the valid Email'
    }
    if(userdata.Phone < 10){
        userErrors.phone = 'Please enter valid Mobile NUmber'
    }
    if(userdata.Password < 8){
        userErrors.Password = 'Please enter min 8 characters '
    }
    if(!(passwordregex.test(userdata.Password))){
        userErrors.Password = 'Password must contain 1 uppercase, 1 lowercase, 1 Digit, 1 special character'
    }
    return userErrors

}
export default RegisterValidation