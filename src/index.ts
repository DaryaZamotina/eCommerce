import AppContainer from './components/AppContainer/appContainer';
import PageContainer from './components/PageContainer/pageContainer';
import HeaderView from './components/Header/headerView';
import FooterView from './components/Footer/footerView';
import RegistrationForm from './pages/Registration/registrationForm';
import LoginForm from './pages/LoginPage/loginForm';
import { sendLoginPasswordToLocalStorage } from './pages/LoginPage/inputsLoginPassword';
import { moveToRegistration } from './pages/LoginPage/buttonsToRegToHome';
import { moveToMainPage } from './pages/LoginPage/buttonsToRegToHome';
import { directMoveToMainPage } from './pages/LoginPage/buttonsToRegToHome';
import HomePage from './pages/Home/homePage';
import NotFoundPage from './pages/NotFoundPage/notFoundSection';
import { Router } from './router/router';

const { body } = document;
const appContainer = new AppContainer();
export const pageContainer = new PageContainer();
export const homePage = new HomePage();
export const notFoundPage = new NotFoundPage();
const header = new HeaderView();
const footer = new FooterView();
// const router = new Router({'/signup': 'Sign Up | Joy.M Home Furniture',
//     '/': 'Joy.M Home Furniture',
//     '/signin': 'Sign In | Joy.M Home Furniture'});
const router = new Router();

appContainer
  .getAppContainer()
  .append(
    header.getHeaderElement(),
    pageContainer.getPageContainer(),
    footer.getFooterElement(),
  );

pageContainer.getPageContainer().append(homePage.getHomePage());

body.append(appContainer.getAppContainer());

export function clearPageContainer() {
  pageContainer.getPageContainer().innerHTML = '';
}

router.init();
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

if (
  localStorage.getItem('access_token_for_user') &&
  localStorage.getItem('access_token_for_user') !== 'undefined'
) {
  directMoveToMainPage();
}
