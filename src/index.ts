import RegistrationForm from "./pages/Registration/registrationForm";
import {testAPIclient} from "./pages/LoginPage/loginForm"

if (localStorage.getItem("isLogined") === null) {
  const registrationFormDiv = new RegistrationForm();
  registrationFormDiv.createRegistrationForm();
}

const keyOfAPICluent = testAPIclient.getKeyOfClient();

export function getAccessToken() {
  const tokenAuthorization = localStorage.getItem("token");
  const jsonToken = JSON.parse(tokenAuthorization);
  const accessToken = jsonToken.access_token; 
  return accessToken;
}

console.log("keyOfAPICluent = " + keyOfAPICluent);
console.log("accessToken = " + getAccessToken() );
