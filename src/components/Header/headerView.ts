import TagCreator from '../../module/tagCreator';
import Navbar from '../Navbar/navbar';
import { setHistoryPushStateToHome } from '../Navbar/navbar';
import '../../../public/assets/css/header.css';

export default class HeaderView {
  private nameOfShop: HTMLElement;

  private navbar: Navbar;

  private toCartLink: HTMLElement;

  private burger: HTMLElement;

  private firstLine: HTMLElement;

  private secondLine: HTMLElement;

  private headerWrapper: HTMLElement;

  private header: HTMLElement;

  constructor() {
    this.nameOfShop = this.createNameOfShop();
    this.navbar = new Navbar();
    this.toCartLink = this.createToCartLink();
    this.burger = this.createBurger();
    this.headerWrapper = this.createHeaderWrapper();
    this.header = this.createHeader();
  }

  public getHeaderElement(): HTMLElement {
    return this.header;
  }

  public getNavbar(): Navbar {
    return this.navbar;
  }

  public getToCartLink() {
    return this.toCartLink;
  }

  public getNameOfShop(): HTMLElement {
    return this.nameOfShop;
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

    this.nameOfShop.addEventListener('click', function (e) {
      e.preventDefault();
      setHistoryPushStateToHome();
    });

    return this.nameOfShop;
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
    return this.toCartLink;
  }

  private createBurger() {
    const burgerTagCreator = new TagCreator('button', 'burger', 'burger');
    this.burger = burgerTagCreator.createAndReturn();

    const firstLineTagCreator = new TagCreator(
      'span',
      'first-line',
      'firstLine',
    );
    this.firstLine = firstLineTagCreator.createAndReturn();

    const secondLineTagCreator = new TagCreator(
      'span',
      'second-line',
      'secondLine',
    );
    this.secondLine = secondLineTagCreator.createAndReturn();

    this.burger.append(this.firstLine, this.secondLine);

    return this.burger;
  }

  private createHeaderWrapper() {
    const tagCreator = new TagCreator(
      'section',
      'header-wrapper',
      'headerWrapper',
    );
    this.headerWrapper = tagCreator.createAndReturn();

    this.headerWrapper.append(
      this.nameOfShop,
      this.navbar.getNavbar(),
      this.toCartLink,
      this.burger,
    );

    this.burger.addEventListener('click', () => {
      if (this.burger.classList.contains('open')) {
        this.removeOpenClassOnBurgerAndNavbar();
      } else {
        this.addOpenClassOnBurgerAndNavbar();
      }
    });

    return this.headerWrapper;
  }

  private addOpenClassOnBurgerAndNavbar = () => {
    this.burger.classList.add('open');
    this.navbar.getNavbar().classList.add('open');
    document.addEventListener('click', this.handleClickOutsideNavbar);
  };

  private removeOpenClassOnBurgerAndNavbar = () => {
    this.burger.classList.remove('open');
    this.navbar.getNavbar().classList.remove('open');
    document.removeEventListener('click', this.handleClickOutsideNavbar);
  };

  private handleClickOutsideNavbar = (e: Event) => {
    if (
      this.navbar.getNavbar().contains(e.target as Node) ||
      this.burger.contains(e.target as Node)
    ) {
      if (
        this.navbar.getCatalogLink().contains(e.target as Node) ||
        this.navbar.getSignUpLink().contains(e.target as Node) ||
        this.navbar.getSignInLink().contains(e.target as Node) ||
        this.navbar.getAboutUsLink().contains(e.target as Node) ||
        this.navbar.getUserProfileLink().contains(e.target as Node) ||
        this.navbar.getLogoutLink().contains(e.target as Node)
      ) {
        this.removeOpenClassOnBurgerAndNavbar();
      }
      return;
    }
    this.removeOpenClassOnBurgerAndNavbar();
  };

  private createHeader() {
    const tagCreator = new TagCreator('header', 'header', 'header');
    this.header = tagCreator.createAndReturn();
    this.header.append(this.headerWrapper);
    return this.header;
  }
}
