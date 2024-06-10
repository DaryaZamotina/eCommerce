import { removeAllFromCart } from './removeAllFromCart';

export function createRemoveAllBtn() {
  let container = document.getElementById('shoppingCart_secondContaine');

  let buttonRemoveAll = document.createElement('button');
  buttonRemoveAll.className = 'buttonRemoveAll';
  buttonRemoveAll.id = 'buttonRemoveAll';
  buttonRemoveAll.textContent = 'Clear Shopping Cart';
  container.append(buttonRemoveAll);

  buttonRemoveAll.addEventListener('click', function () {
    removeAllFromCart();
  });
}
