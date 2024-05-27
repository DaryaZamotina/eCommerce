import TagCreator from '../../module/tagCreator';
import MasterData from '../../components/ProductCard/masterData';
import '../../../public/assets/css/body.css';
import '../../../public/assets/css/products.css';

export function createProductCard(id: string, masterData: MasterData) {
  const productCard = new TagCreator(
    'div',
    'productCard',
    'productCard',
    'pageContainer',
    ``,
  );
  productCard.createAndAppend();

  const productName = new TagCreator(
    'div',
    'productTitle',
    'productTitle',
    'productCard',
    `Name of the good under id No. ${id}`,
  );
  productName.createAndAppend();

  const productDescription = new TagCreator(
    'div',
    'productDescription',
    'productDescription',
    'productCard',
    `Description of the choosen good: ${JSON.stringify(masterData)}`,
  );
  productDescription.createAndAppend();

  const sliderWrapper = new TagCreator(
    'div',
    'sliderWrapper',
    'sliderWrapper',
    'productCard',
    `Slider for images of good will be here`,
  );
  sliderWrapper.createAndAppend();

}
