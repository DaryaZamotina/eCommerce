import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/body.css';

export default class PageContainer {
  pageContainer: HTMLElement;

  constructor() {

    this.pageContainer = this.createPageContainer();
  }

  public getPageContainer() {
    return this.pageContainer;
  }

  private createPageContainer() {
    const pageContainerTagCreator = new TagCreator(
      'main',
      'page-container',
      'pageContainer',
    );
    this.pageContainer = pageContainerTagCreator.createAndReturn();
    return this.pageContainer;
  }
}
