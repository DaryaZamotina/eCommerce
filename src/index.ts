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
import CatalogPage from './pages/Catalog/catalogPage';
import CartPage from './pages/Cart/cartPage';
import UserProfilePage from './pages/UserProfile/userProfilePage';
import NotFoundPage from './pages/NotFoundPage/notFoundSection';
import titlesPages from './Helpers/documentTitle';
import { receiveAccessToken } from './pages/LoginPage/loginGetToken';
import { setHistoryPushStateToHome } from './components/Navbar/navbar';
import { receiveAnonymusAccessToken } from './pages/Home/anonymusSessionToken';
import { getProductsListInfoFromEcomm } from './components/ProductCard/getProductDataFromEcomm';
import { getUserInfoFromEcomm } from './pages/UserProfile/getUserDataFromEcomm';

const { body } = document;
const appContainer = new AppContainer();
export const pageContainer = new PageContainer();
export const homePage = new HomePage();
export const catalogPage = new CatalogPage();
export const cartPage = new CartPage();
export const userProfilePage = new UserProfilePage();
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

export function setRoutingPage() {
  switch (currentHash) {
    case '':
      history.pushState({ page: '#' }, titlesPages.homePage, '#');
      document.title = titlesPages.homePage;
      clearPageContainer();

      pageContainer.getPageContainer().append(homePage.getHomePage());
      break;

    case 'catalog':
      history.pushState(
        { page: '#catalog' },
        titlesPages.catalogPage,
        '#catalog',
      );
      document.title = titlesPages.catalogPage;
      clearPageContainer();

      pageContainer.getPageContainer().append(catalogPage.getCatalogPage());

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
        history.pushState(
          { page: '#catalog' },
          titlesPages.catalogPage,
          '#catalog',
        );
        document.title = titlesPages.catalogPage;
        clearPageContainer();

        pageContainer.getPageContainer().append(catalogPage.getCatalogPage());
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
        history.pushState(
          { page: '#catalog' },
          titlesPages.catalogPage,
          '#catalog',
        );
        document.title = titlesPages.catalogPage;
        clearPageContainer();

        pageContainer.getPageContainer().append(catalogPage.getCatalogPage());
      }
      break;

    case 'cart':
      history.pushState({ page: '#cart' }, titlesPages.cartPage, '#cart');
      document.title = titlesPages.cartPage;
      clearPageContainer();

      pageContainer.getPageContainer().append(cartPage.getCartPage());
      break;

    case 'userProfile':
    case 'userprofile':
      history.pushState(
        { page: '#userProfile' },
        titlesPages.userProfilePage,
        '#userProfile',
      );
      document.title = titlesPages.userProfilePage;
      clearPageContainer();

      pageContainer
        .getPageContainer()
        .append(userProfilePage.getUserProfilePage());

      const userProfileSection1 = document.getElementById(
        'userProfileSection1',
      );

      userProfileSection1.textContent;

      if (
        localStorage.getItem('newUser') &&
        localStorage.getItem('newUser') !== 'undefined'
      ) {
        userProfileSection1.textContent = localStorage.getItem('newUser');
      } else if (
        localStorage.getItem('userDetails') &&
        localStorage.getItem('userDetails') !== 'undefined'
      ) {
        userProfileSection1.textContent = localStorage.getItem('userDetails');
      } else {
        userProfileSection1.textContent = '';
      }
      break;

    default:
      history.pushState(
        { page: 'notFound' },
        titlesPages.notFoundPage,
        `#${currentHash}`,
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


