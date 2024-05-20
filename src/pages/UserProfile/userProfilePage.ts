import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/userProfilePage.css';

export default class UserProfilePage {
  section: HTMLElement;

  userProfilePage: HTMLElement;

  constructor() {
    this.section = this.createSection();
    this.userProfilePage = this.createHomePage();
  }

  public getUserProfilePage() {
    return this.userProfilePage;
  }

  public getSection() {
    return this.section;
  }

  private createSection() {
    const tagCreator = new TagCreator(
      'section',
      'user-profile__section1',
      'userProfileSection1',
      '',
      'User Profile Page Content Will Be Here',
    );
    this.section = tagCreator.createAndReturn();
    return this.section;
  }

  private createHomePage() {
    const userProfilePageTagCreator = new TagCreator(
      'div',
      'user-profile-page',
      'userProfilePage',
    );
    this.userProfilePage = userProfilePageTagCreator.createAndReturn();
    this.userProfilePage.append(this.getSection());
    return this.userProfilePage;
  }
}
