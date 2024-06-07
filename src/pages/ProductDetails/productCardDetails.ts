import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/body.css';
import '../../../public/assets/css/products.css';
import IResult from '../../components/ProductCard/InterfaceProduct';
import { sliderMaker } from './sliderInterface';
import { getSlider } from './slider';
import AttributesView from '../../components/ProductCard/attributesView';
import { pageContainer } from '../..';
import IVariant from '../../components/ProductCard/InterfaceVariant';
import ISliderImage from './InterfaceSliderImage';

export function createProductCard(
  choosenGood: IResult,
  choosenVariant: IVariant,
  categoriesImgs: ISliderImage[],
) {
  const productCardTagCreator = new TagCreator(
    'div',
    'productCard',
    'productCard',
  );
  const productCard = productCardTagCreator.createAndReturn();

  pageContainer.getPageContainer().append(productCard);

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

  const btnToCart = new TagCreator(
    'button',
    'btnToCart',
    'btnToCart',
    'productCard',
    ``,
  );
  btnToCart.createAndAppend();

  let linksForImgs: Array<string> = [];

  for (let i = 0; i < categoriesImgs.length; i++) {
    let category = categoriesImgs[i];
    console.log(category['url']);
    linksForImgs[i] = category['url'];
  }
  console.log(linksForImgs);

  localStorage.setItem('currentLinksToImgs', JSON.stringify(linksForImgs));

  const priceContainer = new TagCreator(
    'div',
    'priceContainer',
    'priceContainer',
    'productCard',
    ``,
  );
  priceContainer.createAndAppend();

  const sliderWrapper = new TagCreator(
    'div',
    'sliderWrapper',
    'sliderWrapper',
    'productCard',
    ``,
  );
  sliderWrapper.createAndAppend();

  sliderMaker(linksForImgs);
  getSlider();

  const attributesContainer = new AttributesView(choosenGood);
  productCard.append(attributesContainer.getAttributeContainer());
}
