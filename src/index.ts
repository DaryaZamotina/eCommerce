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
} from './pages/LoginPage/buttonsToRegToHome';
import HomePage from './pages/Home/homePage';
import CatalogPage from './pages/Catalog/catalogPage';
import CartPage from './pages/Cart/cartPage';
import UserProfilePage from './pages/UserProfile/userProfilePage';
import AboutUsPage from './pages/AboutUs/aboutUsPage';
import NotFoundPage from './pages/NotFoundPage/notFoundSection';
import titlesPages from './Helpers/documentTitle';
import { receiveAccessToken } from './pages/LoginPage/loginGetToken';
import { receiveAnonymusAccessToken } from './pages/Home/anonymusSessionToken';
import { getUserInfoFromEcomm } from './pages/UserProfile/getUserDataFromEcomm';

import TagCreator from './module/tagCreator';
import '../public/assets/css/shoppingCart.css';
import createShoppingCartPage from './pages/ShoppingCart/createShoppingCartPage';

const { body } = document;
const appContainer = new AppContainer();
export const pageContainer = new PageContainer();
export const header = new HeaderView();
const footer = new FooterView();
export const homePage = new HomePage();
export const catalogPage = new CatalogPage();
export const cartPage = new CartPage();
export const userProfilePage = new UserProfilePage();
const aboutUsPage = new AboutUsPage();
export const notFoundPage = new NotFoundPage();

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
  return currentHash;
}
currentHash = getHash();

const urlOrigin = window.location.origin;

export function setRoutingPage() {
  switch (currentHash) {
    case '':
      document.title = titlesPages.homePage;
      clearPageContainer();

      pageContainer.getPageContainer().append(homePage.getHomePage());
      const video = document.querySelector('video');
      console.log(video);
      if (video) {
        video.play();
      }
      break;

    case 'catalog':
      document.title = titlesPages.catalogPage;
      clearPageContainer();

      pageContainer.getPageContainer().append(catalogPage.getCatalogPage());
      catalogPage.sortListener();

      break;

    case 'signup':
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
        window.location.replace(`${urlOrigin}/#`);
      }
      break;

    case 'signin':
      document.title = titlesPages.loginPage;

      if (
        !localStorage.getItem('access_token_for_user') &&
        !localStorage.getItem('userLogin') &&
        !localStorage.getItem('newUser')
      ) {
        clearPageContainer();
        const loginFormDiv = new LoginForm('pageContainer', 'log');
        loginFormDiv.createLoginForm();
        sendLoginPasswordToLocalStorage();
        moveToRegistration();
        moveToMainPage();
      } else {
        window.location.replace(`${urlOrigin}/#`);
      }
      break;

    case 'cart':
      document.title = titlesPages.cartPage;
      // clearPageContainer();

      // pageContainer.getPageContainer().append(cartPage.getCartPage());
      createShoppingCartPage();
      break;
    case 'aboutus':
    case 'aboutUs':
      document.title = titlesPages.aboutUsPage;
      clearPageContainer();

      pageContainer.getPageContainer().append(aboutUsPage.getAboutUsPage());

      break;
    case 'userProfile':
    case 'userprofile':
    case 'profile':
      if (
        !localStorage.getItem('access_token_for_user') &&
        !localStorage.getItem('newUser')
      ) {
        window.location.replace(`${urlOrigin}/#signin`);
      } else {
        if (
          localStorage.getItem('access_token_for_user') &&
          localStorage.getItem('access_token_for_user') !== 'undefined'
        ) {
          getUserInfoFromEcomm(localStorage.getItem('access_token_for_user'));
        } else if (
          localStorage.getItem('access_token_auth') &&
          localStorage.getItem('access_token_auth') !== 'undefined'
        ) {
          getUserInfoFromEcomm(localStorage.getItem('access_token_auth'));
        }
        document.title = titlesPages.userProfilePage;
        clearPageContainer();
        pageContainer
          .getPageContainer()
          .append(userProfilePage.getUserProfilePage());
      }

      break;

    default:
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

// window.addEventListener('popstate', () => {
//   currentHash = getHash();
//   setRoutingPage();
// });

window.addEventListener('DOMContentLoaded', () => {
  currentHash = getHash();
  setRoutingPage();
});

if (!localStorage.getItem('anonym_token_auth')) {
  receiveAnonymusAccessToken();
}

// TODO:
// Пока что корзина здесь, пока не настроим роутинг
// ---

// ---
