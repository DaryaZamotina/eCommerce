import { ICart } from '../Cart/cartInterface';
import { removeProductFromCart } from '../Cart/removeProductFromCart';

export function removeOneGoodFromCart(price?: number, id?: string) {
  const btnRemove = document.getElementById(`buttonDeleteFromCart_${id}`);

  let cart: ICart = JSON.parse(localStorage.getItem('newCart'));
  let goods = cart.lineItems;
  let lineItemID: string;
  let variantOfGood: number;
  let quantity: number;

  for (let i = 0; i < goods.length; i++) {
    if (goods[i].id == id) {
      lineItemID = goods[i].id;
      variantOfGood = goods[i].variant.id;
      quantity = goods[i].quantity;
    }
  }

  btnRemove.addEventListener('click', function () {
    removeProductFromCart(
      localStorage.getItem('IDCart'),
      lineItemID,
      variantOfGood,
      quantity,
    );

    const cardProduct = document.getElementById(`cardProduct_${id}`);
    cardProduct.remove();
  });
}
