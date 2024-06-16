import { receiveAnonymusAccessToken } from '../../pages/Home/anonymusSessionToken';
import { createProductsList } from './ProductList';
import { setTotalNumberOfGoods } from '../../utils/constsForPagination';
import { displayTotalPages } from '../../utils/countPageForPagination';

export function getProductsListInfoFromEcomm(token: string) {
  const link =
    'https://api.us-east-2.aws.commercetools.com/jffecommerce/products?limit=8';

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

      // const numberOfGoods = infoJSON.results.length;

      // For pagination -----
      displayTotalPages(infoJSON.total);
      // console.log('total number of goods for pagination (getProductsListInfoFromEcomm): ' + infoJSON.total)
      // -----

      createProductsList(infoJSON.results);

      return info;
    })
    .catch((err) => console.log(err.message));
}
