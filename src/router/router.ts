import LoginForm from '../pages/LoginPage/loginForm';
import { sendLoginPasswordToLocalStorage } from '../pages/LoginPage/inputsLoginPassword';
import {
  moveToRegistration,
  moveToMainPage,
} from '../pages/LoginPage/buttonsToRegToHome';
import RegistrationForm from '../pages/Registration/registrationForm';
import { receiveAccessToken } from '../pages/LoginPage/loginGetToken';
import { clearPageContainer, pageContainer, homePage, notFoundPage } from '..';
import titlesPages from '../Helpers/documentTitle';

// const router = new Router({
//     '/signup': 'Sign Up | Joy.M Home Furniture',
//     '/': 'Joy.M Home Furniture',
//     '/signin': 'Sign In | Joy.M Home Furniture'
//   });

export class Router {
  // private routes: {};

  // constructor(routes: {}) {
  //   this.routes = routes;
  // }
  constructor() {}

  init() {
    window.addEventListener('popstate', (e) => {
      this.route(window.location.pathname);
    });
    window.addEventListener;
    this.route(window.location.pathname);
  }

  // onNavigate(path) {
  //   window.history.pushState(null, null, path);
  //   this.route(path);
  // }

  route(path: string) {
    switch (path) {
      case '/':
        history.pushState({ page: 'home' }, titlesPages.homePage, '/');
        document.title = titlesPages.homePage;
        clearPageContainer();

        pageContainer.getPageContainer().append(homePage.getHomePage());
        break;

      case '/signup':
        history.pushState(
          { page: 'signup' },
          titlesPages.registrationPage,
          '/signup',
        );
        document.title = titlesPages.registrationPage;
        clearPageContainer();

        const registrationFormDiv = new RegistrationForm(
          'pageContainer',
          'reg',
        );
        registrationFormDiv.createRegistrationForm();
        receiveAccessToken();
        break;

      case '/signin':
        history.pushState({ page: 'signin' }, titlesPages.loginPage, '/signin');
        document.title = titlesPages.loginPage;
        clearPageContainer();

        if (!localStorage.getItem('access_token_for_user')) {
          const loginFormDiv = new LoginForm('pageContainer', 'log');
          loginFormDiv.createLoginForm();
          sendLoginPasswordToLocalStorage();
          moveToRegistration();
          moveToMainPage();
        }
        break;

      default:
        clearPageContainer();
        pageContainer.getPageContainer().append(notFoundPage.getNotFoundPage());
    }
    // history.pushState(null, '/', path);
  }
}
