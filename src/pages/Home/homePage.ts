import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/homePage.css';

export default class HomePage {
  section: HTMLElement;

  homePage: HTMLElement;

  constructor() {
    this.section = this.createSection();
    this.homePage = this.createHomePage();
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
      'Home Page Content Will Be Here',
    );
    this.section = tagCreator.createAndReturn();
    return this.section;
  }

  private createHomePage() {
    const homePageTagCreator = new TagCreator('div', 'home-page', 'homePage');
    this.homePage = homePageTagCreator.createAndReturn();
    this.homePage.append(this.getSection());
    return this.homePage;
  }
}
