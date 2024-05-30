import TagCreator from '../../module/tagCreator';
import MasterData from '../../components/ProductCard/masterData';
import '../../../public/assets/css/body.css';
import '../../../public/assets/css/products.css';
import { IPrices } from './pricesInterface';

export function createProductCard(id: string, masterData: MasterData) {
  const productCard = new TagCreator(
    'div',
    'productCard',
    'productCard',
    'pageContainer',
    ``,
  );
  productCard.createAndAppend();
  const nameProd = masterData.current.name.en;

  const productName = new TagCreator(
    'h3',
    'productTitle',
    'productTitle',
    'productCard',
    `Name of your choosen product - ${nameProd}! Great choice!`,
  );
  productName.createAndAppend();

  //const descriptionProd = masterData.current.description.en;
  const descriptionProd = masterData.staged.description.en;

  const productDescription = new TagCreator(
    'div',
    'productDescription',
    'productDescription',
    'productCard',
    `Description of this item: ${JSON.stringify(descriptionProd)}`,
  );
  productDescription.createAndAppend();

  const info = JSON.stringify(masterData);
  let categoriesImgs = masterData.current.masterVariant.images;

  let linksForImgs: Array<string> = [];

  for (let i = 0; i < categoriesImgs.length; i++) {
    let category = categoriesImgs[i];
    console.log(category['url']);
    linksForImgs[i] = category['url'];
  }
  console.log(linksForImgs);

  localStorage.setItem('currentLinksToImgs', JSON.stringify(linksForImgs));

  const price: Array<IPrices> = masterData.current.masterVariant.prices;

  const priceAmount = price[0].value.centAmount / 100;
  const priceDiscount = price[0].discounted.value.centAmount / 100;

  const productPrice = new TagCreator(
    'div',
    'productPrice',
    'productPrice',
    'productCard',
    `${priceAmount}`,
  );
  productPrice.createAndAppend();

  const productPriceDiscount = new TagCreator(
    'div',
    'productPriceDiscount',
    'productPriceDiscount',
    'productCard',
    `${priceDiscount}`,
  );
  productPriceDiscount.createAndAppend();

  const sliderWrapper = new TagCreator(
    'div',
    'sliderWrapper',
    'sliderWrapper',
    'productCard',
    ``,
  );
  sliderWrapper.createAndAppend();
}
