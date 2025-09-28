const baseUrl = "http://localhost:8585";


export const Url = {
    //Auth
    signUp: baseUrl + "/signup",
    logIn: baseUrl + "/login",
    logOut: baseUrl + "logout",

    //User
    me:baseUrl + "/users_me",

    //Formulaire
    form: baseUrl + "/forms",
    
    //Excel
    download:baseUrl+"/forms"
}