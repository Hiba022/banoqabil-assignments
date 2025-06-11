function add(a, b){
    return(a+b)
}

function sub(a, b){
    return(a-b)
}

function multiply(a, b){
    return(a*b)
}

function divide(a, b){
    return(a/b)
}

function cal(a,b, operator){
    a = Number(a)
    b = Number(b)
    if(!isNaN(a) && !isNaN(b)){
    if(operator==="+"){
        return add(a, b)
    }
    else if (operator==="-"){
        return sub(a, b)
    }
    else if(operator==="*"){
        return multiply(a, b)
    }
    else if(operator==="/"){
        return divide(a, b)
    }
    else{
        return "Invalid operator"
    }
}
else{
    return "one or both are not a number. Please enter a valid number"
}
}
console.log(cal("h",4,"-"));
