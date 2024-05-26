import { createProductCard } from '../../pages/ProductDetails/productCardDetails';
import { clearPageContainer } from '../..';

export function openProductCard(id?: string) {
  clearPageContainer();
  createProductCard(id);

  // сюда еще добавить роутинг на страницу продукта
}
