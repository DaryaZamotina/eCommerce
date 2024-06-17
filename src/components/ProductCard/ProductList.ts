import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/products.css';
//import CreateInputForForm from '../creatorInputForForm';
//import InputsForFormLogin from '../../Helpers/Inputs/InputsForFormLogin';
import '../../../public/assets/css/body.css';
import '../../../public/assets/css/button.css';
import '../../../public/assets/css/products.css';
import '../../../public/assets/css/productsInCatalog.css';
import { getProductsListInfoFromEcomm } from './getProductDataFromEcomm';
import IResult from './InterfaceProduct';
import { openProductCard } from './openProductCard';
import MasterData from './masterData';
import { getSlider } from '../../pages/ProductDetails/slider';

import { createButtonToCart } from './createBtnToCart';

import { getInfoFromEcommByIDofGood } from '../../pages/ProductDetails/getInfoFromEcommByIDofGood';
import { clearPageContainer } from '../..';
import { createProductCard } from '../../pages/ProductDetails/productCardDetails';
import { checkIsGoodInCart } from './infoIsGoodInCart';

import IResultNew from './InterfaceProductNew';
import { removeProductFromCart } from '../../pages/Cart/removeProductFromCart';
import { ICart } from '../../pages/Cart/cartInterface';

export function createProductsList(obj: Array<IResult>) {
  const catalogSection: HTMLElement = document.getElementById('catalogSection');
  if (catalogSection) {
    catalogSection.innerHTML = '';

    obj.forEach((elem) => {
      const tag = new ProductsCardInCatalog(elem);
      tag.createProductsCardInCatalog();
    });
  }
}

export default class ProductsCardInCatalog {
  private card: IResult;

  constructor(_card: IResult) {
    this.card = _card;
  }

  public createProductsCardInCatalog() {
    localStorage.setItem('variantOfGood', String(1));
    let result: IResultNew;
    let resultId: string;
    if ('masterData' in this.card) {
      result = this.card.masterData.current;
      resultId = this.card.id;
    } else {
      result = this.card;
      resultId = this.card.id;
    }

    const catalogContainer = new TagCreator(
      'div',
      'catalog__container',
      `catalogContainer_${resultId}`,
      'catalogSection',
    );
    catalogContainer.createAndAppend();

    this.openProduct(`catalogContainer_${resultId}`);

    const catalogContainerImg = new TagCreator(
      'div',
      'catalog__container_img',
      `catalogContainerImg_${resultId}`,
      `catalogContainer_${resultId}`,
    );
    catalogContainerImg.createAndAppend();

    const img = document.getElementById(
      `catalogContainerImg_${resultId}`,
    ) as HTMLDivElement;
    img.style.backgroundImage = `url(${result.masterVariant.images[0].url})`;

    const catalogTitle = new TagCreator(
      'div',
      'catalogTitle',
      `catalogTitle_${resultId}`,
      `catalogContainer_${resultId}`,
      result.name.en,
    );
    catalogTitle.createAndAppend();

    if (result.description !== undefined) {
      const catalogDescription = new TagCreator(
        'div',
        'catalogDescription',
        `catalogDescription_${resultId}`,
        `catalogContainer_${resultId}`,
        result.description.en,
      );
      catalogDescription.createAndAppend();
    }

    const catalogPrice = new TagCreator(
      'div',
      'catalogPrice',
      `catalogPrice_${resultId}`,
      `catalogContainer_${resultId}`,
    );
    catalogPrice.createAndAppend();

    let price: number;
    let oldPrice: number;

    if (result.masterVariant.prices[0].discounted !== undefined) {
      price = result.masterVariant.prices[0].discounted.value.centAmount / 100;
      oldPrice = result.masterVariant.prices[0].value.centAmount / 100;
    } else {
      price = result.masterVariant.prices[0].value.centAmount / 100;
    }

    const catalogPriceTitle = new TagCreator(
      'div',
      'catalogPriceTitle',
      `catalogPriceTitle_${resultId}`,
      `catalogPrice_${resultId}`,
      `${price} €`,
    );
    catalogPriceTitle.createAndAppend();

    if (result.masterVariant.prices[0].discounted !== undefined) {
      const catalogPriceTitleOld = new TagCreator(
        'div',
        'catalogPriceTitleOld',
        `catalogPriceTitleOld_${resultId}`,
        `catalogPrice_${resultId}`,
        `${oldPrice} €`,
      );
      catalogPriceTitleOld.createAndAppend();
    }

    createButtonToCart(resultId, price);

    if (result.masterVariant.prices[0].discounted !== undefined) {
      checkIsGoodInCart(resultId, oldPrice);
    } else checkIsGoodInCart(resultId, price);

    if (
      document.getElementById(`removeLink _${resultId}`) &&
      document.getElementById(`infoCheckIsInCart _${resultId}`)
    ) {
      let removeLink = document.getElementById(`removeLink _${resultId}`);
      let infoCheckIsInCart = document.getElementById(
        `infoCheckIsInCart _${resultId}`,
      );

      let buttonToCart = <HTMLButtonElement>(
        document.getElementById(`btnToCart_${resultId}`)
      );

      let cart: ICart = JSON.parse(localStorage.getItem('newCart'));
      let goods = cart.lineItems;

      for (let i = 0; i < goods.length; i++) {
        if (
          goods[i].productId == resultId &&
          price == goods[i].price.value.centAmount / 100
        ) {
          removeLink.textContent = 'Remove from cart';
          infoCheckIsInCart.textContent = 'Already in cart!';

          let lineItemID: string = goods[i].id;
          let variantOfGood: number = goods[i].variant.id;
          let quantity: number = goods[i].quantity;

          removeLink.addEventListener('click', function (e) {
            removeProductFromCart(
              localStorage.getItem('IDCart'),
              `${lineItemID}`,
              variantOfGood,
              quantity,
            );
            removeLink.remove();
            infoCheckIsInCart.remove();
            buttonToCart.disabled = false;
            e.stopPropagation();
          });
        }
      }
    }
  }

  private openProduct(id: string) {
    const card = document.getElementById(id) as HTMLDivElement;
    card.addEventListener('click', () => {
      localStorage.setItem('idofGood', this.card.id);

      if (
        localStorage.getItem('access_token_for_user') &&
        localStorage.getItem('access_token_for_user') !== 'undefined'
      ) {
        getInfoFromEcommByIDofGood(
          this.card.id,
          localStorage.getItem('access_token_for_user'),
        );
      } else if (
        localStorage.getItem('anonym_access_token') &&
        localStorage.getItem('anonym_access_token') !== 'undefined'
      ) {
        getInfoFromEcommByIDofGood(
          this.card.id,
          localStorage.getItem('anonym_access_token'),
        );
      }
    });
  }
}
