import TagCreator from '../../module/tagCreator';
import IDeveloper from '../../pages/AboutUs/interfaceDeveloper';

export default class AboutDeveloper {
  private itemAboutDeveloper: HTMLElement;

  private infoAboutDevelopers: IDeveloper[];

  private i: number;

  constructor(infoAboutDevelopers: IDeveloper[], i: number) {
    this.infoAboutDevelopers = infoAboutDevelopers;
    this.i = i;
    this.itemAboutDeveloper = this.createItemAboutDeveloper();
  }

  public getItemAboutDeveloper() {
    return this.itemAboutDeveloper;
  }

  private createName() {
    const tagName = new TagCreator(
      'a',
      'about-us__dev-name',
      `aboutUsDevName${this.infoAboutDevelopers[this.i].name}`,
      '',
      `${this.infoAboutDevelopers[this.i].name}`,
    );
    const name = tagName.createAndReturn();
    name.setAttribute('href', `${this.infoAboutDevelopers[this.i].github}`);
    return name;
  }

  private createRole() {
    const role = new TagCreator(
      'p',
      'about-us__dev-role',
      `aboutUsDevRole${this.infoAboutDevelopers[this.i].name}`,
      '',
      `${this.infoAboutDevelopers[this.i].role}`,
    );
    return role.createAndReturn();
  }

  private createCity() {
    const city = new TagCreator(
      'p',
      'about-us__dev-city',
      `aboutUsDevCity${this.infoAboutDevelopers[this.i].name}`,
      '',
      `${this.infoAboutDevelopers[this.i].city}`,
    );
    return city.createAndReturn();
  }

  private createPhoto() {
    const tagPhoto = new TagCreator(
      'img',
      'about-us__dev-photo',
      `aboutUsDevPhoto${this.infoAboutDevelopers[this.i].name}`,
    );
    const photo = tagPhoto.createAndReturn();
    photo.setAttribute('src', `${this.infoAboutDevelopers[this.i].photo}`);
    return photo;
  }

  private createTextAbout() {
    const textAbout = new TagCreator(
      'p',
      'about-us__dev-text-about',
      `aboutUsDevTextAbout${this.infoAboutDevelopers[this.i].name}`,
      '',
      `${this.infoAboutDevelopers[this.i].about}`,
    );
    return textAbout.createAndReturn();
  }

  private createTitleAreas() {
    const titleAreas = new TagCreator(
      'p',
      'about-us__dev-areas-title',
      `aboutUsDevAreasTitle${this.infoAboutDevelopers[this.i].name}`,
      '',
      'Key Contributions',
    );
    return titleAreas.createAndReturn();
  }

  private createAreas() {
    const areas = new TagCreator(
      'p',
      'about-us__dev-areas',
      `aboutUsDevAreas${this.infoAboutDevelopers[this.i].name}`,
      '',
      `${this.infoAboutDevelopers[this.i].areas}`,
    );
    return areas.createAndReturn();
  }

  private createItemAboutDeveloper() {
    const tagitemAboutDeveloper = new TagCreator(
      'div',
      'about-us__item-about-developer',
      `aboutUsItemAboutDeveloper${this.infoAboutDevelopers[this.i].name}`,
    );
    this.itemAboutDeveloper = tagitemAboutDeveloper.createAndReturn();
    this.itemAboutDeveloper.append(
      this.createPhoto(),
      this.createName(),
      this.createRole(),
      this.createCity(),
      this.createTextAbout(),
      this.createTitleAreas(),
      this.createAreas(),
    );
    return this.itemAboutDeveloper;
  }
}
