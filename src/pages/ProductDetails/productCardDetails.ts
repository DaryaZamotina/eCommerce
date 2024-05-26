import TagCreator from '../../module/tagCreator';

export function createProductCard(id: string) {
  const productCard = new TagCreator(
    'div',
    'productCard',
    'productCard',
    'pageContainer',
    ``,
  );
  productCard.createAndAppend();

  const productTitle = new TagCreator(
    'div',
    'productTitle',
    'productTitle',
    'productCard',
    `good title id: ${id}`,
  );
  productTitle.createAndAppend();

  /* const goodImg = document.createElement('img');
      goodImg.src = '';
      goodImg.alt = '';
      productCard.append(goodImg); */
}
