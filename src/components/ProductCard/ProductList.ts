import TagCreator from '../../module/tagCreator';
//import CreateInputForForm from '../creatorInputForForm';
//import InputsForFormLogin from '../../Helpers/Inputs/InputsForFormLogin';
import '../../../public/assets/css/body.css';
import '../../../public/assets/css/button.css';
import '../../../public/assets/css/products.css';
import { getProductsListInfoFromEcomm } from './getProductDataFromEcomm';
import IResult from './InterfaceProduct';
import { openProductCard } from './openProductCard';
import MasterData from './masterData';
import { getSlider } from '../../pages/ProductDetails/slider';
import { getInfoFromEcommByIDofGood } from '../../pages/ProductDetails/getInfoFromEcommByIDofGood';
import { clearPageContainer } from '../..';
import { createProductCard } from '../../pages/ProductDetails/productCardDetails';

export function createProductsList(n: number, obj: Array<IResult>) {
  const catalogSection: HTMLElement = document.getElementById('catalogSection');

  catalogSection.innerHTML = '';

  for (let i: number = 0; i < n; i++) {
    const productCardInfoContainer: HTMLDivElement =
      document.createElement('div');
    productCardInfoContainer.className = 'productCardInfoContainer';
    productCardInfoContainer.textContent = JSON.stringify(obj[i]);

    let info: string = JSON.stringify(obj[i]);
    let result: IResult = obj[i];
    let id: string = result.id;
    let masterData: MasterData = result.masterData;
    let masterVariant = masterData.current.masterVariant;

    catalogSection.append(productCardInfoContainer);

    productCardInfoContainer.addEventListener('click', function () {
      localStorage.setItem('idofGood', id);

      if (
        localStorage.getItem('access_token_for_user') &&
        localStorage.getItem('access_token_for_user') !== 'undefined'
      ) {
        getInfoFromEcommByIDofGood(
          id,
          localStorage.getItem('access_token_for_user'),
        );
      } else if (
        localStorage.getItem('anonym_access_token') &&
        localStorage.getItem('anonym_access_token') !== 'undefined'
      ) {
        getInfoFromEcommByIDofGood(
          id,
          localStorage.getItem('anonym_access_token'),
        );
      }
    });
  }
}
