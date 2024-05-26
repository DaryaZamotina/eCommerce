import TagCreator from '../../module/tagCreator';
import MasterData from '../../components/ProductCard/masterData';

export function createProductCard(id: string, masterData: MasterData) {
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

  const masterDataDiv = new TagCreator(
    'div',
    'masterDataDiv',
    'masterDataDiv',
    'productCard',
    `masterDataDiv: ${JSON.stringify(masterData)}`,
  );
  masterDataDiv.createAndAppend();

  /* const goodImg = document.createElement('img');
      goodImg.src = '';
      goodImg.alt = '';
      productCard.append(goodImg); */
}
