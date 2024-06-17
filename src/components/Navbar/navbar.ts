import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/navbar.css';
import '../../../public/assets/css/header.css';
import { clearPageContainer, pageContainer, homePage } from '../..';
import titlesPages from '../../Helpers/documentTitle';
import {
  ifAuthThenDisplayNone,
  ifAnonimThenDisplayNone,
} from '../../utils/changeSingUpLogoutButtons';
import { setRoutingPage } from '../..';

export function setHistoryPushStateToHome() {
  history.pushState({ page: '/#' }, titlesPages.homePage, '#');
  document.title = titlesPages.homePage;
  clearPageContainer();

  pageContainer.getPageContainer().append(homePage.getHomePage());
  const video = document.querySelector('video');
  if (video) {
    video.play();
  }
}

export default class Navbar {
  private signInLink: HTMLElement;

  private signUpLink: HTMLElement;

  private catalogLink: HTMLElement;

  private aboutUsLink: HTMLElement;

  private userProfileLink: HTMLElement;

  private logoutLink: HTMLElement;

  private navbar: HTMLElement;

  constructor() {
    this.catalogLink = this.createCatalogLink();
    this.signUpLink = this.createSignUpLink();
    this.signInLink = this.createSignInLink();
    this.aboutUsLink = this.createAboutUsLink();
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

  public getAboutUsLink() {
    return this.aboutUsLink;
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

    this.catalogLink.addEventListener('click', function () {
      setRoutingPage();
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
    return this.signInLink;
  }

  private createAboutUsLink() {
    const tagCreator = new TagCreator(
      'a',
      'about-us-link',
      'aboutUsLink',
      '',
      'about us',
    );
    this.aboutUsLink = tagCreator.createAndReturn();
    this.aboutUsLink.setAttribute('href', '#aboutus');
    return this.aboutUsLink;
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
      this.aboutUsLink,
      this.signUpLink,
      this.signInLink,
      this.userProfileLink,
      this.logoutLink,
    );
    return this.navbar;
  }
}
