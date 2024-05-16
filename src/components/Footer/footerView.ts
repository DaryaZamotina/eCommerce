import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/footer.css';

export default class FooterView {
  private infoRss: HTMLElement;

  private footer: HTMLElement;

  constructor() {
    this.infoRss = this.createInfoRss();
    this.footer = this.createFooter();
  }

  public getFooterElement(): HTMLElement {
    return this.footer;
  }

  public getInfoRss() {
    return this.infoRss;
  }

  private createInfoRss() {
    const infoRssTagCreator = new TagCreator(
      'div',
      'logout-button',
      'logoutButton',
      'header',
      '(Footer) RS SCHOOL JS-FE-2023Q4',
    );
    this.infoRss = infoRssTagCreator.createAndReturn();
    return this.infoRss;
  }

  private createFooter() {
    const tagCreator = new TagCreator('footer', 'footer', 'footer', 'body');
    this.footer = tagCreator.createAndReturn();
    this.footer.append(this.createInfoRss());
    return this.footer;
  }
}
