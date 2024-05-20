import AppContainer from './components/AppContainer/appContainer';
import PageContainer from './components/PageContainer/pageContainer';
import HeaderView from './components/Header/headerView';
import FooterView from './components/Footer/footerView';
import RegistrationForm from './pages/Registration/registrationForm';
import LoginForm from './pages/LoginPage/loginForm';
import { sendLoginPasswordToLocalStorage } from './pages/LoginPage/inputsLoginPassword';
import {
  moveToRegistration,
  moveToMainPage,
  directMoveToMainPage,
} from './pages/LoginPage/buttonsToRegToHome';
import HomePage from './pages/Home/homePage';
import NotFoundPage from './pages/NotFoundPage/notFoundSection';
import titlesPages from './Helpers/documentTitle';
import { receiveAccessToken } from './pages/LoginPage/loginGetToken';
import { setHistoryPushStateToHome } from './components/Navbar/navbar';

const { body } = document;
const appContainer = new AppContainer();
export const pageContainer = new PageContainer();
export const homePage = new HomePage();
export const notFoundPage = new NotFoundPage();
const header = new HeaderView();
const footer = new FooterView();
let currentHash = '';

appContainer
  .getAppContainer()
  .append(
    header.getHeaderElement(),
    pageContainer.getPageContainer(),
    footer.getFooterElement(),
  );

body.append(appContainer.getAppContainer());

export function clearPageContainer() {
  pageContainer.getPageContainer().innerHTML = '';
}

function getHash() {
  const currentHash = window.location.hash.slice(1);
  console.log(currentHash);
  return currentHash;
}
currentHash = getHash();

function setRoutingPage() {
  switch (currentHash) {
    case '':
      history.pushState({ page: '#' }, titlesPages.homePage, '#');
      document.title = titlesPages.homePage;
      clearPageContainer();

      pageContainer.getPageContainer().append(homePage.getHomePage());
      break;

    case 'signup':
      history.pushState(
        { page: '#signup' },
        titlesPages.registrationPage,
        '#signup',
      );
      document.title = titlesPages.registrationPage;
      clearPageContainer();

      const registrationFormDiv = new RegistrationForm('pageContainer', 'reg');
      registrationFormDiv.createRegistrationForm();
      receiveAccessToken();

      if (
        (localStorage.getItem('access_token_for_user') &&
          localStorage.getItem('access_token_for_user') !== 'undefined') ||
        localStorage.getItem('newUser')
      ) {
        setHistoryPushStateToHome();
      }
      break;

    case 'signin':
      history.pushState({ page: '#signin' }, titlesPages.loginPage, '#signin');
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
      if (
        (localStorage.getItem('access_token_for_user') &&
          localStorage.getItem('access_token_for_user') !== 'undefined') ||
        localStorage.getItem('newUser')
      ) {
        setHistoryPushStateToHome();
      }
      break;

    default:
      history.pushState(
        { page: 'notFound' },
        titlesPages.notFoundPage,
        '#notFound',
      );
      document.title = titlesPages.notFoundPage;
      clearPageContainer();
      pageContainer.getPageContainer().append(notFoundPage.getNotFoundPage());
  }
}
setRoutingPage();

window.addEventListener('hashchange', () => {
  currentHash = getHash();
  setRoutingPage();
});

window.addEventListener('popstate', () => {
  currentHash = getHash();
  setRoutingPage();
});

/*
if (localStorage.getItem('isLogined') === null) {
  const registrationFormDiv = new RegistrationForm('pageContainer', 'form');
  registrationFormDiv.createRegistrationForm();
} 

if (localStorage.getItem('isLogined') === null) {
  const loginFormDiv = new LoginForm('pageContainer', 'log');
  loginFormDiv.createLoginForm();
  sendLoginPasswordToLocalStorage();
  moveToRegistration();
  moveToMainPage();
} */
/*
if (
  localStorage.getItem('access_token_for_user') &&
  localStorage.getItem('access_token_for_user') !== 'undefined'
) {
  directMoveToMainPage();
} */
