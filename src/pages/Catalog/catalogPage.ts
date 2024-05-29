import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/catalogPage.css';
import fetchProductsSortedByPrice from '../../Helpers/Sprt/sortByPriceL';

export default class CatalogPage {
  section: HTMLElement;
  sort: HTMLElement;
  catalogPage: HTMLElement;

  constructor() {
    this.section = this.createSection();
    this.sort = this.createSort();
    this.catalogPage = this.createCatalogPage();
  }

  public getCatalogPage() {
    return this.catalogPage;
  }

  public getSection() {
    return this.section;
  }

  private getSort() {
    return this.sort;
  }

  private createSection() {
    const tagCreator = new TagCreator(
      'section',
      'catalog__section1',
      'catalogSection',
    );
    this.section = tagCreator.createAndReturn();
    return this.section;
  }

  private createSort() {
    const tagSort = new TagCreator(
      'div',
      'catalog__sort',
      'catalogSort',
    );
    this.sort = tagSort.createAndReturn();
    const catalogSortTitle = new TagCreator('div', 'catalogSortTitle', 'catalogSortTitle', '', 'Sort by:');
    const catalogSortByRecommended = new TagCreator('div', 'catalogSortByPrice active', 'catalogSortByRecommended', '', 'Recommended');
    const catalogSortByPrice_L = new TagCreator('div', 'catalogSortByPrice', 'catalogSortByPrice_L', '', 'Price: Low to high');
    const catalogSortByPrice_H = new TagCreator('div', 'catalogSortByPrice', 'catalogSortByPrice_H', '', 'Price: High to low');
    const catalogSortByPrice_A_Z = new TagCreator('div', 'catalogSortByPrice', 'catalogSortBy_A_Z', '', 'A - Z');
    this.sort.append(catalogSortTitle.createAndReturn());
    this.sort.append(catalogSortByRecommended.createAndReturn());
    this.sort.append(catalogSortByPrice_L.createAndReturn());
    this.sort.append(catalogSortByPrice_H.createAndReturn());
    this.sort.append(catalogSortByPrice_A_Z.createAndReturn());
    return this.sort;
  }

  private createCatalogPage() {
    const catalogPageTagCreator = new TagCreator(
      'div',
      'catalog-page',
      'catalogPage',
    );
    this.catalogPage = catalogPageTagCreator.createAndReturn();
    this.catalogPage.append(this.getSort());
    this.catalogPage.append(this.getSection());
    return this.catalogPage;
  }

  public sortListener() {
    const sortButton = document.querySelectorAll('div.catalogSortByPrice');
    sortButton[1].addEventListener('click', (event) => {
      fetchProductsSortedByPrice();
    })
  }
}
