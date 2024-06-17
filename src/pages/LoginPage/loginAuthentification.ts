import { projectKey } from './loginGetToken';
import { testAPIclient } from './loginGetToken';
import { directMoveToMainPage } from '../../pages/LoginPage/buttonsToRegToHome';
import { receiveAccessToken } from '../../pages/LoginPage/loginGetToken';
import '../../../public/assets/css/body.css';
import HomePage from '../../pages/Home/homePage';
import { clearPageContainer } from '../..';
import { setHistoryPushStateToHome } from '../../components/Navbar/navbar';
import { newClientForProducts } from '../Home/anonymusSessionToken';
import titlesPages from '../../Helpers/documentTitle';
import PageContainer from '../../components/PageContainer/pageContainer';
import { setRoutingPage } from '../..';
import { createModalWindow } from '../../components/ModalWindow/modalWindow';
import { header } from '../..';
import { getUserInfoFromEcomm } from '../UserProfile/getUserDataFromEcomm';

const linkForChecking: string =
  'https://auth.us-east-2.aws.commercetools.com/oauth/jffecommerce/customers/token';

export function sendDataToEComm() {
  const emailLogin: string = localStorage.getItem('email');
  const passwordLogin: string = localStorage.getItem('password');

  let body = new URLSearchParams({
    grant_type: 'password',
    username: `${emailLogin}`,
    password: `${passwordLogin}`,
  });

  if (localStorage.getItem('newCart')) {
    body = new URLSearchParams({
      grant_type: 'password',
      username: `${emailLogin}`,
      password: `${passwordLogin}`,
      anonymousCartSignInMode: 'MergeWithExistingCustomerCart',
    });
  }

  async function checkPasswordFlowForUser(url: string) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${newClientForProducts.getKeyOfClient()}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
      /*     body: new URLSearchParams({
        grant_type: 'password',
        username: `${emailLogin}`,
        password: `${passwordLogin}`,
        //scope: `manage_customers:${projectKey}`,
      }), */
    });
    const resp = await response.json();
    return JSON.stringify(resp);
  }

  checkPasswordFlowForUser(linkForChecking)
    .then((info) => {
      localStorage.setItem('userLogin', info);

      const infoJSON = JSON.parse(info);
      localStorage.setItem('access_token_for_user', infoJSON.access_token);
      localStorage.setItem('refresh_token_for_user', infoJSON.refresh_token);

      getUserInfoFromEcomm(infoJSON.access_token);

      if (infoJSON.statusCode == 400) {
        const error: string = infoJSON.message;
        console.log('error = ' + error);
        const messageAboutError: HTMLElement =
          document.getElementById('messageAboutError');
        messageAboutError.textContent =
          'Sorry, try again with the right mail and/or password or go to Registration';
        localStorage.clear();
      }

      if (
        localStorage.getItem('access_token_for_user') &&
        localStorage.getItem('access_token_for_user') !== 'undefined'
      ) {
        header.getNavbar().addOrRemoveLinks();
        // const loginFormDiv = document.getElementById('loginForm');
        // loginFormDiv.remove();
        // createModalWindow('You are successfully authenticated!');
        // const modalWindow = document.getElementById('modalWindow');
        // setTimeout(() => {
        //   modalWindow.remove();
        // }, 3000);
        // setTimeout(() => {
        //   modalWindow.remove();
        // }, 3000);
      }
      setRoutingPage();
      return info;
    })
    .catch((err) => console.log(err));
}
