import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/catalogPage.css';
import fetchProductsSortedBy from '../../Helpers/Sprt/fetchProductsSortedBy';
import fetchProductsSearch from '../../Helpers/Sprt/fetchProductsSearch';
import categoryList from '../../Helpers/Sprt/categoryList';

export default class CatalogPage {
  section: HTMLElement;
  sort: HTMLElement;
  catalogPage: HTMLElement;
  category: HTMLElement;

  constructor() {
    this.section = this.createSection();
    this.category = this.createCategory();
    this.sort = this.createSort();
    this.catalogPage = this.createCatalogPage();
  }

  public getCatalogPage() {
    return this.catalogPage;
  }

  public getSection() {
    return this.section;
  }

  private getCategory() {
    return this.category;
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
    const buttonSearch = new TagCreator(
      'button',
      'buttonSearch disabled',
      'buttonSearch',
      '',
      'Search',
    );
    const buttonSearchAttribute = buttonSearch.createAndReturn();
    buttonSearchAttribute.setAttribute('disabled', 'disabled');
    const containerSearch = new TagCreator(
      'div',
      'containerSearch',
      'containerSearch',
    );
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

  private createCategory() {
    const tagCategory = new TagCreator('div', 'catalogCategory', 'catalogCategory');
    const linkCatalog = new TagCreator('div', 'link_catalog active', 'link_catalog_catalog', '', 'Catalog');
    const linkBedroom = new TagCreator('div', 'link_catalog', 'link_catalog_bedroom', '', '  Bedroom');
    const linkBeds = new TagCreator('div', 'link_catalog', 'link_catalog_beds', '', '      Beds');
    const linkStorage = new TagCreator('div', 'link_catalog', 'link_catalog_storage', '', '      Storage');
    const linkWardrobes = new TagCreator('div', 'link_catalog', 'link_catalog_wardrobes', '', '          Wardrobes');
    const linkChests = new TagCreator('div', 'link_catalog', 'link_catalog_chests', '', '          Chests');
    const linkDressingTables = new TagCreator('div', 'link_catalog', 'link_catalog_dressing', '', '      Dressing tables');
    const linkMirrors = new TagCreator('div', 'link_catalog', 'link_catalog_mirrors', '', '      Mirrors');
    const linkHallway = new TagCreator('div', 'link_catalog', 'link_catalog_hallway', '', '  Hallway');
    this.category = tagCategory.createAndReturn();
    this.category.append(linkCatalog.createAndReturn());
    this.category.append(linkBedroom.createAndReturn());
    this.category.append(linkBeds.createAndReturn());
    this.category.append(linkStorage.createAndReturn());
    this.category.append(linkWardrobes.createAndReturn());
    this.category.append(linkChests.createAndReturn());
    this.category.append(linkDressingTables.createAndReturn());
    this.category.append(linkMirrors.createAndReturn());
    this.category.append(linkHallway.createAndReturn());
    this.category.append(linkStorage.createAndReturn());
    this.category.append(linkWardrobes.createAndReturn());
    this.category.append(linkChests.createAndReturn());
    this.category.append(linkMirrors.createAndReturn());
    return this.category;
  }

  private createCatalogPage() {
    const catalogPageTagCreator = new TagCreator(
      'div',
      'catalog-page',
      'catalogPage',
    );
    this.catalogPage = catalogPageTagCreator.createAndReturn();
    this.catalogPage.append(this.getCategory());
    this.catalogPage.append(this.getSort());
    this.catalogPage.append(this.getSection());
    return this.catalogPage;
  }

  public sortListener() {
    const sortButton = document.querySelectorAll('div.catalogSortByPrice');
    const categoryButton = document.querySelectorAll('div.link_catalog');
    const input = document.getElementById('inputSearch') as HTMLInputElement;
    const button = document.getElementById('buttonSearch') as HTMLButtonElement;
    const select = document.getElementById('catalogCategory') as HTMLDivElement;
    let seartText = '';
    let sortCriteria = [
      { query: `search?${seartText}limit=30` },
      { query: `search?${seartText}sort=price`, order: ' asc' },
      { query: `search?${seartText}sort=price`, order: ' desc' },
      { query: `search?${seartText}sort=name.en`, order: ' asc' },
      { query: `search?${seartText}sort=name.en`, order: ' desc' },
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
        { query: `search?${seartText}sort=name.en`, order: ' desc' },
      ];
    });

    button.addEventListener('click', () => {
      sortButton.forEach((button, index) => {
        if (button.classList.contains('active')) {
          const { query, order } = sortCriteria[index];
          fetchProductsSortedBy(query, order);
        }
      });
    });

    select.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      const id = target.id.split('_');
      let result: 'bedroom' | 'hallway' | 'catalog' | 'beds'| 'storage' | 'wardrobes' | 'chests' | 'dressing' | 'mirrors';   
      switch(id[2]) {
        case 'catalog':
          result = 'catalog';
          break;
        case 'bedroom':
          result = 'bedroom';
          break;
        case 'hallway':
          result = 'hallway';
          break;
        case 'beds':
          result = 'beds';
          break;
        case 'storage':
          result = 'storage';
          break;
        case 'wardrobes':
          result = 'wardrobes';
          break;
        case 'chests':
          result = 'chests';
          break;
        case 'dressing':
          result = 'dressing';
          break;
        case 'mirrors':
          result = 'mirrors';
          break;
      }
      sortCriteria = [
        { query: `search?${categoryList[`${result}`]}limit=30` },
        { query: `search?${categoryList[`${result}`]}sort=price`, order: ' asc' },
        { query: `search?${categoryList[`${result}`]}sort=price`, order: ' desc' },
        { query: `search?${categoryList[`${result}`]}sort=name.en`, order: ' asc' },
        { query: `search?${categoryList[`${result}`]}sort=name.en`, order: ' desc' }
      ]
      categoryButton.forEach((elem) => elem.classList.remove('active'));
      target.classList.add('active');
      sortButton.forEach((button, index) => {
        if (button.classList.contains('active')) {
          const { query, order } = sortCriteria[index];
          fetchProductsSortedBy(query, order);
        }
      });
    });
  }
}
