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

const { body } = document;
const appContainer = new AppContainer();
const pageContainer = new PageContainer();
const header = new HeaderView();
const footer = new FooterView();
const homePage = new HomePage();
const notFoundPage = new NotFoundPage();

appContainer
  .getAppContainer()
  .append(
    header.getHeaderElement(),
    pageContainer.getPageContainer(),
    footer.getFooterElement(),
  );

pageContainer.getPageContainer().append(homePage.getHomePage());

body.append(appContainer.getAppContainer());

// чтобы не искать отдельно loginForm или отдельно RegistrationForm для того, чтобы удалить их, думаю, лучше будет использовать одну такую функцию
// function clearPageContainer() {
//   pageContainer.getPageContainer().innerHTML = '';
// }

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

// так добавляется notFoundPage
// pageContainer.getPageContainer().append(notFoundPage.getNotFoundPage());
