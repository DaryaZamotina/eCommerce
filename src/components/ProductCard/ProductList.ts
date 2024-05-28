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

export function createProductsList(n: number, obj: Array<IResult>) {
  // for (let i = 0; i < n; i++) {
  //   const productCardInfoContainer = document.createElement('div');
  //   productCardInfoContainer.className = 'productCardInfoContainer';
  //   productCardInfoContainer.textContent = JSON.stringify(obj[i]);

  //   const catalogSection = document.getElementById('catalogSection');
  //   catalogSection.append(productCardInfoContainer);
  // }
  //   obj.forEach((elem) => {
  //     const tag = new ProductsCardInCatalog(elem);
  //     tag.createProductsCardInCatalog();
  //   });
  // }

  // class ProductsCardInCatalog {
  //   private card: IResult;

  //   constructor(card: IResult) {
  //     this.card = card;
  //   }

  //   public createProductsCardInCatalog() {
  //     const catalogContainer = new TagCreator(
  //       'div',
  //       'catalog__container',
  //       `catalogContainer_${this.card.id}`,
  //       'catalogSection',
  //     );
  //     catalogContainer.createAndAppend();

  //     const catalogContainerImg = new TagCreator(
  //       'div',
  //       'catalog__container_img',
  //       `catalogContainerImg_${this.card.id}`,
  //       `catalogContainer_${this.card.id}`,
  //     );
  //     catalogContainerImg.createAndAppend();

  //     const img = document.getElementById(
  //       `catalogContainerImg_${this.card.id}`,
  //     ) as HTMLDivElement;
  //     img.style.backgroundImage = `url(${this.card.masterData.current.masterVariant.images[0].url})`;
  //   }
  const catalogSection: HTMLElement = document.getElementById('catalogSection');

  catalogSection.innerHTML = '';

  for (let i: number = 0; i < n; i++) {
    const productCardInfoContainer: HTMLDivElement =
      document.createElement('div');
    productCardInfoContainer.className = 'productCardInfoContainer';
    productCardInfoContainer.textContent = JSON.stringify(obj[i]);

    let info: string = JSON.stringify(obj[i]);
    let result: IResult = obj[i];
    let id: string = result.id;
    // let masterData: MasterData = result.masterData;
    // let masterVariant = masterData.current.masterVariant;

    catalogSection.append(productCardInfoContainer);

    // productCardInfoContainer.addEventListener('click', function () {
    //   openProductCard(id, masterData);
    // });
  }
}

export default class Products {
  /*
    productListTitle.createAndAppend();
  }*/
}
