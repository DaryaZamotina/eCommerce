import TagCreator from '../../module/tagCreator';
//import CreateInputForForm from '../creatorInputForForm';
//import InputsForFormLogin from '../../Helpers/Inputs/InputsForFormLogin';
import '../../../public/assets/css/body.css';
import '../../../public/assets/css/button.css';
import '../../../public/assets/css/products.css';
import { getProductsListInfoFromEcomm } from './getProductDataFromEcomm';
import IResult from './InterfaceProduct';
//import HomePage from '../../pages/Home/homePage';

export function createProductsList(n: number, obj: Array<IResult>) {
  for (let i = 0; i < n; i++) {
    const productCardInfoContainer = document.createElement('div');
    productCardInfoContainer.className = 'productCardInfoContainer';
    productCardInfoContainer.textContent = JSON.stringify(obj[i]);

    const catalogSection = document.getElementById('catalogSection');
    catalogSection.append(productCardInfoContainer);
  }
}

export default class Products {
  /*private id: string;
  // private form: 'prod';

  constructor(id: string, form: 'prod') {
    //  this.form = form;
    this.id = id;
  }

  public createProductList() {
    const productList = new TagCreator(
      'div',
      'productList',
      'productList',
      'homeSection',
    );
    productList.createAndAppend();

    const productListTitle = new TagCreator(
      'div',
      'productListTitle',
      'productListTitle',
      'productList',
      'Our Products',
    );
    productListTitle.createAndAppend();
  }*/
}
