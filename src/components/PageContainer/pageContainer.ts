import TagCreator from '../../module/tagCreator';
import HomePage from '../../pages/Home/homePage';
import RegistrationForm from '../../pages/Registration/registrationForm';
import NonFoundPage from '../../pages/NonFoundPage/nonFoundPage';

export default class PageContainer {
  homePage: HomePage;

  registrationForm: RegistrationForm;

  nonFoundPage: NonFoundPage;

  pageContainer: HTMLElement;

  constructor() {
    this.homePage = new HomePage();
    this.registrationForm = new RegistrationForm();
    this.nonFoundPage = new NonFoundPage();
    this.pageContainer = this.createPageContainer();
  }

  public getPageContainer() {
    return this.pageContainer;
  }

  private createPageContainer() {
    const pageContainerTagCreator = new TagCreator(
      'div',
      'page-container',
      'pageContainer',
      'appContainer',
    );
    this.pageContainer = pageContainerTagCreator.createAndReturn();
    this.pageContainer.append(this.homePage.getHomePage());
    return this.pageContainer;
  }
}
