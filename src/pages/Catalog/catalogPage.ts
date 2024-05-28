import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/catalogPage.css';

export default class CatalogPage {
  section: HTMLElement;
  catalogPage: HTMLElement;
  header: HTMLElement;
  main: HTMLElement;
  filters: HTMLElement;

  constructor() {
    this.section = this.createSection();
    this.header = this.createCatalogHeader();
    this.main = this.createCatalogMain();
    this.filters = this.createCatalogFilters();
    this.catalogPage = this.createCatalogPage();
  }

  public getCatalogPage() {
    return this.catalogPage;
  }

  public getSection() {
    return this.section;
  }

  private getHeader() {
    return this.header;
  }

  private getMain() {
    return this.main;
  }

  private getFilters() {
    return this.filters;
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

  private createCatalogHeader() {
    const catalogHeaderTagCreator = new TagCreator(
      'div',
      'catalog__header',
      'catalogHeader',
      '',
      'categories',
    );
    this.header = catalogHeaderTagCreator.createAndReturn();
    return this.header;
  }

  private createCatalogMain() {
    const catalogMainTagCreator = new TagCreator(
      'div',
      'catalog__main',
      'catalogMain',
      '',
      '',
    );
    this.main = catalogMainTagCreator.createAndReturn();
    return this.main;
  }

  private createCatalogFilters() {
    const catalogFiltersTagCreator = new TagCreator(
      'div',
      'catalog__filters',
      'catalogFilters',
      '',
      '',
    );
    this.filters = catalogFiltersTagCreator.createAndReturn();
    return this.filters;
  }

  private createCatalogPage() {
    const catalogPageTagCreator = new TagCreator(
      'div',
      'catalog-page',
      'catalogPage',
    );
    this.catalogPage = catalogPageTagCreator.createAndReturn();
    this.catalogPage.append(this.getHeader());
    this.catalogPage.append(this.getMain());
    this.main.append(this.getFilters());
    this.main.append(this.getSection());
    return this.catalogPage;
  }
}
