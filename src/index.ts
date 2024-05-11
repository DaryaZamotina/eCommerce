import RegistrationForm from "./pages/Registration/registrationForm";
import {testAPIclient} from "./pages/LoginPage/loginForm"
import {accessTokenForAuth} from "./pages/LoginPage/loginAuthentification"
//import {userEmail} from "./pages/LoginPage/loginForm"
//import {userPassword} from "./pages/LoginPage/loginForm"
import LoginForm from "./pages/LoginPage/loginFormButtons";
import { receiveAccessToken } from "./pages/LoginPage/loginForm";
import { sendDataToEComm } from "./pages/LoginPage/loginAuthentification";

/*
if (localStorage.getItem("isLogined") === null) {
  const registrationFormDiv = new RegistrationForm();
  registrationFormDiv.createRegistrationForm();
} 

if (localStorage.getItem("token")) {
  const loginFormDiv = new LoginForm();
  loginFormDiv.createRegistrationForm();
}
*/
if (localStorage.getItem("isLogined") === null) {
  const loginFormDiv = new LoginForm();
  loginFormDiv.createLoginForm();
} 

const keyOfAPIClient = testAPIclient.getKeyOfClient();
const receiveAccessTokenFromEcomm = receiveAccessToken();

export function getAccessToken() {
  const tokenAuthorization = localStorage.getItem("token");
  const jsonToken = JSON.parse(tokenAuthorization);
  const accessToken = jsonToken.access_token; 
  return accessToken;
}
/*
export function getEmaillUser() {
  const userAuthorization = localStorage.getItem("user");
  const jsonUser = JSON.parse(userAuthorization);
  const email = jsonUser.email; 
  return email;
}
export function getPasswordlUser() {
  const userAuthorization = localStorage.getItem("user");
  const jsonUser = JSON.parse(userAuthorization);
  const password = jsonUser.password; 
  return password;
}
*/

console.log("keyOfAPIClient = " + keyOfAPIClient);
console.log("accessToken = " + accessTokenForAuth );
// console.log("userEmail = " + userEmail );
// console.log("userPassword = " + userPassword );

const inputLoginEmail = <HTMLInputElement>document.getElementById("loginForm__input_email");

inputLoginEmail.addEventListener("change", function() { 
    console.log("aaa");
    localStorage.setItem('email', inputLoginEmail.value);
});

const inputLoginPassword = <HTMLInputElement>document.getElementById("loginForm__input_password");

inputLoginPassword.addEventListener("change", function() { 
    console.log("ccc");
    localStorage.setItem('password', inputLoginPassword.value);
});

const buttonLogin = document.getElementById("buttonLogin");
if (localStorage.getItem("email") && localStorage.getItem("password")) {
  console.log(localStorage.getItem("email"));
  console.log(localStorage.getItem("password"));
  buttonLogin.addEventListener("click", sendDataToEComm);
}
