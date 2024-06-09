import { ICart } from '../../pages/Cart/cartInterface';

export function checkIsGoodInCart(resultId: string, price: number) {
  let container;

  if (
    document.getElementById(`catalogContainer_${resultId}`) !== null ||
    document.getElementById(`catalogContainer_${resultId}`) !== undefined
  ) {
    container = document.getElementById(`catalogContainer_${resultId}`);
  }
  if (document.getElementById('productCard')) {
    container = document.getElementById('productCard');
  }

  const infoCheckIsInCart = document.createElement('div');
  infoCheckIsInCart.className = 'infoCheckIsInCart';
  infoCheckIsInCart.id = 'infoCheckIsInCart';
  infoCheckIsInCart.textContent = '';
  container.append(infoCheckIsInCart);

  if (localStorage.getItem('newCart')) {
    let cart: ICart = JSON.parse(localStorage.getItem('newCart'));
    let goods = cart.lineItems;

    for (let i = 0; i < goods.length; i++) {
      if (
        goods[i].productId == resultId &&
        price == goods[i].price.value.centAmount / 100
      )
        infoCheckIsInCart.textContent = 'Already in cart!';
    }
  }
}
