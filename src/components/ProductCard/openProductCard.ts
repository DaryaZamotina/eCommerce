import { createProductCard } from '../../pages/ProductDetails/productCardDetails';
import { clearPageContainer } from '../..';
import MasterData from './masterData';

export function openProductCard(id?: string, masterData?: MasterData) {
  clearPageContainer();
  createProductCard(id, masterData);

  // сюда еще добавить роутинг на страницу продукта
}
