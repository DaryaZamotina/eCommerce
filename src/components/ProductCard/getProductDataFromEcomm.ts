import { receiveAnonymusAccessToken } from '../../pages/Home/anonymusSessionToken';
import { createProductsList } from './ProductList';
import {
  displayTotalPages,
  resetCounterForPagination,
} from '../../utils/countPageForPagination';

export function getProductsListInfoFromEcomm(token: string) {
  const link =
    'https://api.us-east-2.aws.commercetools.com/jffstore/products?limit=8';

  async function getInfo(url: string) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const resp = await response.json();
    return JSON.stringify(resp);
  }

  getInfo(link)
    .then((info) => {
      localStorage.setItem('goods', info);

      const infoJSON = JSON.parse(info);

      displayTotalPages(infoJSON.total);
      resetCounterForPagination();

      createProductsList(infoJSON.results);

      return info;
    })
    .catch((err) => console.log(err.message));
}
