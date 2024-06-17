import TagCreator from '../../module/tagCreator';
import getShoppingCart from './getShoppingCart';
import { createRemoveAllBtn } from './createRemoveAllBtn';
import getDiscount from './getDiscount';
import CreateCardProduct from './createCardProduct';

export default function createShoppingCartPage() {
  const container = document.getElementById('pageContainer') as HTMLDivElement;
  container.innerHTML = '';

  const shoppingCartContainer = new TagCreator(
    'div',
    'shoppingCartContainer',
    'shoppingCartContainer',
    'pageContainer',
  );
  shoppingCartContainer.createAndAppend();

  const mainContainer = new TagCreator(
    'div',
    'shoppingCart_mainContaine',
    'shoppingCart_mainContaine',
    'shoppingCartContainer',
  );
  mainContainer.createAndAppend();

  const secondContainer = new TagCreator(
    'div',
    'shoppingCart_secondContaine',
    'shoppingCart_secondContaine',
    'shoppingCartContainer',
  );
  secondContainer.createAndAppend();

  const totalCostTitle = new TagCreator(
    'div',
    'totalCostTitle',
    'totalCostTitle',
    'shoppingCart_secondContaine',
    'Total Cost:',
  );
  totalCostTitle.createAndAppend();

  const totalCostContainer = new TagCreator(
    'div',
    'totalCostContainer',
    'totalCostContainer',
    'shoppingCart_secondContaine',
  );
  totalCostContainer.createAndAppend();

  const totalCost = new TagCreator(
    'div',
    'totalCost',
    'totalCost',
    'totalCostContainer',
  );
  totalCost.createAndAppend();

  const totalCostOld = new TagCreator(
    'div',
    'totalCostOld',
    'totalCostOld',
    'totalCostContainer',
  );
  totalCostOld.createAndAppend();

  const promocodeTitle = new TagCreator(
    'div',
    'promocodeTitle',
    'promocodeTitle',
    'shoppingCart_secondContaine',
    'Promocode',
  );
  promocodeTitle.createAndAppend();

  const promocodeInput = new TagCreator(
    'input',
    'promocodeInput',
    'promocodeInput',
    'shoppingCart_secondContaine',
  );
  promocodeInput.createAndAppend();
  promocodeInput.addAttribute('placeholder', 'Promocode');

  const promocodeButton = new TagCreator(
    'button',
    'promocodeButton',
    'promocodeButton',
    'shoppingCart_secondContaine',
    'Apply',
  );
  promocodeButton.createAndAppend();

  document.getElementById('promocodeButton').addEventListener('click', () => {
    const promocodeInput = document.getElementById(
      'promocodeInput',
    ) as HTMLInputElement;
    getDiscount(promocodeInput.value);
  });

  if (localStorage.getItem('IDCart') !== null) {
    getShoppingCart();
  } else {
    const result = new CreateCardProduct();
    result.createCard();
  }

  createRemoveAllBtn();
}
