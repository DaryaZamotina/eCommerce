import TagCreator from '../../module/tagCreator';
import MasterData from '../../components/ProductCard/masterData';
import '../../../public/assets/css/body.css';
import '../../../public/assets/css/products.css';
import { IPrices } from './pricesInterface';
import { getInfoFromEcommByIDofGood } from './getInfoFromEcommByIDofGood';
import IResult from '../../components/ProductCard/InterfaceProduct';
import { sliderMaker } from './sliderInterface';
import { getSlider } from './slider';
import { openAdditionalVariant } from './openAdditionalVariant';
import AttributesView from '../../components/ProductCard/attributesView';
import PageContainer from '../../components/PageContainer/pageContainer';
import { pageContainer } from '../..';
import { openModaWindowForImgs } from './modalForImgs';

export function createProductCard(id?: string) {
  const choosenGood: IResult = JSON.parse(localStorage.getItem('choosenGood'));

  const choosenVariant = choosenGood.masterData.current.masterVariant;
  console.log('choosenVariants = ' + choosenVariant);
  const additionalVariants = choosenGood.masterData.current.variants;

  const productCardTagCreator = new TagCreator(
    'div',
    'productCard',
    'productCard',
    // 'pageContainer',
    ``,
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

  localStorage.setItem('currentLinksToImgs', JSON.stringify(linksForImgs));
  //const price: Array<IPrices> = choosenGood.masterData.current.masterVariant.prices;
  const price = choosenVariant.prices;
  //const price: Array<IPrices> = choosenVariant.prices;

  console.log('price = ' + JSON.stringify(price));

  const priceAmount = price[0].value.centAmount / 100;

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
    `\u20ac ${priceAmount}`,
  );
  productPrice.createAndAppend();

  if (price[0].discounted) {
    const prodPrice = document.getElementById('productPrice');
    prodPrice.style.textDecoration = 'line-through';
    const priceDiscount = price[0].discounted.value.centAmount / 100;

    const productPriceDiscount = new TagCreator(
      'div',
      'productPriceDiscount',
      'productPriceDiscount',
      'priceContainer',
      `\u20ac ${priceDiscount}`,
    );
    productPriceDiscount.createAndAppend();
  }

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

  const sliderWrapperDiv = <HTMLDivElement>(
    document.getElementById('sliderWrapper')
  );

  sliderWrapperDiv.addEventListener('click', function () {
    openModaWindowForImgs();
  });

  const attributesContainer = new AttributesView(choosenGood);
  productCard.append(attributesContainer.getAttributeContainer());

  if (additionalVariants) {
    for (let j = 0; j < additionalVariants.length; j++) {
      const btnToNewVariants = new TagCreator(
        'button',
        'btnToNewVariants',
        'btnToNewVariants',
        'productCard',
        `See the additional variant ${j + 1}`,
      );
      btnToNewVariants.createAndAppend();

      const data = additionalVariants[j];
      localStorage.setItem('data of variant', JSON.stringify(data));

      const btn = document.getElementById('btnToNewVariants');
      btn.addEventListener('click', openAdditionalVariant);
    }
  }
}
