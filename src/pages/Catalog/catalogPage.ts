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
  filter: HTMLElement;

  constructor() {
    this.section = this.createSection();
    this.category = this.createCategory();
    this.filter = this.createFilter();
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

  private getFilter() {
    return this.filter;
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
    const tagCategory = new TagCreator(
      'div',
      'catalogCategory',
      'catalogCategory',
    );
    const linkCatalog = new TagCreator(
      'div',
      'link_catalog active',
      'link_catalog_catalog',
      '',
      'Catalog',
    );
    const linkBedroom = new TagCreator(
      'div',
      'link_catalog',
      'link_catalog_bedroom',
      '',
      '  Bedroom',
    );
    const linkBeds = new TagCreator(
      'div',
      'link_catalog',
      'link_catalog_beds',
      '',
      '      Beds',
    );
    const linkStorage = new TagCreator(
      'div',
      'link_catalog',
      'link_catalog_storage',
      '',
      '      Storage',
    );
    const linkWardrobes = new TagCreator(
      'div',
      'link_catalog',
      'link_catalog_wardrobes',
      '',
      '          Wardrobes',
    );
    const linkChests = new TagCreator(
      'div',
      'link_catalog',
      'link_catalog_chests',
      '',
      '          Chests',
    );
    const linkDressingTables = new TagCreator(
      'div',
      'link_catalog',
      'link_catalog_dressing',
      '',
      '      Dressing tables',
    );
    const linkMirrors = new TagCreator(
      'div',
      'link_catalog',
      'link_catalog_mirrors',
      '',
      '      Mirrors',
    );
    const linkHallway = new TagCreator(
      'div',
      'link_catalog',
      'link_catalog_hallway',
      '',
      '  Hallway',
    );
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

  private createFilter() {
    const tagFilter = new TagCreator('div', 'catalog__filter', 'catalogfilter');
    this.filter = tagFilter.createAndReturn();

    const filterCollectionContainer = new TagCreator(
      'div',
      'filterCollectionContainer',
      'filterCollectionContainer',
    );
    const filterBrandContainer = new TagCreator(
      'div',
      'filterCollectionContainer',
      'filterBrandContainer',
    );

    const filterCollectionContainerDiv =
      filterCollectionContainer.createAndReturn();
    const filterBrandContainerDiv = filterBrandContainer.createAndReturn();

    const filterCollectionContainerTitle = new TagCreator(
      'div',
      'filterCollectionContainerTitle',
      'filterCollectionContainerTitle',
      '',
      'Collection:',
    );
    const filterBrandContainerTitle = new TagCreator(
      'div',
      'filterCollectionContainerTitle',
      'filterBrandContainerTitle',
      '',
      'Brand:',
    );

    filterCollectionContainerDiv.append(
      filterCollectionContainerTitle.createAndReturn(),
    );
    filterBrandContainerDiv.append(filterBrandContainerTitle.createAndReturn());

    const arrCollection = [
      'Dublin',
      'Nicole',
      'Ronda',
      'Venice',
      'Paola',
      'Helen',
      'Dallas',
      'Valencia',
    ];
    const arrBrand = [
      'interior-center',
      'elbrus-m',
      'stendmebel',
      'nk-furniture',
    ];

    arrCollection.forEach((elem) => {
      const filterCollection = new TagCreator(
        'div',
        'filterCollection',
        `filter_collection_${elem}`,
        '',
        `${elem}`,
      );
      filterCollectionContainerDiv.append(filterCollection.createAndReturn());
    });

    arrBrand.forEach((elem) => {
      const filterCollection = new TagCreator(
        'div',
        'filterCollection',
        `filter_brand_${elem}`,
        '',
        `${elem}`,
      );
      filterBrandContainerDiv.append(filterCollection.createAndReturn());
    });

    const buttonReset = new TagCreator(
      'button',
      'buttonReset',
      'buttonReset',
      '',
      'Reset',
    );

    this.filter.append(filterCollectionContainerDiv);
    this.filter.append(filterBrandContainerDiv);
    this.filter.append(buttonReset.createAndReturn());

    return this.filter;
  }

  private createCatalogPage() {
    const catalogPageTagCreator = new TagCreator(
      'div',
      'catalog-page',
      'catalogPage',
    );
    this.catalogPage = catalogPageTagCreator.createAndReturn();
    this.catalogPage.append(this.getCategory());
    this.catalogPage.append(this.getFilter());
    this.catalogPage.append(this.getSort());
    this.catalogPage.append(this.getSection());
    return this.catalogPage;
  }

  public sortListener() {
    const sortButton = document.querySelectorAll('div.catalogSortByPrice');
    const categoryButton = document.querySelectorAll('div.link_catalog');
    const filterButton = document.querySelectorAll('div.filterCollection');
    const input = document.getElementById('inputSearch') as HTMLInputElement;
    const button = document.getElementById('buttonSearch') as HTMLButtonElement;
    const select = document.getElementById('catalogCategory') as HTMLDivElement;
    const filter = document.getElementById('catalogfilter') as HTMLDivElement;
    const buttonReset = document.getElementById(
      'buttonReset',
    ) as HTMLButtonElement;

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
      seartText = `text.en=${input.value}&`;
      sortCriteria = [
        { query: `search?${seartText}limit=30` },
        { query: `search?${seartText}sort=price`, order: ' asc' },
        { query: `search?${seartText}sort=price`, order: ' desc' },
        { query: `search?${seartText}sort=name.en`, order: ' asc' },
        { query: `search?${seartText}sort=name.en`, order: ' desc' },
      ];
      sortButton.forEach((button, index) => {
        if (button.classList.contains('active')) {
          const { query, order } = sortCriteria[index];
          fetchProductsSortedBy(query, order);
        }
      });
    });

    select.addEventListener('click', (event) => {
      filterButton.forEach((elem) => {
        elem.classList.remove('active');
      });
      const target = event.target as HTMLElement;
      const id = target.id.split('_');
      let test = true;
      let result:
        | 'bedroom'
        | 'hallway'
        | 'catalog'
        | 'beds'
        | 'storage'
        | 'wardrobes'
        | 'chests'
        | 'dressing'
        | 'mirrors';
      switch (id[2]) {
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
        default:
          result = 'catalog';
          test = false;
          break;
      }
      sortCriteria = [
        { query: `search?${categoryList[`${result}`]}limit=30` },
        {
          query: `search?${categoryList[`${result}`]}sort=price`,
          order: ' asc',
        },
        {
          query: `search?${categoryList[`${result}`]}sort=price`,
          order: ' desc',
        },
        {
          query: `search?${categoryList[`${result}`]}sort=name.en`,
          order: ' asc',
        },
        {
          query: `search?${categoryList[`${result}`]}sort=name.en`,
          order: ' desc',
        },
      ];
      if (test) {
        categoryButton.forEach((elem) => elem.classList.remove('active'));
        target.classList.add('active');
        sortButton.forEach((button, index) => {
          if (button.classList.contains('active')) {
            const { query, order } = sortCriteria[index];
            fetchProductsSortedBy(query, order);
          }
        });
      }
    });

    filter.addEventListener('click', (event) => {
      console.log(0);
      const target = event.target as HTMLElement;
      const id = target.id.split('_');
      console.log(id[2]);
      if (
        id[2] === 'Dublin' ||
        id[2] === 'Nicole' ||
        id[2] === 'Ronda' ||
        id[2] === 'Venice' ||
        id[2] === 'Paola' ||
        id[2] === 'Helen' ||
        id[2] === 'Dallas' ||
        id[2] === 'Valencia'
      ) {
        sortCriteria = [
          {
            query: `search?filter.query=variants.attributes.${id[1]}.key:"${id[2]}"&limit=30`,
          },
          {
            query: `search?filter.query=variants.attributes.${id[1]}.key:"${id[2]}"&sort=price`,
            order: ' asc',
          },
          {
            query: `search?filter.query=variants.attributes.${id[1]}.key:"${id[2]}"&sort=price`,
            order: ' desc',
          },
          {
            query: `search?filter.query=variants.attributes.${id[1]}.key:"${id[2]}"&sort=name.en`,
            order: ' asc',
          },
          {
            query: `search?filter.query=variants.attributes.${id[1]}.key:"${id[2]}"&sort=name.en`,
            order: ' desc',
          },
        ];
        sortButton.forEach((button, index) => {
          if (button.classList.contains('active')) {
            const { query, order } = sortCriteria[index];
            console.log(1);
            fetchProductsSortedBy(query, order);
          }
        });
      }
      if (
        id[2] === 'interior-center' ||
        id[2] === 'elbrus-m' ||
        id[2] === 'stendmebel' ||
        id[2] === 'nk-furniture'
      ) {
        sortCriteria = [
          {
            query: `search?filter.query=variants.attributes.${id[1]}.key:"${id[2]}"&limit=30`,
          },
          {
            query: `search?filter.query=variants.attributes.${id[1]}.key:"${id[2]}"&sort=price`,
            order: ' asc',
          },
          {
            query: `search?filter.query=variants.attributes.${id[1]}.key:"${id[2]}"&sort=price`,
            order: ' desc',
          },
          {
            query: `search?filter.query=variants.attributes.${id[1]}.key:"${id[2]}"&sort=name.en`,
            order: ' asc',
          },
          {
            query: `search?filter.query=variants.attributes.${id[1]}.key:"${id[2]}"&sort=name.en`,
            order: ' desc',
          },
        ];
        sortButton.forEach((button, index) => {
          if (button.classList.contains('active')) {
            const { query, order } = sortCriteria[index];
            console.log(3);
            fetchProductsSortedBy(query, order);
          }
        });
      }
      categoryButton.forEach((elem) => {
        elem.classList.remove('active');
        if (elem.id === 'link_catalog_catalog') {
          elem.classList.add('active');
        }
      });
      filterButton.forEach((elem) => {
        elem.classList.remove('active');
      });
      target.classList.add('active');
    });

    buttonReset.addEventListener('click', () => {
      document.getElementById('link_catalog_catalog').click();
    });
  }
}
