import RegistrationForm from "./pages/Registration/registrationForm";
import {testAPIclient} from "./pages/LoginPage/loginForm"

if (localStorage.getItem("isLogined") === null) {
  const registrationFormDiv = new RegistrationForm();
  registrationFormDiv.createRegistrationForm();
}

const keyOfAPICluent = testAPIclient.getKeyOfClient();

const tokenAuthorization = localStorage.getItem("token");
const jsonToken = JSON.parse(tokenAuthorization);
const accessToken = jsonToken.access_token;

console.log("keyOfAPICluent = " + keyOfAPICluent);

localStorage.clear();
console.log("accessToken 2 = " + accessToken);
