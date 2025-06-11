function saveuserdata(Email, password){
    localStorage.setItem("Email", Email)
    localStorage.setItem("password",password)

}
function getuserdata(Email, password){
    return{
        Email: localStorage.getItem("Email") || "",
        password: localStorage.getItem("password") || ""
    }
}