import TagCreator from "../../module/tagCreator";

export default class HeaderView {
  private nameOfShop: HTMLElement;

  private signUpButton: HTMLElement;

  private signInButton: HTMLElement;

  private toCartButton: HTMLElement;

  private userProfileButton: HTMLElement;

  private logoutButton: HTMLElement;

  private header: HTMLElement;

  constructor() {
    this.nameOfShop = this.createNameOfShop();
    this.signUpButton = this.createSignUpButton();
    this.signInButton = this.createSignInButton();
    this.toCartButton = this.createToCartButton();
    this.userProfileButton = this.createUserProfileButton();
    this.logoutButton = this.createLogoutButton();
    this.header = this.createHeader();
  }

  public getHeaderElement(): HTMLElement {
    return this.header;
  }

  public getNameOfShop(): HTMLElement {
    return this.nameOfShop;
  }

  public getSignUpButton(): HTMLElement {
    return this.signUpButton;
  }

  public getSignInButton(): HTMLElement {
    return this.signInButton;
  }

  public getUserProfileButton(): HTMLElement {
    return this.userProfileButton;
  }

  public getLogoutButton() {
    return this.logoutButton;
  }

  private createNameOfShop() {
    const tagCreator = new TagCreator('h1', 'header__logo', 'headerLogo', 'header', 'JOY.M')
    this.nameOfShop = tagCreator.createAndReturn();
    // I don't understand how to setup css
    this.nameOfShop.style.display = 'inline-block';
    this.nameOfShop.style.marginRight = '20%';
    return this.nameOfShop;
  }

  private createSignUpButton() {
    const tagCreator = new TagCreator('button', 'sign-up-button', 'signUpButton', 'header', 'SIGN UP')
    this.signUpButton = tagCreator.createAndReturn();
    return this.signUpButton;
  }

  private createSignInButton() {
    const tagCreator = new TagCreator('button', 'sign-in-button', 'signInButton', 'header', 'SIGN IN')
    this.signInButton = tagCreator.createAndReturn();
    return this.signInButton;
  }

  private createToCartButton() {
    const tagCreator = new TagCreator('button', 'to-cart-button', 'toCartButton', 'header', 'TO CART')
    this.toCartButton = tagCreator.createAndReturn();
    return this.toCartButton;
  }

  private createUserProfileButton() {
    const tagCreator = new TagCreator('button', 'user-profile-button', 'userProfileButton', 'header', 'PROFILE')
    this.userProfileButton = tagCreator.createAndReturn();
    return this.userProfileButton;
  }

  private createLogoutButton() {
    const tagCreator = new TagCreator('button', 'logout-button', 'logoutButton', 'header', 'LOGOUT')
    this.logoutButton = tagCreator.createAndReturn();
    return this.logoutButton;
  }

  private createHeader() {
    const tagCreator = new TagCreator('header', 'header', 'header', 'body')
    this.header = tagCreator.createAndReturn();
    this.header.append(this.getNameOfShop(), this.getSignUpButton(), this.getSignInButton(), this.createToCartButton(), this.createUserProfileButton(), this.createLogoutButton())
    return this.header;
  }
}
