import TagCreator from '../../module/tagCreator';

export default class NonFoundPage {
  nonFoundPage: HTMLElement;

  constructor() {
    this.nonFoundPage = this.createNonFoundPage();
  }

  public getNonFoundPage() {
    return this.nonFoundPage;
  }

  private createNonFoundPage() {
    const nonFoundPageTagCreator = new TagCreator(
      'div',
      'non-found-page',
      'nonFoundPage',
      'pageContainer',
      '404: Page Not Found',
    );
    this.nonFoundPage = nonFoundPageTagCreator.createAndReturn();
    return this.nonFoundPage;
  }
}
