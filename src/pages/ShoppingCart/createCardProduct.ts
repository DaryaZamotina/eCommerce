import TagCreator from '../../module/tagCreator';
import ICardProduct from './interfaceCardProduct';
import { LineItem } from './interfaceCardProduct';
import { removeOneGoodFromCart } from './removeOneGood';
import { getProductsListInfoFromEcomm } from '../../components/ProductCard/getProductDataFromEcomm';
import { receiveAnonymusAccessToken } from '../Home/anonymusSessionToken';
import { updateQuantity } from './updateQuantity';

export default class CreateCardProduct {
  private data: ICardProduct;

  constructor(data: ICardProduct) {
    this.data = data;
  }

  public createCard() {
    document.getElementById('totalCost').textContent =
      `${this.data.totalPrice.centAmount / 100} €`;

    document.getElementById('shoppingCart_mainContaine').innerHTML = '';

    this.data.lineItems.forEach((elem) => {
      this.createCardDiv(elem);
    });

    if (this.data.lineItems.length === 0) {
      this.emptyMessage();
    }
  }

  private createCardDiv(elem: LineItem) {
    const cardProduct = new TagCreator(
      'div',
      'cardProduct',
      `cardProduct_${elem.id}`,
      'shoppingCart_mainContaine',
    );
    cardProduct.createAndAppend();

    const cardProductImg = new TagCreator(
      'div',
      'cardProductImg',
      `cardProductImg_${elem.id}`,
      `cardProduct_${elem.id}`,
    );
    cardProductImg.createAndAppend();

    const img = document.getElementById(
      `cardProductImg_${elem.id}`,
    ) as HTMLDivElement;
    img.style.backgroundImage = `url(${elem.variant.images[0].url})`;

    const cardProductInfo = new TagCreator(
      'div',
      'cardProductInfo',
      `cardProductInfo_${elem.id}`,
      `cardProduct_${elem.id}`,
    );
    cardProductInfo.createAndAppend();

    const cardProductTitle = new TagCreator(
      'div',
      'cardProductTitle',
      `cardProductTitle_${elem.id}`,
      `cardProductInfo_${elem.id}`,
      elem.name.en,
    );
    cardProductTitle.createAndAppend();

    const cardProductTitlePrice = new TagCreator(
      'div',
      'cardProductTitlePrice',
      `cardProductTitlePrice_${elem.id}`,
      `cardProductInfo_${elem.id}`,
      'Price:',
    );
    cardProductTitlePrice.createAndAppend();

    const cardProductPrice = new TagCreator(
      'div',
      'cardProductPrice',
      `cardProductPrice_${elem.id}`,
      `cardProductInfo_${elem.id}`,
    );
    cardProductPrice.createAndAppend();

    let price: number;

    if (elem.price.discounted !== undefined) {
      price = elem.price.discounted.value.centAmount / 100;
    } else {
      price = elem.price.value.centAmount / 100;
    }

    const cardProductPriceNew = new TagCreator(
      'div',
      'cardProductPriceNew',
      `cardProductPriceNew_${elem.id}`,
      `cardProductPrice_${elem.id}`,
      `${price} €`,
    );
    cardProductPriceNew.createAndAppend();

    if (elem.price.discounted !== undefined) {
      const cardProductPriceOld = new TagCreator(
        'div',
        'cardProductPriceOld',
        `cardProductPriceOld_${elem.id}`,
        `cardProductPrice_${elem.id}`,
        `${elem.price.value.centAmount / 100} €`,
      );
      cardProductPriceOld.createAndAppend();
    }

    const cardProductQuantity = new TagCreator(
      'div',
      'cardProductQuantity',
      `cardProductQuantity_${elem.id}`,
      `cardProductInfo_${elem.id}`,
      `Quantity: ${elem.quantity}`,
    );
    cardProductQuantity.createAndAppend();

    const cardProductQuantityUpdate = new TagCreator(
      'input',
      'cardProductQuantityUpdate',
      `cardProductQuantityUpdate_${elem.id}`,
      `cardProductInfo_${elem.id}`,
      ``,
    );
    cardProductQuantityUpdate.createAndAppend();

    let quantityInput = <HTMLInputElement>(
      document.getElementById(`cardProductQuantityUpdate_${elem.id}`)
    );

    quantityInput.type = 'number';
    // quantityInput.step = "1";
    quantityInput.min = '1';
    quantityInput.max = '10';

    const infoError = new TagCreator(
      'div',
      'infoError',
      `infoError_${elem.id}`,
      `cardProductInfo_${elem.id}`,
      ' ',
    );
    infoError.createAndAppend();

    const buttonChangeQuantity = new TagCreator(
      'button',
      'buttonChangeQuantity',
      `buttonChangeQuantity_${elem.id}`,
      `cardProductInfo_${elem.id}`,
      `Change quantity`,
    );
    buttonChangeQuantity.createAndAppend();

    let cardProductQuant = document.getElementById(
      `cardProductQuantity_${elem.id}`,
    );

    quantityInput.addEventListener('input', () => {
      let info = document.getElementById(`infoError_${elem.id}`);

      if (
        (Number(quantityInput.value) > Number(quantityInput.min) &&
          Number(quantityInput.value) < Number(quantityInput.max) &&
          Number.isInteger(Number(quantityInput.value))) ||
        (quantityInput.value = '')
      ) {
        info.textContent = ' ';
      } else {
        info.textContent = 'Please enter only positive integer from 1 to 10';
        info.style.color = 'red';
      }

      cardProductQuant.textContent = `Quantity: ${quantityInput.value}`;
      updateQuantity(elem.id, Number(quantityInput.value));
    });

    const cardProductTitleTotalPrice = new TagCreator(
      'div',
      'cardProductTitleTotalPrice',
      `cardProductTitleTotalPrice_${elem.id}`,
      `cardProductInfo_${elem.id}`,
      `Total Price:`,
    );
    cardProductTitleTotalPrice.createAndAppend();

    const cardProductTotalPrice = new TagCreator(
      'div',
      'cardProductTotalPrice',
      `cardProductTotalPrice_${elem.id}`,
      `cardProductInfo_${elem.id}`,
      `${elem.totalPrice.centAmount / 100} €`,
    );
    cardProductTotalPrice.createAndAppend();

    //-----------------include remove from cart button
    const buttonDeleteFromCart = new TagCreator(
      'button',
      'buttonDeleteFromCart',
      `buttonDeleteFromCart_${elem.id}`,
      `cardProductInfo_${elem.id}`,
      'Remove',
    );

    buttonDeleteFromCart.createAndAppend();

    removeOneGoodFromCart(price, `${elem.id}`);

    //-----------------------
  }

