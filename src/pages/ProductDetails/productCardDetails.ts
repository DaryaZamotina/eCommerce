import TagCreator from '../../module/tagCreator';
import MasterData from '../../components/ProductCard/masterData';
import '../../../public/assets/css/body.css';
import '../../../public/assets/css/products.css';
import { IPrices } from './pricesInterface';
import { getInfoFromEcommByIDofGood } from './getInfoFromEcommByIDofGood';
import IResult from '../../components/ProductCard/InterfaceProduct';
import { sliderMaker } from './sliderInterface';
import { getSlider } from './slider';

export function createProductCard(id: string) {
  const choosenGood: IResult = JSON.parse(localStorage.getItem('choosenGood'));

  const choosenVariant = choosenGood.masterData.current.masterVariant;
  console.log('choosenVariants = ' + choosenVariant);

  const productCard = new TagCreator(
    'div',
    'productCard',
    'productCard',
    'pageContainer',
    ``,
  );
  productCard.createAndAppend();
  //const nameProd = masterData.current.name.en;
  const nameProd = choosenGood.masterData.current.name.en;

  const headOfCard = new TagCreator(
    'h4',
    'headOfCard',
    'headOfCard',
    'productCard',
    `Product`,
  );
  headOfCard.createAndAppend();

  const productName = new TagCreator(
    'h3',
    'productTitle',
    'productTitle',
    'productCard',
    `${nameProd}`,
  );
  productName.createAndAppend();

  //const descriptionProd = masterData.staged.description.en;
  const descriptionProd = choosenGood.masterData.staged.description.en;
  const descriptionString = JSON.stringify(descriptionProd);
  const descriptionStringWithoutFirstLast = descriptionString.substring(
    1,
    descriptionString.length - 2,
  );
  console.log(descriptionStringWithoutFirstLast);

  const productDescription = new TagCreator(
    'div',
    'productDescription',
    'productDescription',
    'productCard',
    `${descriptionStringWithoutFirstLast}`,
  );
  productDescription.createAndAppend();

  //const info = JSON.stringify(masterData);
  //let categoriesImgs = masterData.current.masterVariant.images;
  const categoriesImgs = choosenVariant.images;

  let linksForImgs: Array<string> = [];

  for (let i = 0; i < categoriesImgs.length; i++) {
    let category = categoriesImgs[i];
    console.log(category['url']);
    linksForImgs[i] = category['url'];
  }
  console.log(linksForImgs);

  //localStorage.setItem('currentLinksToImgs', JSON.stringify(linksForImgs));
  //const price: Array<IPrices> = masterData.current.masterVariant.prices;

  const price: Array<IPrices> = choosenVariant.prices;

  /*const priceAmount = price[0].value.centAmount / 100;
  const priceDiscount = price[0].discounted.value.centAmount / 100;


  const priceContainer = new TagCreator(
    'div',
    'priceContainer',
    'priceContainer',
    'productCard',
    ``,
  );
  priceContainer.createAndAppend();

  const productPrice = new TagCreator(
    'div',
    'productPrice',
    'productPrice',
    'priceContainer',
    `${priceAmount}`,
  );
  productPrice.createAndAppend();

  const productPriceDiscount = new TagCreator(
    'div',
    'productPriceDiscount',
    'productPriceDiscount',
    'priceContainer',
    `${priceDiscount}`,
  );
  productPriceDiscount.createAndAppend();
*/
  const sliderWrapper = new TagCreator(
    'div',
    'sliderWrapper',
    'sliderWrapper',
    'productCard',
    ``,
  );
  sliderWrapper.createAndAppend();

  sliderMaker(linksForImgs);
  //sliderMaker(JSON.parse(localStorage.getItem('currentLinksToImgs')));
  getSlider();
}
