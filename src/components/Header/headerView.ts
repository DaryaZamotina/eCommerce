import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/header.css';

export default class HeaderView {
  private nameOfShop: HTMLElement;

  private signUpLink: HTMLElement;

  private signInLink: HTMLElement;

  private toCartLink: HTMLElement;

  private userProfileLink: HTMLElement;

  private logoutLink: HTMLElement;

  private headerWrapper: HTMLElement;

  private header: HTMLElement;

  constructor() {
    this.nameOfShop = this.createNameOfShop();
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

  private createSignUpLink() {
    const tagCreator = new TagCreator(
      'a',
      'sign-up-link',
      'signUpLink',
      '',
      'sign up',
    );
    this.signUpLink = tagCreator.createAndReturn();
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
