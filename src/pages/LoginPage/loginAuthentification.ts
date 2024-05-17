import { projectKey } from './loginGetToken';
import { testAPIclient } from './loginGetToken';
import { directMoveToMainPage } from '../../pages/LoginPage/buttonsToRegToHome';
import { receiveAccessToken } from '../../pages/LoginPage/loginGetToken';
import '../../../public/assets/css/body.css';

const linkForChecking: string =
  'https://auth.us-east-2.aws.commercetools.com/oauth/jffecommerce/customers/token';

export function sendDataToEComm() {
  const emailLogin: string = localStorage.getItem('email');
  const passwordLogin: string = localStorage.getItem('password');

  async function checkPasswordFlowForUser(url: string) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${testAPIclient.getKeyOfClient()}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'password',
        username: `${emailLogin}`,
        password: `${passwordLogin}`,
        scope: `manage_customers:${projectKey}`,
      }),
    });
    const resp = await response.json();
    return JSON.stringify(resp);
  }

  checkPasswordFlowForUser(linkForChecking)
    .then((info) => {
      localStorage.setItem('userLogin', info);

      const infoJSON = JSON.parse(info);
      console.log('access_token_for_user = ' + infoJSON.access_token);
      console.log('refresh_token_for_user = ' + infoJSON.refresh_token);
      localStorage.setItem('access_token_for_user', infoJSON.access_token);
      localStorage.setItem('refresh_token_for_user', infoJSON.refresh_token);

      if (infoJSON.statusCode == 400) {
        const error: string = infoJSON.message;
        console.log('error = ' + error);
        const messageAboutError: HTMLElement =
          document.getElementById('messageAboutError');
        messageAboutError.textContent =
          'Sorry, try again with the right mail and/or password or go to Registration';
      }

      if (
        localStorage.getItem('access_token_for_user') &&
        localStorage.getItem('access_token_for_user') !== 'undefined'
      ) {
        const loginFormDiv = document.getElementById('loginForm');
        loginFormDiv.remove();

        const buttonsWrapper = document.getElementById('buttonsWrapper');
        buttonsWrapper.remove();

        directMoveToMainPage();

        receiveAccessToken();
      }
      return info;
    })
    .catch((err) => console.log(err));
}