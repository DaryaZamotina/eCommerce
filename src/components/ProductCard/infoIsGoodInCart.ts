import { ICart } from '../../pages/Cart/cartInterface';
import { removeProductFromCart } from '../../pages/Cart/removeProductFromCart';

export function checkIsGoodInCart(
  resultId: string,
  price: number,
  token?: string,
) {
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
  infoCheckIsInCart.id = `infoCheckIsInCart_${resultId}`;
  infoCheckIsInCart.textContent = '';
  container.append(infoCheckIsInCart);

  const removeLink = document.createElement('div');
  removeLink.className = 'removeLink';
  removeLink.id = `removeLink _${resultId}`;
  removeLink.textContent = '';
  container.append(removeLink);

  if (localStorage.getItem('newCart')) {
    let cart: ICart = JSON.parse(localStorage.getItem('newCart'));
    let goods = cart.lineItems;

    for (let i = 0; i < goods.length; i++) {
      if (
        goods[i].productId == resultId &&
        price == goods[i].price.value.centAmount / 100
      ) {
        {
          removeLink.textContent = 'Remove from cart';
          container.append(removeLink);
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
        infoCheckIsInCart.textContent = 'Already in cart!';

        let lineItemID: string = goods[i].id;
        let variantOfGood: number = goods[i].variant.id;
        let quantity: number = goods[i].quantity;
        let buttonToCart = <HTMLButtonElement>(
          document.getElementById(`btnToCart_${resultId}`)
        );
        buttonToCart.disabled = true;

        /* removeLink.addEventListener('click', function (e) {
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
        });*/
      }
    }
  }
}
