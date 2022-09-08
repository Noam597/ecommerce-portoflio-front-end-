

export const passwordCheck =/^(?=.*[a-z])(?=.*[A-Z].*[A-Z])(?=.*[0-9].*[0-9])(?=.*[!@#$%&])[a-zA-Z0-9?!@#$%&]{8,}$/g
export const emailCheck = /^([a-zA-Z0-9\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,3})?$/

export const errorValidator = (value)=>{

    let errors = {}

    if(!value.userName){
        errors.userName = 'Name required'
    }
    if(!value.lastName){
        errors.lastName = 'Last Name required'
    }

    if(!value.password){
        errors.password = 'password required'
    } else if(passwordCheck){
        errors.password = 'password invalid (must contain two uppercase and two numbers and special sign)'
    }
    
    if(!value.email){
        errors.email = 'Email required'
    }else if(!emailCheck){
        errors.email = 'email invalid '
    }
    

    if(!value.phone){
        errors.phone = 'Phone Number required'
    }

    if(!value.address){
        errors.address = 'Address required'
    }

    return errors


}