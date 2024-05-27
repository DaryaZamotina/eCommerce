import TagCreator from '../../module/tagCreator';
import MasterData from '../../components/ProductCard/masterData';
import '../../../public/assets/css/body.css';
import '../../../public/assets/css/products.css';
import { getSlider } from './slider';

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

  const descriptionProd = masterData.current.description.en;

  const productDescription = new TagCreator(
    'div',
    'productDescription',
    'productDescription',
    'productCard',
    `${JSON.stringify(descriptionProd)}`,
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

  const productInfo = new TagCreator(
    'div',
    'productInfo ',
    'productInfo ',
    'productCard',
    `${JSON.stringify(categoriesImgs)}`,
  );
  productInfo.createAndAppend();

  const sliderWrapper = new TagCreator(
    'div',
    'sliderWrapper',
    'sliderWrapper',
    'productCard',
    `Slider for images of good will be here`,
  );
  sliderWrapper.createAndAppend();
}
