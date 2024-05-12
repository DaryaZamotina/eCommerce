import {testAPIclient} from "./loginGetToken"
import { sendDataToEComm } from "./loginAuthentification";
import RegistrationForm from "../../pages/Registration/registrationForm";

const keyOfAPIClient = testAPIclient.getKeyOfClient();
console.log("keyOfAPIClient = " + keyOfAPIClient);

export function sendLoginPasswordToLocalStorage() {
    const inputLoginEmail = <HTMLInputElement>document.getElementById("loginForm__input_email");

    inputLoginEmail.addEventListener("change", function() { 
     localStorage.setItem('email', inputLoginEmail.value);
    });

   const inputLoginPassword = <HTMLInputElement>document.getElementById("loginForm__input_password");

    inputLoginPassword.addEventListener("change", function() { 
     localStorage.setItem('password', inputLoginPassword.value);
    }); 

    const buttonLogin = document.getElementById("buttonLogin");

    buttonLogin.addEventListener("click", function() {
        console.log("put button");
        
        if (localStorage.getItem("email") && localStorage.getItem("password")) {
            console.log(localStorage.getItem("email"));
            console.log(localStorage.getItem("password"));
            sendDataToEComm();
        }
    });
}
export function moveToRegistration() {
    const buttonRegistration = document.getElementById("buttonRegistration");

    buttonRegistration.addEventListener("click", function() {
        const loginFormDiv = document.getElementById("loginForm");
        loginFormDiv.remove();
        buttonRegistration.remove();
        const buttonLogin = document.getElementById("buttonLogin");
        buttonLogin.remove();
        const registrationFormDiv = new RegistrationForm();
        registrationFormDiv.createRegistrationForm();
});
}
