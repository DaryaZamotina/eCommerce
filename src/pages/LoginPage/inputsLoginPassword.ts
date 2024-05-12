import {testAPIclient} from "./loginGetToken"
import { sendDataToEComm } from "./loginAuthentification";
//import { directMoveToMainPage } from "../../pages/LoginPage/buttonsToRegToHome";

const keyOfAPIClient = testAPIclient.getKeyOfClient();
console.log("keyOfAPIClient = " + keyOfAPIClient);

export function sendLoginPasswordToLocalStorage() {
    const messageAboutError: HTMLElement = document.getElementById("messageAboutError");

    const inputLoginEmail = <HTMLInputElement>document.getElementById("loginForm__input_email");

    inputLoginEmail.addEventListener("change", function() { 
     messageAboutError.textContent = "";
     localStorage.setItem('email', inputLoginEmail.value);
    });

   const inputLoginPassword = <HTMLInputElement>document.getElementById("loginForm__input_password");

    inputLoginPassword.addEventListener("change", function() { 
     messageAboutError.textContent = "";
     localStorage.setItem('password', inputLoginPassword.value);
    }); 

    const buttonLogin = document.getElementById("buttonLogin");

    buttonLogin.addEventListener("click", function() {
        console.log("put button");

        if (localStorage.getItem("email") && localStorage.getItem("password")) {
            console.log(localStorage.getItem("email"));
            console.log(localStorage.getItem("password"));
            sendDataToEComm();

          /*  if (localStorage.getItem("access_token_for_user") && localStorage.getItem("access_token_for_user") !== 'undefined') {
                const loginFormDiv = document.getElementById("loginForm");
                loginFormDiv.remove();
                directMoveToMainPage();
            } */
        }
    });
}
