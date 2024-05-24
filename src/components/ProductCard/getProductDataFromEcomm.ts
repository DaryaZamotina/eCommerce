/*
curl --get https://api.us-east-2.aws.commercetools.com/jffecommerce/products -i \
 --header 'Authorization: Bearer BBPT-0EsrzB0WWIj5Iu_i2NQ1trWk1Rb'


$curl -sH "Authorization: Bearer vkFuQ6oTwj8_Ye4eiRSsqMeqLYNeQRJi" 
https://api.{region}.commercetools.com/{projectKey}/product-projections?staged=true&limit=10


*/
//import { receiveAccessToken } from "../../pages/LoginPage/loginGetToken";
import { receiveAnonymusAccessToken } from '../../pages/Home/anonymusSessionToken';

export function getProductsListInfoFromEcomm(token: string) {
  const link =
    'https://api.us-east-2.aws.commercetools.com/jffecommerce/products';
  //const token = localStorage.getItem('anonym_access_token');
 console.log("token in getProdFunc = " + token);

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

      const homeSection = document.getElementById("homeSection");
      homeSection.textContent = info;

      console.log('goods = ' + info);
      /*console.log('refresh_token_for_user = ' + infoJSON.refresh_token);
        localStorage.setItem('access_token_for_user', infoJSON.access_token);
        localStorage.setItem('refresh_token_for_user', infoJSON.refresh_token);*/

      return info;
    })
    .catch((err) => console.log(err.message));
}
