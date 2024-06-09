import { createProductCard } from '../../pages/ProductDetails/productCardDetails';
import { clearPageContainer } from '../..';
import MasterData from './masterData';
import IResult from './InterfaceProduct';
import TagCreator from '../../module/tagCreator';
import { openAdditionalVariant } from '../../pages/ProductDetails/openAdditionalVariant';
import { checkIsGoodInCart } from './infoIsGoodInCart';

export function openProductCard(
  id?: string,
  masterData?: MasterData,
  token?: string,
) {
  clearPageContainer();
  const choosenGood: IResult = JSON.parse(localStorage.getItem('choosenGood'));
  localStorage.setItem('variantOfGood', '1');

  const choosenVariant = choosenGood.masterData.current.masterVariant;
  const additionalVariants = choosenGood.masterData.current.variants;
  const categoriesImgs = choosenVariant.images;
  const price = choosenVariant.prices;
  // localStorage.setItem("resultId", choosenGood.id);

  const priceAmount = price[0].value.centAmount / 100;
  createProductCard(choosenGood, choosenVariant, categoriesImgs);

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

  if (additionalVariants) {
    for (let j = 0; j < additionalVariants.length; j++) {
      let num = j + 2;
      const btnToNewVariants = new TagCreator(
        'button',
        'btnToNewVariants',
        'btnToNewVariants',
        'productCard',
        `See the additional variant ${j + 1}`,
      );
      btnToNewVariants.createAndAppend();

      const additionalVariant = additionalVariants[j];

      const btns = document.querySelectorAll('.btnToNewVariants');
      btns.forEach((btn) => {
        btn.addEventListener('click', () => {
          openAdditionalVariant(additionalVariant);
          localStorage.setItem('variantOfGood', String(num));
        });
      });
    }
  }

  // сюда еще добавить роутинг на страницу продукта
}
