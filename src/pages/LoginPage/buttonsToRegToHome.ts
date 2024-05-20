import RegistrationForm from '../../pages/Registration/registrationForm';
import '../../../public/assets/css/body.css';
import { receiveAccessToken } from './loginGetToken';
import LoginForm from './loginForm';
import { clearPageContainer } from '../..';
import { sendLoginPasswordToLocalStorage } from './inputsLoginPassword';
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
   
  });

}

export function moveToLogin() {
  const linkToLoginForm = document.getElementById('registrationForm__link');

  linkToLoginForm.addEventListener('click', function (e) {
    e.preventDefault();
    history.pushState({ page: '/#signin' }, titlesPages.loginPage, '#signin');
    document.title = titlesPages.loginPage;
    clearPageContainer();

    if (
      !localStorage.getItem('access_token_for_user') ||
      localStorage.getItem('access_token_for_user') == 'undefined'
    ) {
      const loginFormDiv = new LoginForm('pageContainer', 'log');
      loginFormDiv.createLoginForm();
      sendLoginPasswordToLocalStorage();
      moveToRegistration();
      moveToMainPage();
    }
  });
}

export function moveToMainPage() {
  
}

export function directMoveToMainPage() {
  clearPageContainer();
}
