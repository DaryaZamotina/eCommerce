import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/cartPage.css';

export default class CartPage {
  section: HTMLElement;

  cartPage: HTMLElement;

  constructor() {
    this.section = this.createSection();
    this.cartPage = this.createHomePage();
  }

  public getCartPage() {
    return this.cartPage;
  }

  public getSection() {
    return this.section;
  }

  private createSection() {
    const tagCreator = new TagCreator(
      'section',
      'cart-page__section1',
      'cartPageSection',
      '',
      'Cart Page Content Will Be Here',
    );
    this.section = tagCreator.createAndReturn();
    return this.section;
  }

  private createHomePage() {
    const cartPageTagCreator = new TagCreator('div', 'cart-page', 'cartPage');
    this.cartPage = cartPageTagCreator.createAndReturn();
    this.cartPage.append(this.getSection());
    return this.cartPage;
  }
}
