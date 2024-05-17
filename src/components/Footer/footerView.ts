import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/footer.css';

export default class FooterView {
  private infoRss: HTMLElement;

  private footerWrapper: HTMLElement;

  private footer: HTMLElement;

  constructor() {
    this.infoRss = this.createInfoRss();
    this.footerWrapper = this.createFooterWrapper();
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
      '',
      'RS School JS-FE-2023Q4',
    );
    this.infoRss = infoRssTagCreator.createAndReturn();
    return this.infoRss;
  }
  private createFooterWrapper() {
    const tagCreator = new TagCreator('section', 'footer-wrapper', 'footerWrapper');
    this.footerWrapper = tagCreator.createAndReturn();
    this.footerWrapper.append(this.createInfoRss());
    return this.footerWrapper;
  }

  private createFooter() {
    const tagCreator = new TagCreator('footer', 'footer', 'footer');
    this.footer = tagCreator.createAndReturn();
    this.footer.append(this.createFooterWrapper());
    return this.footer;
  }
}
