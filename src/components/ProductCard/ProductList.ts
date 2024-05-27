import TagCreator from '../../module/tagCreator';
//import CreateInputForForm from '../creatorInputForForm';
//import InputsForFormLogin from '../../Helpers/Inputs/InputsForFormLogin';
import '../../../public/assets/css/body.css';
import '../../../public/assets/css/button.css';
import '../../../public/assets/css/products.css';
import { getProductsListInfoFromEcomm } from './getProductDataFromEcomm';
import IResult from './InterfaceProduct';
//import HomePage from '../../pages/Home/homePage';
import { openProductCard } from './openProductCard';
import MasterData from './masterData';
import { getSlider } from '../../pages/ProductDetails/slider';

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
      openProductCard(id, masterData);
      getSlider(JSON.parse(localStorage.getItem("currentLinksToImgs")));
    });
  }
}

export default class Products {
  /*
    productListTitle.createAndAppend();
  }*/
}
