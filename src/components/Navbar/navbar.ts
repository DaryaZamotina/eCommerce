import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/navbar.css';
import '../../../public/assets/css/header.css';
import LoginForm from '../../pages/LoginPage/loginForm';
import { sendLoginPasswordToLocalStorage } from '../../pages/LoginPage/inputsLoginPassword';
import { moveToRegistration } from '../../pages/LoginPage/buttonsToRegToHome';
import { moveToMainPage } from '../../pages/LoginPage/buttonsToRegToHome';
import RegistrationForm from '../../pages/Registration/registrationForm';
import { receiveAccessToken } from '../../pages/LoginPage/loginGetToken';
import {
  clearPageContainer,
  pageContainer,
  homePage,
  catalogPage,
  cartPage,
  userProfilePage,
} from '../..';
import titlesPages from '../../Helpers/documentTitle';
import { getUserInfoFromEcomm } from '../../pages/UserProfile/getUserDataFromEcomm';
import { receiveAnonymusAccessToken } from '../../pages/Home/anonymusSessionToken';
import { getProductsListInfoFromEcomm } from '../ProductCard/getProductDataFromEcomm';
import { editUserData } from '../../pages/UserProfile/editUserData';
import {
  ifAuthThenDisplayNone,
  ifAnonimThenDisplayNone,
} from '../../utils/changeSingUpLogoutButtons';

export function setHistoryPushStateToHome() {
  history.pushState({ page: '/#' }, titlesPages.homePage, '#');
  document.title = titlesPages.homePage;
  clearPageContainer();

  pageContainer.getPageContainer().append(homePage.getHomePage());
}

export default class Navbar {
  private signInLink: HTMLElement;

  private signUpLink: HTMLElement;

  private catalogLink: HTMLElement;

  private toCartLink: HTMLElement;

  private userProfileLink: HTMLElement;

  private logoutLink: HTMLElement;

  private navbar: HTMLElement;

  constructor() {
    this.catalogLink = this.createCatalogLink();
    this.signUpLink = this.createSignUpLink();
    this.signInLink = this.createSignInLink();
    this.toCartLink = this.createToCartLink();
    this.userProfileLink = this.createUserProfileLink();
    this.logoutLink = this.createLogoutLink();
    this.addOrRemoveLinks();
    this.navbar = this.createNavbar();
  }

  public getNavbar(): HTMLElement {
    return this.navbar;
  }

  public getCatalogLink(): HTMLElement {
    return this.catalogLink;
  }

  public getSignUpLink(): HTMLElement {
    return this.signUpLink;
  }

  public getSignInLink(): HTMLElement {
    return this.signInLink;
  }

  public getToCartLink() {
    return this.toCartLink;
  }

  public getUserProfileLink(): HTMLElement {
    return this.userProfileLink;
  }

  public getLogoutLink() {
    return this.logoutLink;
  }

