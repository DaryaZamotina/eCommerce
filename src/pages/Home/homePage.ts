import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/homePage.css';
import Navbar from '../../components/Navbar/navbar';

const navbar = new Navbar();

export default class HomePage {
  section: HTMLElement;

  homePage: HTMLElement;

  constructor() {
    this.section = this.createSection();
    this.homePage = this.createHomePage();
    this.insertHTMLToHomePage();
  }

  public getHomePage() {
    return this.homePage;
  }

  public getSection() {
    return this.section;
  }

  private createSection() {
    const tagCreator = new TagCreator(
      'section',
      'home__section1',
      'homeSection',
      '',
      '',
    );
    this.section = tagCreator.createAndReturn();
    return this.section;
  }

  private insertHTMLToHomePage() {
    this.section.innerHTML = `<h2 class="home__title">WELCOME<br>to our online store<br>JOY.M HOME FURNITURE</h2>`;
    this.section.append(navbar.getCatalogLink());
  }

  private createHomePage() {
    const homePageTagCreator = new TagCreator('div', 'home-page', 'homePage');
    const promocodeTitle = new TagCreator('div', 'homePromocode', 'homePromocode', '', 'Promocode:');
    const promocode1 = new TagCreator('div', 'homePromocode', 'homePromocode1', '', 'NEWUSER24 -15%');
    const promocode2 = new TagCreator('div', 'homePromocode', 'homePromocode2', '', 'SUMMER2024 -30 €');
    this.homePage = homePageTagCreator.createAndReturn();
    this.homePage.append(this.getSection());
    this.homePage.append(promocodeTitle.createAndReturn());
    this.homePage.append(promocode1.createAndReturn());
    this.homePage.append(promocode2.createAndReturn());
    return this.homePage;
  }
}
