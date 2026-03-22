const baseUrl = "http://localhost:8585";


export const Url = {
    //Auth
    signUp: baseUrl + "/signup",
    /** GET …/:token — décode l’invitation et renvoie l’email (à implémenter côté API). */
    signUpInvitationVerify: baseUrl + "/signup/invitation",
    logIn: baseUrl + "/login",
    logOut: baseUrl + "/logout",

    //User
    me:baseUrl + "/users_me",
    inviteUser: baseUrl + "/users",
    users: baseUrl + "/users",

    //Formulaire
    form: baseUrl + "/forms",
    
    //Excel
    download:baseUrl+"/forms"
}