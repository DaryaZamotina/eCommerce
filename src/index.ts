import AppContainer from './components/AppContainer/appContainer';
import PageContainer from './components/PageContainer/pageContainer';
import HeaderView from './components/Header/headerView';
import FooterView from './components/Footer/footerView';

// const { body } = document;
// const appContainer = new AppContainer();
// const pageContainer = new PageContainer();
// const header = new HeaderView();
// const footer = new FooterView();

// appContainer
//   .getAppContainer()
//   .append(
//     header.getHeaderElement(),
//     pageContainer.getPageContainer(),
//     footer.getFooterElement(),
//   );
// body.append(appContainer.getAppContainer());

// то, что было в ветке release/login-registration-main перед слиянием
import RegistrationForm from './pages/Registration/registrationForm';
import LoginForm from './pages/LoginPage/loginForm';
import { sendLoginPasswordToLocalStorage } from './pages/LoginPage/inputsLoginPassword';
import { moveToRegistration } from './pages/LoginPage/buttonsToRegToHome';
import { moveToMainPage } from './pages/LoginPage/buttonsToRegToHome';
import { directMoveToMainPage } from './pages/LoginPage/buttonsToRegToHome';


// if (localStorage.getItem("isLogined") === null) {
//   const registrationFormDiv = new RegistrationForm();
//   registrationFormDiv.createRegistrationForm();
// } 

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