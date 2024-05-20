import RegistrationForm from '../../pages/Registration/registrationForm';
import '../../../public/assets/css/body.css';
import { receiveAccessToken } from './loginGetToken';
import LoginForm from './loginForm';
import { clearPageContainer } from '../..';
import { sendLoginPasswordToLocalStorage } from './inputsLoginPassword';
import { sendDataToEComm } from './loginAuthentification';
import titlesPages from '../../Helpers/documentTitle';

export function moveToRegistration() {
  const linkToRegForm = document.getElementById('loginForm__link');

  linkToRegForm.addEventListener('click', function (e) {

    e.preventDefault();
    history.pushState(
      { page: '/#signup' },
      titlesPages.registrationPage,
      '#signup',
    );
    document.title = titlesPages.registrationPage;
    clearPageContainer();

    const registrationFormDiv = new RegistrationForm('pageContainer', 'reg');
    registrationFormDiv.createRegistrationForm();
    receiveAccessToken();
    /*const loginFormDiv = document.getElementById('loginForm');
    loginFormDiv.remove(); 

    clearPageContainer();

    const registrationFormDiv = new RegistrationForm('pageContainer', 'reg');
    registrationFormDiv.createRegistrationForm();
    receiveAccessToken(); */
  });

  /*const buttonRegistration = document.getElementById('buttonRegistration');

  buttonRegistration.addEventListener('click', function () {
    const loginFormDiv = document.getElementById('loginForm');
    loginFormDiv.remove();

    const registrationFormDiv = new RegistrationForm('pageContainer', 'reg');
    registrationFormDiv.createRegistrationForm();
    receiveAccessToken();
  }); */
}

export function moveToLogin() {
  const linkToLoginForm = document.getElementById('registrationForm__link');

  linkToLoginForm.addEventListener('click', function (e) {

    e.preventDefault();
    history.pushState({ page: '/#signin' }, titlesPages.loginPage, '#signin');
    document.title = titlesPages.loginPage;
    clearPageContainer();

    if (!localStorage.getItem('access_token_for_user') || localStorage.getItem('access_token_for_user') == 'undefined') {
      const loginFormDiv = new LoginForm('pageContainer', 'log');
      loginFormDiv.createLoginForm();
      sendLoginPasswordToLocalStorage();
      moveToRegistration();
      moveToMainPage();
    }

    /*const registrationFormDiv = document.getElementById('registrationForm');
    registrationFormDiv.remove();  

    const loginFormDiv = new LoginForm('pageContainer', 'log');
    loginFormDiv.createLoginForm();*/
   // sendDataToEComm();
  });
}

export function moveToMainPage() {
  /*const buttonToMainPage = document.getElementById('buttonToMainPage');

  buttonToMainPage.addEventListener('click', function () {
    directMoveToMainPage();
  });*/
}

export function directMoveToMainPage() {
  clearPageContainer();
}