  private createCatalogLink() {
    const tagCreator = new TagCreator(
      'a',
      'catalog-link',
      'catalogLink',
      '',
      'catalog',
    );
    this.catalogLink = tagCreator.createAndReturn();
    this.catalogLink.setAttribute('href', '#catalog');

    this.catalogLink.addEventListener('click', function (e) {
      e.preventDefault();
      history.pushState(
        { page: '/#catalog' },
        titlesPages.catalogPage,
        '#catalog',
      );
      document.title = titlesPages.catalogPage;
      clearPageContainer();

      pageContainer.getPageContainer().append(catalogPage.getCatalogPage());
      catalogPage.sortListener();

      if (
        localStorage.getItem('access_token_for_user') &&
        localStorage.getItem('access_token_for_user') !== 'undefined'
      ) {
        getProductsListInfoFromEcomm(
          localStorage.getItem('access_token_for_user'),
        );
      } else if (
        localStorage.getItem('anonym_access_token') &&
        localStorage.getItem('anonym_access_token') !== 'undefined'
      ) {
        getProductsListInfoFromEcomm(
          localStorage.getItem('anonym_access_token'),
        );
      } else if (
        !localStorage.getItem('anonym_access_token') ||
        localStorage.getItem('anonym_access_token') == 'undefined' ||
        !localStorage.getItem('access_token_for_user') ||
        localStorage.getItem('access_token_for_user') == 'undefined'
      )
        if (!localStorage.getItem('anonym_token_auth')) {
          receiveAnonymusAccessToken();
        }
    });

    return this.catalogLink;
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
    this.signUpLink.setAttribute('href', '#signup');

    // this.signUpLink.addEventListener('click', (e) => {
    //   // e.preventDefault();
    //   // history.pushState(
    //   //   { page: '/#signup' },
    //   //   titlesPages.registrationPage,
    //   //   '#signup',
    //   // );
    //   // document.title = titlesPages.registrationPage;
    //   // clearPageContainer();

    //   // const registrationFormDiv = new RegistrationForm('pageContainer', 'reg');
    //   // registrationFormDiv.createRegistrationForm();
    //   // receiveAccessToken();

    //   // if (
    //   //   (localStorage.getItem('access_token_for_user') &&
    //   //     localStorage.getItem('access_token_for_user') !== 'undefined') ||
    //   //   localStorage.getItem('newUser')
    //   // ) {
    //   //   setHistoryPushStateToHome();
    //   // }
    // });

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
    this.signInLink.setAttribute('href', '#signin');

    // this.signInLink.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   history.pushState({ page: '/#signin' }, titlesPages.loginPage, '#signin');
    //   document.title = titlesPages.loginPage;
    //   clearPageContainer();

    //   if (
    //     !localStorage.getItem('access_token_for_user') ||
    //     localStorage.getItem('access_token_for_user') == 'undefined'
    //   ) {
    //     const loginFormDiv = new LoginForm('pageContainer', 'log');
    //     loginFormDiv.createLoginForm();
    //     sendLoginPasswordToLocalStorage();
    //     moveToRegistration();
    //     moveToMainPage();
    //   }
    //   if (
    //     (localStorage.getItem('access_token_for_user') &&
    //       localStorage.getItem('access_token_for_user') !== 'undefined') ||
    //     localStorage.getItem('newUser')
    //   ) {
    //     e.preventDefault();
    //     setHistoryPushStateToHome();
    //   }
    // });

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
    this.toCartLink.setAttribute('href', '#cart');

    // this.toCartLink.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   history.pushState({ page: '/#cart' }, titlesPages.cartPage, '#cart');
    //   document.title = titlesPages.cartPage;
    //   clearPageContainer();

    //   pageContainer.getPageContainer().append(cartPage.getCartPage());
    // });
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
    this.userProfileLink.setAttribute('href', '#userprofile');

    // this.userProfileLink.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   history.pushState(
    //     { page: '/#userProfile' },
    //     titlesPages.userProfilePage,
    //     '#userProfile',
    //   );
    //   document.title = titlesPages.cartPage;
    //   clearPageContainer();

    //   pageContainer
    //     .getPageContainer()
    //     .append(userProfilePage.getUserProfilePage());

    //   if (
    //     localStorage.getItem('access_token_for_user') &&
    //     localStorage.getItem('access_token_for_user') !== 'undefined'
    //   ) {
    //     getUserInfoFromEcomm(localStorage.getItem('access_token_for_user'));
    //   } else getUserInfoFromEcomm(localStorage.getItem('access_token_auth'));
    // });
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
    this.logoutLink.setAttribute('href', '#');

    this.logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.clear();
      setHistoryPushStateToHome();
      this.addOrRemoveLinks();

      /*history.pushState(
        { page: '/#catalog' },
        titlesPages.catalogPage,
        '#catalog',
      );
      document.title = titlesPages.catalogPage;
      clearPageContainer();

      pageContainer.getPageContainer().append(catalogPage.getCatalogPage());*/
    });
    return this.logoutLink;
  }

  public addOrRemoveLinks() {
    ifAuthThenDisplayNone([this.signInLink, this.signUpLink]);
    ifAnonimThenDisplayNone([this.userProfileLink, this.logoutLink]);
  }

  private createNavbar() {
    const tagCreator = new TagCreator('nav', 'navbar', 'navbar');
    this.navbar = tagCreator.createAndReturn();

    this.navbar.append(
      this.catalogLink,
      this.signUpLink,
      this.signInLink,
      this.toCartLink,
      this.userProfileLink,
      this.logoutLink,
    );
    return this.navbar;
  }
}
