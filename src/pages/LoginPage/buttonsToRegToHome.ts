import RegistrationForm from '../../pages/Registration/registrationForm';
import '../../../public/assets/css/body.css';
import { receiveAccessToken } from './loginGetToken';

export function moveToRegistration() {
  const buttonRegistration = document.getElementById('buttonRegistration');

  buttonRegistration.addEventListener('click', function () {
    const loginFormDiv = document.getElementById('loginForm');
    loginFormDiv.remove();

    const buttonsWrapper = document.getElementById('buttonsWrapper');
    buttonsWrapper.remove();

    const registrationFormDiv = new RegistrationForm('body');
    registrationFormDiv.createRegistrationForm();
    receiveAccessToken();
  });
}

export function moveToMainPage() {
  const buttonToMainPage = document.getElementById('buttonToMainPage');

  buttonToMainPage.addEventListener('click', function () {
    directMoveToMainPage();
  });
}

export function directMoveToMainPage() {
  const body = document.getElementById('body');
  body.innerHTML = '';
  body.textContent = 'MAIN PAGE';
}
