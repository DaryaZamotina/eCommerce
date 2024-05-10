import RegistrationForm from "./pages/Registration/registrationForm";
import {sendNewUserInfo} from "./pages/Registration/sendDataToEcomm"
import {accessTokenForAuth} from "./pages/Registration/sendDataToEcomm"

if (localStorage.getItem("isLogined") === null) {
  const registrationFormDiv = new RegistrationForm();
  registrationFormDiv.createRegistrationForm();
}

const sendDataOfnewUser = sendNewUserInfo;
//console.log("sendDataOfnewUser = " + sendDataOfnewUser);

export function getAccessToken() {
  const tokenAuthorization = localStorage.getItem("token");
  const jsonToken = JSON.parse(tokenAuthorization);
  const accessToken = jsonToken.access_token; 
  return accessToken;
}

console.log("accessToken = " + accessTokenForAuth );