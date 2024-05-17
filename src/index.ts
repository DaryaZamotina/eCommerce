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
body.append(appContainer.getAppContainer());

pageContainer.getPageContainer().append(homePage.getHomePage());
// если вписать nonFoundPage сюда, то блок отобразится вслед за homePage, но если вписать эту строку в конце, то nonFoundPage НЕ отобразится после формы регистрации
pageContainer.getPageContainer().append(notFoundPage.getNotFoundPage());

if (localStorage.getItem("isLogined") === null) {
  const registrationFormDiv = new RegistrationForm('pageContainer', 'form');
  registrationFormDiv.createRegistrationForm();
} 

if (localStorage.getItem('isLogined') === null) {
  const loginFormDiv = new LoginForm();
  loginFormDiv.createLoginForm();
  sendLoginPasswordToLocalStorage();
  moveToRegistration();
  moveToMainPage();
}

if (
  localStorage.getItem('access_token_for_user') &&
  localStorage.getItem('access_token_for_user') !== 'undefined'
) {
  directMoveToMainPage();
}

// если вписать nonFoundPage сюда в конце файла, то nonFoundPage НЕ отобразится после формы регистрации. Почему так?
pageContainer.getPageContainer().append(notFoundPage.getNotFoundPage());