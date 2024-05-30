import { createProductCard } from '../../pages/ProductDetails/productCardDetails';
import { clearPageContainer } from '../..';
import MasterData from './masterData';
import { getSlider } from '../../pages/ProductDetails/slider';
import { sliderMaker } from '../../pages/ProductDetails/sliderInterface';
import { getInfoFromEcommByIDofGood } from '../../pages/ProductDetails/getInfoFromEcommByIDofGood';

export function openProductCard(id?: string, masterData?: MasterData, token?: string) {
  clearPageContainer();
  //createProductCard(id);
  //sliderMaker(JSON.parse(localStorage.getItem('currentLinksToImgs')));
  // getSlider();

  // сюда еще добавить роутинг на страницу продукта
}
