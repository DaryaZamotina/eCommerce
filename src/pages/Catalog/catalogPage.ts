import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/catalogPage.css';

export default class CatalogPage {
  section: HTMLElement;

  catalogPage: HTMLElement;

  constructor() {
    this.section = this.createSection();
    this.catalogPage = this.createCatalogPage();
  }

  public getCatalogPage() {
    return this.catalogPage;
  }

  public getSection() {
    return this.section;
  }

  private createSection() {
    const tagCreator = new TagCreator(
      'section',
      'catalog__section1',
      'catalogSection',
      '',
      '',
    );
    this.section = tagCreator.createAndReturn();
    return this.section;
  }

  private createCatalogPage() {
    const catalogPageTagCreator = new TagCreator(
      'div',
      'catalog-page',
      'catalogPage',
    );
    this.catalogPage = catalogPageTagCreator.createAndReturn();
    this.catalogPage.append(this.getSection());
    return this.catalogPage;
  }
}
