import TagCreator from '../../module/tagCreator';
import getShoppingCart from './getShoppingCart';

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

  const totalCostTitle = new TagCreator('div', 'totalCostTitle', 'totalCostTitle', 'shoppingCart_secondContaine', 'Total Cost:');
  totalCostTitle.createAndAppend();

  const totalCost = new TagCreator('div', 'totalCost', 'totalCost', 'shoppingCart_secondContaine');
  totalCost.createAndAppend();

  getShoppingCart();
}
