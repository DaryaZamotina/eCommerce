import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/products.css';
import { createCart } from '../../pages/Cart/createCart';
import { addProductToCart } from '../../pages/Cart/addProductToCart';
import { checkCartExistence } from '../../pages/Cart/checkCartExistence';
import IResult from './InterfaceProduct';
import { ICart } from '../../pages/Cart/cartInterface';
import { checkIsGoodInCart } from './infoIsGoodInCart';

export function createButtonToCart(resultId: string, price?: number) {
  let container: HTMLDivElement;

  if (
    document.getElementById(`catalogContainer_${resultId}`) !== null ||
    document.getElementById(`catalogContainer_${resultId}`) !== undefined
  ) {
    container = <HTMLDivElement>(
      document.getElementById(`catalogContainer_${resultId}`)
    );
  }
  if (document.getElementById('productCard')) {
    container = <HTMLDivElement>document.getElementById('productCard');
  }

  const btnToCart = document.createElement('button');
  btnToCart.className = 'btnToCart';
  btnToCart.id = `btnToCart_${resultId}`;
  container.append(btnToCart);

  btnToCart.addEventListener('click', (e) => {
    e.preventDefault();

    let token: string;
    if (
      localStorage.getItem('access_token_for_user') &&
      localStorage.getItem('access_token_for_user') !== 'undefined'
    )
      token = localStorage.getItem('access_token_for_user');
    else if (
      localStorage.getItem('access_token_auth') &&
      localStorage.getItem('access_token_auth') !== 'undefined'
    ) {
      token = localStorage.getItem('access_token_auth');
    } else if (
      localStorage.getItem('anonym_access_token') &&
      localStorage.getItem('anonym_access_token') !== 'undefined'
    )
      token = localStorage.getItem('anonym_access_token');

    btnToCart.disabled = true;

    if (document.getElementById(`infoCheckIsInCart_${resultId}`)) {
      let infoCheckIsInCart = document.getElementById(
        `infoCheckIsInCart_${resultId}`,
      );
      infoCheckIsInCart.textContent = 'Already in cart!';
    }

    if (document.getElementById(`removeLink _${resultId}`)) {
      let removeLink = document.getElementById(`removeLink _${resultId}`);
      removeLink.textContent = 'Remove from cart';
    }

    if (localStorage.getItem('newCart')) {
      addProductToCart(localStorage.getItem('IDCart'), `${resultId}`, token);
    } else {
      createCart(resultId, token);
      checkIsGoodInCart(resultId, price, token);
    }

    e.stopPropagation();
  });
}
