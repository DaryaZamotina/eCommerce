import { ICart } from '../Cart/cartInterface';
import getShoppingCart from './getShoppingCart';

export async function removeAllFromCart() {
  let id = localStorage.getItem('IDCart');
  const link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/carts/${id}`;

  let version: number;

  let info = JSON.parse(localStorage.getItem('newCart'));
  version = info.version;
  localStorage.setItem('versionOfCart', info.version);

  let token: string;
  if (
    localStorage.getItem('access_token_for_user') &&
    localStorage.getItem('access_token_for_user') !== 'undefined'
  )
    token = localStorage.getItem('access_token_for_user');
  else if (
    localStorage.getItem('anonym_access_token') &&
    localStorage.getItem('anonym_access_token') !== 'undefined'
  )
    token = localStorage.getItem('anonym_access_token');

  let cart: ICart = JSON.parse(localStorage.getItem('newCart'));
  let goods = cart.lineItems;

  let arrayData = [];

  for (let i = 0; i < goods.length; i++) {
    let goods = cart.lineItems;
    let lineItemID: string = goods[i].id;
    let variantOfGood: number = goods[i].variant.id;
    let quantity: number = goods[i].quantity;

    let objectData = {
      action: 'removeLineItem',
      lineItemId: lineItemID,
      variantId: variantOfGood,
      quantity: quantity,
    };
    arrayData.push(objectData);

    const cardProduct = document.getElementById(`cardProduct_${lineItemID}`);
    cardProduct.remove();
  }

  let data = JSON.stringify({
    version: Number(localStorage.getItem('versionOfCart')),
    actions: arrayData,
  });
  console.log('data = ' + data);

  async function removeProduct(url: string) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
    const resp = await response.json();
    return JSON.stringify(resp);
  }

  removeProduct(link)
    .then((output) => {
      localStorage.setItem('newCart', output);
      localStorage.setItem('versionOfCart', JSON.parse(output).version);
      getShoppingCart();

      let goodsNumber = document.getElementById('goodsNumber');

      if ((goodsNumber.style.display = 'none')) {
        goodsNumber.style.display = 'block';
      }

      let goodsNumberP = document.getElementById('goodsNumberP');
      let cart = JSON.parse(localStorage.getItem('newCart'));
      let numberOfGoods = String(cart.totalLineItemQuantity);

      goodsNumberP.textContent = numberOfGoods;

      if (numberOfGoods == 'undefined') {
        let goodsNumber = document.getElementById('goodsNumber');
        goodsNumber.style.display = 'none';
      }

      return output;
    })
    .catch((err) => console.log(err));
}
