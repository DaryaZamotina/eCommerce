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

export function createProductsList(n: number, obj: Array<IResult>) {

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
    
    //productCardInfoContainer.textContent = JSON.stringify(masterVariant);

    /*let objVariants = JSON.parse(JSON.stringify(masterData));
    console.log("objVariants = " + objVariants);

    let numberOfVariants: number = JSON.stringify(masterData).split('').length;
    console.log("numberOfVariants = " + numberOfVariants);

    for (let j: number = 0; j < numberOfVariants; j++){
      const productVariantContainer: HTMLDivElement =
        document.createElement('div');
      productVariantContainer.className = 'productVariantContainer';
      productVariantContainer.textContent = JSON.stringify(objVariants[j]);
      console.log("JSON.stringify(objVariants[j]) = " + JSON.stringify(objVariants[j]));

      productCardInfoContainer.append(productVariantContainer);
    } */

    const catalogSection: HTMLElement =
      document.getElementById('catalogSection');
    catalogSection.append(productCardInfoContainer);

    productCardInfoContainer.addEventListener('click', function () {
      openProductCard(id, masterData);
    });
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
