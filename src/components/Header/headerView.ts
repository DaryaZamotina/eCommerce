import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/header.css';
import LoginForm from '../../pages/LoginPage/loginForm';
import { sendLoginPasswordToLocalStorage } from '../../pages/LoginPage/inputsLoginPassword';
import { moveToRegistration } from '../../pages/LoginPage/buttonsToRegToHome';
import { moveToMainPage } from '../../pages/LoginPage/buttonsToRegToHome';
import RegistrationForm from '../../pages/Registration/registrationForm';
import { receiveAccessToken } from '../../pages/LoginPage/loginGetToken';
import HomePage from '../../pages/Home/homePage'; 

export default class HeaderView {
  private nameOfShop: HTMLElement;

  private signInLink: HTMLElement;

  private signUpLink: HTMLElement;

  private homeLink: HTMLElement;

  private toCartLink: HTMLElement;

  private userProfileLink: HTMLElement;

  private logoutLink: HTMLElement;

  private headerWrapper: HTMLElement;

  private header: HTMLElement;

  constructor() {
    this.nameOfShop = this.createNameOfShop();
    this.homeLink = this.createHomeLink();
    this.signUpLink = this.createSignUpLink();
    this.signInLink = this.createSignInLink();
    this.toCartLink = this.createToCartLink();
    this.userProfileLink = this.createUserProfileLink();
    this.logoutLink = this.createLogoutLink();
    this.headerWrapper = this.createHeaderWrapper();
    this.header = this.createHeader();
  }

  public getHeaderElement(): HTMLElement {
    return this.header;
  }

  public getNameOfShop(): HTMLElement {
    return this.nameOfShop;
  }

  public getHomeLink(): HTMLElement {
    return this.homeLink;
  }

  public getSignUpLink(): HTMLElement {
    return this.signUpLink;
  }

  public getSignInLink(): HTMLElement {
    return this.signInLink;
  }

  public getUserProfileLink(): HTMLElement {
    return this.userProfileLink;
  }

  public getLogoutLink() {
    return this.logoutLink;
  }

  private createNameOfShop() {
    const tagCreator = new TagCreator(
      'h1',
      'header__logo',
      'headerLogo',
      '',
      'JOY.M',
    );
    this.nameOfShop = tagCreator.createAndReturn();
    return this.nameOfShop;
  }

  private createHomeLink() {
    const tagCreator = new TagCreator(
      'a',
      'homelink',
      'homeLink',
      '',
      'HOME',
    );
    this.homeLink = tagCreator.createAndReturn();

    this.homeLink.addEventListener('click', function () {
      const pageContainer = document.getElementById('pageContainer');
      pageContainer.innerHTML = "";
        const homePage = new HomePage();
        pageContainer.append(homePage.getHomePage());
    });

    return this.homeLink;
  }

  private createSignUpLink() {
    const tagCreator = new TagCreator(
      'a',
      'sign-up-link',
      'signUpLink',
      '',
      'sign up',
    );
    this.signUpLink = tagCreator.createAndReturn();

    this.signUpLink.addEventListener('click', function () {
      const pageContainer = document.getElementById('pageContainer');
      pageContainer.innerHTML = '';

      const registrationFormDiv = new RegistrationForm('pageContainer', 'reg');
      registrationFormDiv.createRegistrationForm();
      receiveAccessToken();
    });

    return this.signUpLink;
  }

  private createSignInLink() {
    const tagCreator = new TagCreator(
      'a',
      'sign-in-link',
      'signInLink',
      '',
      'sign in',
    );
    this.signInLink = tagCreator.createAndReturn();

    this.signInLink.addEventListener('click', function () {
      const pageContainer = document.getElementById('pageContainer');
      pageContainer.innerHTML = '';

      if (!localStorage.getItem('access_token_for_user')) {
        const loginFormDiv = new LoginForm('pageContainer', 'log');
        loginFormDiv.createLoginForm();
        sendLoginPasswordToLocalStorage();
        moveToRegistration();
        moveToMainPage();
      }
    });

    return this.signInLink;
  }

  private createToCartLink() {
    const tagCreator = new TagCreator(
      'a',
      'to-cart-link',
      'toCartLink',
      '',
      'to cart',
    );
    this.toCartLink = tagCreator.createAndReturn();
    return this.toCartLink;
  }

  private createUserProfileLink() {
    const tagCreator = new TagCreator(
      'a',
      'user-profile-link',
      'userProfileLink',
      '',
      'profile',
    );
    this.userProfileLink = tagCreator.createAndReturn();
    return this.userProfileLink;
  }

  private createLogoutLink() {
    const tagCreator = new TagCreator(
      'a',
      'logout-link',
      'logoutLink',
      '',
      'logout',
    );
    this.logoutLink = tagCreator.createAndReturn();
    this.logoutLink.addEventListener('click', function () {
      localStorage.clear();
    });

    return this.logoutLink;
  }

  private createHeaderWrapper() {
    const tagCreator = new TagCreator(
      'section',
      'header-wrapper',
      'headerWrapper',
    );
    this.headerWrapper = tagCreator.createAndReturn();
    this.headerWrapper.append(
      this.getNameOfShop(),
      this.getHomeLink(),
      this.getSignUpLink(),
      this.getSignInLink(),
      this.createToCartLink(),
      this.createUserProfileLink(),
      this.createLogoutLink(),
    );
    return this.headerWrapper;
  }

  private createHeader() {
    const tagCreator = new TagCreator('header', 'header', 'header');
    this.header = tagCreator.createAndReturn();
    this.header.append(this.createHeaderWrapper());
    return this.header;
  }
}
