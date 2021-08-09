
function hasOneCapital(password){
    return (/[A-Z]/.test(password));
}

function hasSpecialCharacter(password){
    return (/[^a-zA-Z\d]/.test(password))
}

export function checkIsValidPassword(errors){
   const checks = Object.values(errors).find(err => err.status === false)
    if(checks === undefined){
        return true
    }else{
        return false
    }
}

export function checkAreSamePassword (confirmErrMsg, form, setAreSamePassword) {
    const{password, confirmPassword} = form
    let error = {...confirmErrMsg}
    if(Object.is(password, confirmPassword)){
        setAreSamePassword(true)
        return error = {...error, samePassword:{...error.samePassword, status:true}}
    }
     setAreSamePassword(false)
    return error = {...error, samePassword:{...error.samePassword, status:false}}
}

export function checkPassword(errMsg, password, setIsInValidPassword){
    let errors = {...errMsg}
    if(password.length > 7){
        errors = {...errors, cantCharacter:{...errors.cantCharacter, status:true}}
    }else{
        errors = {...errors, cantCharacter:{...errors.cantCharacter, status:false}}
    }

    if(hasOneCapital(password)){
        errors = {...errors, uppercase:{...errors.uppercase, status:true}}
    }else{
        errors = {...errors, uppercase:{...errors.uppercase, status:false}}
    }

    if(hasSpecialCharacter(password)){
        errors = {...errors, symbol:{...errors.symbol, status:true}}
    }else{
        errors = {...errors, symbol:{...errors.symbol, status:false}}
    }

    setIsInValidPassword(checkIsValidPassword(errors))
    return errors
}