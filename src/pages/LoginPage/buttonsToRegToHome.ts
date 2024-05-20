import RegistrationForm from '../../pages/Registration/registrationForm';
import '../../../public/assets/css/body.css';
import { receiveAccessToken } from './loginGetToken';
import LoginForm from './loginForm';

export function moveToRegistration() {
  const linkToRegForm = document.getElementById('loginForm__link');

  linkToRegForm.addEventListener('click', function () {
    const loginFormDiv = document.getElementById('loginForm');
    loginFormDiv.remove();

    const registrationFormDiv = new RegistrationForm('pageContainer', 'reg');
    registrationFormDiv.createRegistrationForm();
    receiveAccessToken();
  });

  const buttonRegistration = document.getElementById('buttonRegistration');

  buttonRegistration.addEventListener('click', function () {
    const loginFormDiv = document.getElementById('loginForm');
    loginFormDiv.remove();

    const registrationFormDiv = new RegistrationForm('pageContainer', 'reg');
    registrationFormDiv.createRegistrationForm();
    receiveAccessToken();
  });
}

export function moveToLogin() {
  const linkToLoginForm = document.getElementById('registrationForm__link');

  linkToLoginForm.addEventListener('click', function () {
    const registrationFormDiv = document.getElementById('registrationForm');
    registrationFormDiv.remove();

    const loginFormDiv = new LoginForm('pageContainer', 'log');
    loginFormDiv.createLoginForm();
  });
}

export function moveToMainPage() {
  const buttonToMainPage = document.getElementById('buttonToMainPage');

  buttonToMainPage.addEventListener('click', function () {
    directMoveToMainPage();
  });
}

export function directMoveToMainPage() {
  const loginFormDiv = document.getElementById('loginForm');
  loginFormDiv.remove();
}
