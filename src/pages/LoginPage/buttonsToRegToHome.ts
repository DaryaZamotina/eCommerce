import RegistrationForm from '../../pages/Registration/registrationForm';
import '../../../public/assets/css/body.css';
import { receiveAccessToken } from './loginGetToken';
import LoginForm from './loginForm';
import { clearPageContainer } from '../..';
import { sendLoginPasswordToLocalStorage } from './inputsLoginPassword';
import titlesPages from '../../Helpers/documentTitle';

export function moveToRegistration() {
  const linkToRegForm = document.getElementById('loginForm__link');
  linkToRegForm.setAttribute('href', '#signup');
}

export function moveToLogin() {
  const linkToLoginForm = document.getElementById('registrationForm__link');
  linkToLoginForm.setAttribute('href', '#signin');
}

export function moveToMainPage() {}

export function directMoveToMainPage() {
  clearPageContainer();
}
