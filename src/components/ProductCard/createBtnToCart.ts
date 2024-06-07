import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/products.css';
import { createCart } from '../../pages/Cart/createCart';

export function createButtonToCart(resultId: string) {
  const container = document.getElementById(`catalogContainer_${resultId}`);

  const btnToCart = document.createElement('button');
  btnToCart.className = 'btnToCart';
  btnToCart.id = 'btnToCart';
  container.append(btnToCart);

  /* const btnToCart = new TagCreator(
        'button',
        'btnToCart',
        'btnToCart',
        `catalogContainer_${resultId}`,
        ``,
      );
    btnToCart.createAndAppend(); */

  //const button = <HTMLButtonElement>document.getElementById("btnToCart");

  btnToCart.addEventListener('click', (e) => {
    //if(this==e.target)
    e.preventDefault();
    btnToCart.style.backgroundColor = 'red';
    //createCart();
    // e.stopImmediatePropagation();
    e.stopPropagation();
    //this.style.backgroundColor = 'red';
  });
}
