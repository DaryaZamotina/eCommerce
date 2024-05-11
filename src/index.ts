import RegistrationForm from "./pages/Registration/registrationForm";
import {testAPIclient} from "./pages/LoginPage/loginForm"
import {accessTokenForAuth} from "./pages/LoginPage/loginAuthentification"
import {userEmail} from "./pages/LoginPage/loginForm"
import {userPassword} from "./pages/LoginPage/loginForm"
import LoginForm from "./pages/LoginPage/loginFormButtons";

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
  loginFormDiv.createRegistrationForm();
} 


const keyOfAPIClient = testAPIclient.getKeyOfClient();

export function getAccessToken() {
  const tokenAuthorization = localStorage.getItem("token");
  const jsonToken = JSON.parse(tokenAuthorization);
  const accessToken = jsonToken.access_token; 
  return accessToken;
}

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

console.log("keyOfAPIClient = " + keyOfAPIClient);
console.log("accessToken = " + accessTokenForAuth );
console.log("userEmail = " + userEmail );
console.log("userPassword = " + userPassword );
