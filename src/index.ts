import RegistrationForm from "./pages/Registration/registrationForm";
import LoginForm from "./pages/LoginPage/loginFormButtons";
import { sendLoginPasswordToLocalStorage } from "./pages/LoginPage/inputsLoginPassword";

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
} 