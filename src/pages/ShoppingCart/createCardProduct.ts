import TagCreator from '../../module/tagCreator';
import ICardProduct from './interfaceCardProduct';
import { LineItem } from './interfaceCardProduct';
import { removeOneGoodFromCart } from './removeOneGood';
import { updateQuantity } from './updateQuantity';

export default class CreateCardProduct {
  private data: ICardProduct;

  constructor(data: ICardProduct) {
    this.data = data;
  }

  public createCard() {
    this.data.lineItems.forEach((elem) => {
      this.createCardDiv(elem);
    });
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
      console.log('inputValue = ' + Number(quantityInput.value));
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
}
