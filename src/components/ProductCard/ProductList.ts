import TagCreator from '../../module/tagCreator';
//import CreateInputForForm from '../creatorInputForForm';
//import InputsForFormLogin from '../../Helpers/Inputs/InputsForFormLogin';
import '../../../public/assets/css/body.css';
import '../../../public/assets/css/button.css';
import '../../../public/assets/css/products.css';
import '../../../public/assets/css/productsInCatalog.css';
import { getProductsListInfoFromEcomm } from './getProductDataFromEcomm';
import IResult from './InterfaceProduct';
//import HomePage from '../../pages/Home/homePage';
import { openProductCard } from './openProductCard';
import MasterData from './masterData';
import { getSlider } from '../../pages/ProductDetails/slider';

export function createProductsList(n: number, obj: Array<IResult>) {
  const catalogSection: HTMLElement = document.getElementById('catalogSection');
  catalogSection.innerHTML = '';

  obj.forEach((elem) => {
    const tag = new ProductsCardInCatalog(elem);
    tag.createProductsCardInCatalog();
  });
}

export default class ProductsCardInCatalog {
  private card: IResult;

  constructor(card: IResult) {
    this.card = card;
  }

  public createProductsCardInCatalog() {
    const catalogContainer = new TagCreator(
      'div',
      'catalog__container',
      `catalogContainer_${this.card.id}`,
      'catalogSection',
    );
    catalogContainer.createAndAppend();

    this.openProduct(`catalogContainer_${this.card.id}`);

    const catalogContainerImg = new TagCreator(
      'div',
      'catalog__container_img',
      `catalogContainerImg_${this.card.id}`,
      `catalogContainer_${this.card.id}`,
    );
    catalogContainerImg.createAndAppend();

    const img = document.getElementById(
      `catalogContainerImg_${this.card.id}`,
    ) as HTMLDivElement;
    img.style.backgroundImage = `url(${this.card.masterData.current.masterVariant.images[0].url})`;

    const catalogTitle = new TagCreator('div', 'catalogTitle', `catalogTitle_${this.card.id}`, `catalogContainer_${this.card.id}`, this.card.masterData.current.name.en);
    catalogTitle.createAndAppend();

    // const catalogDescription = new TagCreator('div', 'catalogDescription', `catalogDescription_${this.card.id}`, `catalogContainer_${this.card.id}`, this.card.masterData.current.description.en);
    // catalogDescription.createAndAppend();

    const catalogPrice = new TagCreator('div', 'catalogPrice', `catalogPrice_${this.card.id}`, `catalogContainer_${this.card.id}`, `${this.card.masterData.current.masterVariant.prices[0].value.centAmount / 10} €`);
    catalogPrice.createAndAppend();
  }

  private openProduct(id: string) {
    const card = document.getElementById(id) as HTMLDivElement;
    card.addEventListener('click', () => {
      openProductCard(this.card.id, this.card.masterData);
    });
  }
}
