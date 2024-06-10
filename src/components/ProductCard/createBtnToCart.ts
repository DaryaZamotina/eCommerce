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

  /* let infoCheckIsInCarts =
    container.getElementsByClassName('infoCheckIsInCart');

  let removeLinks = container.getElementsByClassName('removeLink');*/

  //----------------- checking
  /*
  if (localStorage.getItem('newCart')) {
    let cart: ICart = JSON.parse(localStorage.getItem('newCart'));
    let goods = cart.lineItems;

    for (let j = 0; j < infoCheckIsInCarts.length; j++) {
      for (let i = 0; i < goods.length; i++) {
        if (
          goods[i].productId == resultId &&
          price == goods[i].price.value.centAmount / 100
        )
          infoCheckIsInCarts[j].textContent = 'Already in cart!';

        let removeLink = document.getElementById(`removeLink _${resultId}`);
        removeLink.textContent = 'Remove from cart';
      }
    }
  }*/
  //-------------
  btnToCart.addEventListener('click', (e) => {
    e.preventDefault();
    // localStorage.setItem('idofGood', `${resultId}`);
    //  console.log("id = " + localStorage.getItem('idofGood'));
    //localStorage.setItem('resultId', `${resultId}`);

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

    //btnToCart.style.backgroundColor = 'red';
    btnToCart.disabled = true;

    let infoCheckIsInCart = document.getElementById(
      `infoCheckIsInCart_${resultId}`,
    );
    infoCheckIsInCart.textContent = 'Already in cart!';

    let removeLink = document.getElementById(`removeLink _${resultId}`);
    removeLink.textContent = 'Remove from cart';

    if (localStorage.getItem('newCart')) {
      addProductToCart(localStorage.getItem('IDCart'), `${resultId}`, token);
    } else {
      createCart(resultId, token);
      checkIsGoodInCart(resultId, price);

      /*     let cart: ICart = JSON.parse(localStorage.getItem('newCart'));
      let goods = cart.lineItems;

      for (let j = 0; j < infoCheckIsInCarts.length; j++) {
        for (let i = 0; i < goods.length; i++) {
          if (
            goods[i].productId == resultId &&
            price == goods[i].price.value.centAmount / 100
          )
            infoCheckIsInCart.textContent = 'Already in cart!';

            let removeLink = document.getElementById(`removeLink _${resultId}`);
            removeLink.textContent = 'Remove from cart';
        }
      }*/
    }

    e.stopPropagation();
  });
}
