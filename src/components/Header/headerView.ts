import TagCreator from '../../module/tagCreator';
import Navbar from '../Navbar/navbar';
import { setHistoryPushStateToHome } from '../Navbar/navbar';
import '../../../public/assets/css/header.css';

export default class HeaderView {
  private nameOfShop: HTMLElement;

  private navbar: Navbar;

  private burger: HTMLElement;

  private firstLine: HTMLElement;

  private secondLine: HTMLElement;

  private headerWrapper: HTMLElement;

  private header: HTMLElement;

  constructor() {
    this.nameOfShop = this.createNameOfShop();
    this.navbar = new Navbar();
    this.headerWrapper = this.createHeaderWrapper();
    this.header = this.createHeader();
  }

  public getHeaderElement(): HTMLElement {
    return this.header;
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

  private createHeaderWrapper() {
    const tagCreator = new TagCreator(
      'section',
      'header-wrapper',
      'headerWrapper',
    );
    this.headerWrapper = tagCreator.createAndReturn();

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

    this.burger.addEventListener('click', () => {
      this.burger.classList.toggle('open');
      this.navbar.getNavbar().classList.toggle('open');
    });

    this.headerWrapper.append(
      this.nameOfShop,
      this.navbar.getNavbar(),
      this.burger,
    );
    return this.headerWrapper;
  }

  private createHeader() {
    const tagCreator = new TagCreator('header', 'header', 'header');
    this.header = tagCreator.createAndReturn();
    this.header.append(this.headerWrapper);
    return this.header;
  }
}
