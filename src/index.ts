import RegistrationForm from "./pages/Registration/registrationForm";
import LoginForm from "./pages/LoginPage/loginFormButtons";
import { sendLoginPasswordToLocalStorage } from "./pages/LoginPage/inputsLoginPassword";
import { moveToRegistration } from "./pages/LoginPage/buttonsToRegToHome";
import { moveToMainPage } from "./pages/LoginPage/buttonsToRegToHome";

/*
if (localStorage.getItem("isLogined") === null) {
  const registrationFormDiv = new RegistrationForm();
  registrationFormDiv.createRegistrationForm();
} 
*/

if (localStorage.getItem("isLogined") === null) {
  const loginFormDiv = new LoginForm();
  loginFormDiv.createLoginForm();
  sendLoginPasswordToLocalStorage();
  moveToRegistration();
  moveToMainPage();
} 

if (localStorage.getItem("access_token_for_user")) {
  const registrationFormDiv = new RegistrationForm();
  registrationFormDiv.createRegistrationForm();
}