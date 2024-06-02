import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/catalogPage.css';
import fetchProductsSortedBy from '../../Helpers/Sprt/fetchProductsSortedBy';
import fetchProductsSearch from '../../Helpers/Sprt/fetchProductsSearch';

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
    const tagSort = new TagCreator('div', 'catalog__sort', 'catalogSort');
    this.sort = tagSort.createAndReturn();
    const catalogSortTitle = new TagCreator(
      'div',
      'catalogSortTitle',
      'catalogSortTitle',
      '',
      'Sort by:',
    );
    const catalogSortByRecommended = new TagCreator(
      'div',
      'catalogSortByPrice active',
      'catalogSortByRecommended',
      '',
      'Recommended',
    );
    const catalogSortByPrice_L = new TagCreator(
      'div',
      'catalogSortByPrice',
      'catalogSortByPrice_L',
      '',
      'Price: Low to high',
    );
    const catalogSortByPrice_H = new TagCreator(
      'div',
      'catalogSortByPrice',
      'catalogSortByPrice_H',
      '',
      'Price: High to low',
    );
    const catalogSortByPrice_A_Z = new TagCreator(
      'div',
      'catalogSortByPrice',
      'catalogSortBy_A_Z',
      '',
      'A - Z',
    );
    const catalogSortByPrice_Z_A = new TagCreator(
      'div',
      'catalogSortByPrice',
      'catalogSortBy_Z_A',
      '',
      'Z - A',
    );
    const inputSearch = new TagCreator('input', 'inputSearch', 'inputSearch');
    const inputSearchAttribute = inputSearch.createAndReturn();
    inputSearchAttribute.setAttribute('placeholder', 'Search...');
    const buttonSearch = new TagCreator('button', 'buttonSearch disabled', 'buttonSearch', '', 'Search');
    const buttonSearchAttribute = buttonSearch.createAndReturn();
    buttonSearchAttribute.setAttribute('disabled', 'disabled');
    const containerSearch = new TagCreator('div', 'containerSearch', 'containerSearch');
    const containerSearchDiv = containerSearch.createAndReturn();
    containerSearchDiv.append(inputSearchAttribute);
    containerSearchDiv.append(buttonSearchAttribute);
    this.sort.append(catalogSortTitle.createAndReturn());
    this.sort.append(catalogSortByRecommended.createAndReturn());
    this.sort.append(catalogSortByPrice_L.createAndReturn());
    this.sort.append(catalogSortByPrice_H.createAndReturn());
    this.sort.append(catalogSortByPrice_A_Z.createAndReturn());
    this.sort.append(catalogSortByPrice_Z_A.createAndReturn());
    this.sort.append(containerSearchDiv);
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
    const input = document.getElementById('inputSearch') as HTMLInputElement;
    const button = document.getElementById('buttonSearch') as HTMLButtonElement;
    let seartText = '';
    let sortCriteria = [
      { query: `search?${seartText}limit=30` },
      { query: `search?${seartText}sort=price`, order: ' asc' },
      { query: `search?${seartText}sort=price`, order: ' desc' },
      { query: `search?${seartText}sort=name.en`, order: ' asc' },
      { query: `search?${seartText}sort=name.en`, order: ' desc' }
    ];

    sortButton.forEach((button, index) => {
      button.addEventListener('click', (event) => {
        if (!button.classList.contains('active')) {
          sortButton.forEach((elem) => elem.classList.remove('active'));
          button.classList.add('active');
          const { query, order } = sortCriteria[index];
          fetchProductsSortedBy(query, order);
        }
      });
    });

    input.addEventListener('input', () => {
      if (input.value.length > 0) {
        button.removeAttribute('disabled');
        button.classList.remove('disabled');
      } else {
        button.setAttribute('disabled', 'disabled');
        button.classList.add('disabled');
      }
      seartText = `text.en=${input.value}&`;
      sortCriteria = [
        { query: `search?${seartText}limit=30` },
        { query: `search?${seartText}sort=price`, order: ' asc' },
        { query: `search?${seartText}sort=price`, order: ' desc' },
        { query: `search?${seartText}sort=name.en`, order: ' asc' },
        { query: `search?${seartText}sort=name.en`, order: ' desc' }
      ]
    });

    button.addEventListener('click', () => {
      let sortNumber: number;
      sortButton.forEach((button, index) => {
        if (button.classList.contains('active')) {
          const { query, order } = sortCriteria[index];
          fetchProductsSortedBy(query, order);
        }
      });
    });
  }
}
