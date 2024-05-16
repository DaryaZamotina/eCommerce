import { testAPIclient } from './loginGetToken';
import { sendDataToEComm } from './loginAuthentification';
import '../../../public/assets/css/body.css';

const keyOfAPIClient = testAPIclient.getKeyOfClient();
console.log('keyOfAPIClient = ' + keyOfAPIClient);

export function sendLoginPasswordToLocalStorage() {
  const messageAboutError: HTMLElement =
    document.getElementById('messageAboutError');

  const inputLoginEmail = <HTMLInputElement>(
    document.getElementById('loginForm__input_email')
  );

  inputLoginEmail.addEventListener('change', function () {
    messageAboutError.textContent = '';
    localStorage.setItem('email', inputLoginEmail.value);
  });

  const inputLoginPassword = <HTMLInputElement>(
    document.getElementById('loginForm__input_password')
  );

  inputLoginPassword.addEventListener('change', function () {
    messageAboutError.textContent = '';
    localStorage.setItem('password', inputLoginPassword.value);
  });

  const buttonLogin = <HTMLButtonElement>document.querySelector('.buttonLogin');

  buttonLogin.addEventListener('click', function () {
    event.preventDefault();
    if (localStorage.getItem('email') && localStorage.getItem('password')) {
      console.log('email = ' + localStorage.getItem('email'));
      console.log('password = ' + localStorage.getItem('password'));
      sendDataToEComm();
    }
  });
}
