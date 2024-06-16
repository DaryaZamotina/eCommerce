import TagCreator from '../../module/tagCreator';
import contentPage from '../../Helpers/aboutUsContent/contentPageAboutUs';
import AboutDeveloper from '../../components/About_us/aboutDeveloper';
import infoAboutDevelopers from '../../Helpers/aboutUsContent/infoAboutDevelopers';
import IDeveloper from './interfaceDeveloper';
import '../../../public/assets/css/aboutUsPage.css';

export default class AboutUsPage {
  private aboutUsPage: HTMLElement;

  private developersList: HTMLElement;

  constructor() {
    this.developersList = this.createDevelopersList();
    this.aboutUsPage = this.createAboutUsPage();
  }

  public getAboutUsPage() {
    return this.aboutUsPage;
  }

  private createTitleOfPage() {
    const titleOfPage = new TagCreator(
      'h2',
      'about-us__title',
      'aboutUsTitle',
      '',
      `${contentPage.title}`,
    );
    return titleOfPage.createAndReturn();
  }

  private createAboutTeam() {
    const aboutTeam = new TagCreator(
      'p',
      'about-us__about-team',
      'aboutUsAboutTeam',
      '',
      `${contentPage.aboutTeam}`,
    );
    return aboutTeam.createAndReturn();
  }

  private createDevelopersList() {
    const tagDevelopersList = new TagCreator(
      'div',
      'about-us__developers-list',
      'aboutUsDevelopersList',
    );
    this.developersList = tagDevelopersList.createAndReturn();
    this.insertAboutDeveloperToList(infoAboutDevelopers);
    return this.developersList;
  }

  private createAboutAreas() {
    const aboutAreas = new TagCreator(
      'p',
      'about-us__about-areas',
      'aboutUsAboutAreas',
      '',
      `${contentPage.aboutAreas}`,
    );
    return aboutAreas.createAndReturn();
  }

  private createLogoRSS() {
    const tagLogoRSS = new TagCreator(
      'img',
      'about-us__logo-rss',
      `aboutUsLogoRSS`,
    );
    const logoRSS = tagLogoRSS.createAndReturn();
    logoRSS.setAttribute('src', './images/logo-rss-square.png');
    logoRSS.setAttribute(
      'onclick',
      `window.open('https://rs.school/', '_blank')`,
    );
    return logoRSS;
  }

  private createAboutUsPage() {
    const tagAboutUsPage = new TagCreator('section', 'about-us', 'aboutUs');
    this.aboutUsPage = tagAboutUsPage.createAndReturn();

    this.aboutUsPage.append(
      this.createTitleOfPage(),
      this.createAboutTeam(),
      this.createDevelopersList(),
      this.createAboutAreas(),
      this.createLogoRSS(),
    );
    return this.aboutUsPage;
  }

  private insertAboutDeveloperToList(infoAboutDevelopers: IDeveloper[]) {
    let arrayItemsAboutDevelopers = [];
    for (let i = 0; i < infoAboutDevelopers.length; i++) {
      arrayItemsAboutDevelopers[i] = new AboutDeveloper(infoAboutDevelopers, i);
      this.developersList.append(
        arrayItemsAboutDevelopers[i].getItemAboutDeveloper(),
      );
    }
    return arrayItemsAboutDevelopers;
  }
}
