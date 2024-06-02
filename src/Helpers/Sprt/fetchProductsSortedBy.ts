import ProductsCardInCatalog from '../../components/ProductCard/ProductList';
import IResult from '../../components/ProductCard/InterfaceProduct';
import IResultNew from '../../components/ProductCard/InterfaceProductNew';

export default async function fetchProductsSortedBy(
  sort: string,
  metod?: string,
) {
  let link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/product-projections/${sort}`;
  if (metod !== undefined) {
    link += metod;
    link += '&limit=30';
  }
  const response = await fetch(link, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('anonym_access_token')}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }

  const data = await response.json();

  const obj: IResultNew[] = data.results;

  obj.forEach((elem) => {
    console.log(elem.categories);
  });

  const catalogSection: HTMLElement = document.getElementById('catalogSection');
  catalogSection.innerHTML = '';

  obj.forEach((elem) => {
    const tag = new ProductsCardInCatalog(elem);
    tag.createProductsCardInCatalog();
  });
}

//https://api.us-east-2.aws.commercetools.com/jffecommerce/product-projections/search?filter.query=categories.id:"950ea710-9576-4fa2-8b58-9a7cd2df6a5a"&sort=name.en asc
//https://api.us-east-2.aws.commercetools.com/jffecommerce/product-projections/search?filter.query=categories.id:"e9d069eb-6d49-4c02-a2a3-b826a9b1851b","6d27bebe-8118-4149-a30a-9a23b3859c6d"&sort=name.en asc

//https://api.us-east-2.aws.commercetools.com/jffecommerce/product-projections/?limit=30

//https://api.us-east-2.aws.commercetools.com/jffecommerce/product-projections/search?sort=name.en asc
//https://api.us-east-2.aws.commercetools.com/jffecommerce/product-projections/search?sort=name.en desc

//https://api.us-east-2.aws.commercetools.com/jffecommerce/product-projections/search?sort=price asc
//https://api.us-east-2.aws.commercetools.com/jffecommerce/product-projections/search?sort=price desc
