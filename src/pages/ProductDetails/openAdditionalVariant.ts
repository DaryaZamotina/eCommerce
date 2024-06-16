import { clearPageContainer } from '../..';
import TagCreator from '../../module/tagCreator';
import IResult from '../../components/ProductCard/InterfaceProduct';
import { IPrices } from './pricesInterface';
import { createProductCard } from './productCardDetails';
import IVariant from '../../components/ProductCard/InterfaceVariant';
import { checkIsGoodInCart } from '../../components/ProductCard/infoIsGoodInCart';

export function openAdditionalVariant(additionalVariant: IVariant) {
  clearPageContainer();
  const choosenGood: IResult = JSON.parse(localStorage.getItem('choosenGood'));

  const choosenVariant = choosenGood.masterData.current.masterVariant;
  //localStorage.setItem("variantOfGood", choosenGood.masterData.current.variants);

  console.log('choosenVariants = ' + choosenVariant);
  const categoriesImgs = additionalVariant.images;
  createProductCard(choosenGood, choosenVariant, categoriesImgs);

  const price: Array<IPrices> = additionalVariant.prices;

  console.log('price = ' + JSON.stringify(price));

  const priceAmount = price[0].value.centAmount / 100;

  const productPrice = new TagCreator(
    'div',
    'productPrice',
    'productPrice',
    'priceContainer',
    `\u20ac ${priceAmount}`,
  );
  productPrice.createAndAppend();

  checkIsGoodInCart(localStorage.getItem('idofGood'), priceAmount);

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
}
