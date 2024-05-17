import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/notFoundPage.css';

export default class NotFoundPage {
  notFoundPage: HTMLElement;

  constructor() {
    this.notFoundPage = this.createNotFoundPage();
  }

  public getNotFoundPage() {
    return this.notFoundPage;
  }

  private createNotFoundPage() {
    const notFoundPageTagCreator = new TagCreator(
      'div',
      'not-found-page',
      'notFoundPage',
      '',
      '404: Page Not Found',
    );
    this.notFoundPage = notFoundPageTagCreator.createAndReturn();
    return this.notFoundPage;
  }
}