  private emptyMessage() {
    const emptyMessageTitle = new TagCreator(
      'div',
      'emptyMessageTitle',
      `emptyMessageTitle`,
      'shoppingCart_mainContaine',
      'Your Cart is Empty!',
    );
    emptyMessageTitle.createAndAppend();

    const emptyMessage = new TagCreator(
      'div',
      'emptyMessage',
      `emptyMessage`,
      'shoppingCart_mainContaine',
      `Looks like you haven't added anything to your cart yet. Let's fix that! Explore our collection of beautiful furniture to find the perfect pieces for your home. Start shopping now and transform your space into a cozy, stylish haven!`,
    );
    emptyMessage.createAndAppend();

    const emptyMessageLink = new TagCreator(
      'a',
      'emptyMessageLink',
      `emptyMessageLink`,
      'shoppingCart_mainContaine',
      'Catalog',
    );
    emptyMessageLink.createAndAppend();
    emptyMessageLink.addAttribute('href', '#catalog');
    document
      .getElementById('emptyMessageLink')
      .addEventListener('click', () => {
        if (
          localStorage.getItem('access_token_for_user') &&
          localStorage.getItem('access_token_for_user') !== 'undefined'
        ) {
          getProductsListInfoFromEcomm(
            localStorage.getItem('access_token_for_user'),
          );
        } else if (
          localStorage.getItem('anonym_access_token') &&
          localStorage.getItem('anonym_access_token') !== 'undefined'
        ) {
          getProductsListInfoFromEcomm(
            localStorage.getItem('anonym_access_token'),
          );
        } else if (
          !localStorage.getItem('anonym_access_token') ||
          localStorage.getItem('anonym_access_token') == 'undefined' ||
          !localStorage.getItem('access_token_for_user') ||
          localStorage.getItem('access_token_for_user') == 'undefined'
        )
          if (!localStorage.getItem('anonym_token_auth')) {
            receiveAnonymusAccessToken();
          }
      });
  }
}
