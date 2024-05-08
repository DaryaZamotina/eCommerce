import RegistrationForm from "./pages/Registration/registrationForm";
import {testAPIclient} from "./pages/LoginPage/loginForm"

if (localStorage.getItem("isLogined") === null) {
  const registrationFormDiv = new RegistrationForm();
  registrationFormDiv.createRegistrationForm();
}

const keyOfAPICluent = testAPIclient.getKeyOfClient();
const accessToken = testAPIclient.getToken();

console.log("keyOfAPICluent = " + keyOfAPICluent);

console.log("accessToken = " + accessToken);