import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/products.css';
import { createCart } from '../../pages/Cart/createCart';

export function createButtonToCart(resultId: string) {
  const container = document.getElementById(`catalogContainer_${resultId}`);

  const btnToCart = document.createElement('button');
  btnToCart.className = 'btnToCart';
  btnToCart.id = 'btnToCart';
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
        localStorage.getItem('anonym_access_token') &&
        localStorage.getItem('anonym_access_token') !== 'undefined'
      ) 
        token = localStorage.getItem("anonym_access_token");
    btnToCart.style.backgroundColor = 'red';
    createCart(resultId, token);
    e.stopPropagation();
   
  });
}
