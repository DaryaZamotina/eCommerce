import TagCreator from "../../module/tagCreator";

interface productCard {
    name: string;


}

export function createProductCard() {
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
        `good title: `,
      );
      productTitle.createAndAppend();

     /* const goodImg = document.createElement('img');
      goodImg.src = '';
      goodImg.alt = '';
      productCard.append(goodImg); */
}