import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/products.css';
import { createCart } from '../../pages/Cart/createCart';
import { addProductToCart } from '../../pages/Cart/addProductToCart';
import { checkCartExistence } from '../../pages/Cart/checkCartExistence';

export function createButtonToCart(resultId: string) {
  const container = document.getElementById(`catalogContainer_${resultId}`);

  const btnToCart = document.createElement('button');
  btnToCart.className = 'btnToCart';
  btnToCart.id = 'btnToCart';
  container.append(btnToCart);

  btnToCart.addEventListener('click', (e) => {
    e.preventDefault();

    localStorage.setItem('resultId', resultId);

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

    btnToCart.style.backgroundColor = 'red';

    if (localStorage.getItem('newCart')) {
      addProductToCart(localStorage.getItem('IDCart'), token);
      //btnToCart.style.backgroundColor = 'green';
    } else {
      createCart(resultId, token);
    }
    /*
    if (localStorage.getItem("IDCart")) {
        let id = localStorage.getItem("IDCart");
        checkCartExistence(id, token);
    } */

    e.stopPropagation();
  });
}
