import { receiveAnonymusAccessToken } from '../../pages/Home/anonymusSessionToken';
import { createProductsList } from './ProductList';

export function getProductsListInfoFromEcomm(token: string) {
  const link =
    'https://api.us-east-2.aws.commercetools.com/jffecommerce/products';

  // console.log('token in getProdFunc = ' + token);

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

      console.log(infoJSON.results);
      
      const numberOfGoods = infoJSON.results.length;
      console.log('numberOfGoods = ' + numberOfGoods);
      
      createProductsList(numberOfGoods, infoJSON.results);


      return info;
    })
    .catch((err) => console.log(err.message));
}
