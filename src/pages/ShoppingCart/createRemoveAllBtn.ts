import { removeAllFromCart } from './removeAllFromCart';
import { ICart } from '../Cart/cartInterface';
import { removeProductFromCart } from '../Cart/removeProductFromCart';

export function createRemoveAllBtn() {
  let container = document.getElementById('shoppingCart_secondContaine');

  let buttonRemoveAll = document.createElement('button');
  buttonRemoveAll.className = 'buttonRemoveAll';
  buttonRemoveAll.id = 'buttonRemoveAll';
  buttonRemoveAll.textContent = 'Remove All';
  container.append(buttonRemoveAll);

  buttonRemoveAll.addEventListener('click', function () {
    removeAllFromCart();
  });
}
