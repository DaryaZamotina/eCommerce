import ProductsCardInCatalog from '../../components/ProductCard/ProductList';
import IResult from '../../components/ProductCard/InterfaceProduct';
import IResultNew from '../../components/ProductCard/InterfaceProductNew';
import {
  setOffsetPagination,
  setSortPagination,
  setMethodPagination,
} from '../../utils/constsForPagination';
import { displayTotalPages } from '../../utils/countPageForPagination';
import { getLimitPagination } from '../../utils/constsForPagination';

export default async function fetchProductsSortedBy(
  sort: string,
  method: string,
  offset?: number,
) {
  setSortPagination(sort);
  let link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/product-projections/${sort}`;
  if (method !== undefined) {
    link += method;
    setMethodPagination(method);
  } else if (offset !== undefined) {
    link += `&offset=${offset}`;
    setOffsetPagination(offset);
  }
  link += `&limit=${getLimitPagination()}`;
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

  displayTotalPages(data.total);

  const obj: IResultNew[] = data.results;

  const catalogSection: HTMLElement = document.getElementById('catalogSection');

  if (obj.length > 0) {
   // catalogSection.innerHTML = '';
   if (catalogSection) {
    catalogSection.innerHTML = '';
  }
    obj.forEach((elem) => {
      const tag = new ProductsCardInCatalog(elem);
      tag.createProductsCardInCatalog();
    });
  }
}