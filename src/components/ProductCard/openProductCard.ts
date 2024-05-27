import { createProductCard } from '../../pages/ProductDetails/productCardDetails';
import { clearPageContainer } from '../..';
import MasterData from './masterData';
import { getSlider } from '../../pages/ProductDetails/slider';

export function openProductCard(id?: string, masterData?: MasterData) {
  clearPageContainer();
  createProductCard(id, masterData);
  getSlider(JSON.parse(localStorage.getItem("currentLinksToImgs")));

  // сюда еще добавить роутинг на страницу продукта
}
