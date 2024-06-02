import { IObjGeneralData } from "./interfacesForObjectData";
import { editUserData } from "./editUserData";

export function getInfoFromInputs() {
    let objGenData: IObjGeneralData;

    const inputEmail = <HTMLInputElement>(document.getElementById('inputForEmail'));
  
    inputEmail.addEventListener('input', () => {
      objGenData['email'] = inputEmail.value;
      localStorage.setItem('email', inputEmail.value);
    });
  
    const buttonForChangeGenData = document.getElementById("buttonForChangeGenData");
  
    buttonForChangeGenData.addEventListener('click', function () {
      editUserData(localStorage.getItem('access_token_auth'), objGenData);
    });
}