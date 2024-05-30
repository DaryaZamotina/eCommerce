import { clearPageContainer } from '../..';
import { sliderMaker } from './sliderInterface';
import { getSlider } from './slider';
import TagCreator from '../../module/tagCreator';
import IResult from '../../components/ProductCard/InterfaceProduct';
import { IPrices } from './pricesInterface';
import { createProductCard } from './productCardDetails';

export function openAdditionalVariant() {
  clearPageContainer();

  const dataVariant = JSON.parse(localStorage.getItem('data of variant'));
  
  const choosenGood: IResult = JSON.parse(localStorage.getItem('choosenGood'));
  const choosenVariant = choosenGood.masterData.current.masterVariant;

  console.log('choosenVariants = ' + choosenVariant);
  //const additionalVariants = choosenGood.masterData.current.variants;

  const productCard = new TagCreator(
    'div',
    'productCard',
    'productCard',
    'pageContainer',
    ``,
  );
  productCard.createAndAppend();

  const btnBack = new TagCreator(
    'button',
    'btnBack',
    'btnBack',
    'productCard',
    `Back`,
  );
  btnBack.createAndAppend();

  const buttonBack = document.getElementById("btnBack");
  buttonBack.addEventListener("click", function() {
    clearPageContainer();
    createProductCard(localStorage.getItem('idofGood'));
  });

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

  //const categoriesImgs = choosenVariant.images;
  const categoriesImgs = dataVariant.images;

  let linksForImgs: Array<string> = [];

  for (let i = 0; i < categoriesImgs.length; i++) {
    let category = categoriesImgs[i];
    console.log(category['url']);
    linksForImgs[i] = category['url'];
  }
  console.log(linksForImgs);

  //const price: Array<IPrices> = choosenVariant.prices;
  const price: Array<IPrices> = dataVariant.prices;

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
}
