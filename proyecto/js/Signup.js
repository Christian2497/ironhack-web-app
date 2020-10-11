"use strict";

class Signup{
    constructor(){
        this.usernameInput = document.querySelector("#username");
        this.equipoInput = document.querySelector("#equipofavorito");
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.repeatPasswordInput = document.querySelector("#repeat-password");
        this.buttonInput = document.querySelector("#signup-button");
        this.messageWrapper = document.querySelector(".message-container")
    }

// Metodos para manejar la información que insetamos en el input 
handleEmailInput = (event) => {
    const email = event.target.value;
}

handlePasswordInput = (event) => {
    const password = event.target.value;
}

handleRepeatPasswordInput = (event) => {
    const repeatPassword = event.target.value;
}

saveData = (event) => {
//Este metodo de event previene el comportamiento por default y no permite cargar a la pagina
    event.preventDefault();

    const username = this.usernameInput.value;
    const equipo = this.equipoInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    /* function createUser(username, equipo, email, password){
        const userObj = {
            username: username,
            equipo: equipo,
            email: email,
            password: password
        }
        return userObj;
    }
    
    const newUser = createUser(username, equipo, email, password) */

    const newUser = new User(username, equipo, email, password);

    //guardar el usuario en la base de datos

    db.saveNewUser(newUser);
    

   /*  database.createNewUser( newUser ); */

   // Vaciar formulario
    this.usernameInput.value = "";
    this.equipoInput.value = "";
    this.emailInput.value = "";
    this.passwordInput.value = "";
    this.repeatPasswordInput.value = "";
}


// Metodo para cada uno de los input    
addListeners = () => {
// Vincula lo que ocurre en el input
    this.emailInput.addEventListener('input', this.handleEmailInput);

    this.passwordInput.addEventListener('input', this.handlePasswordInput);

    this.repeatPasswordInput.addEventListener('input', this.handleRepeatPasswordInput);

    this.buttonInput.addEventListener('click', this.saveData);
}






}

const signup = new Signup();

//Cuando termine de cargar, registra todos los eventos
window.addEventListener('load', signup.addListeners);
