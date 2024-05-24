import '../../../public/assets/css/body.css';
import { projectKey } from '../LoginPage/loginGetToken';
import { getProductsListInfoFromEcomm } from '../../components/ProductCard/getProductDataFromEcomm';

//const api = `https://auth.us-east-2.aws.commercetools.com/oauth/token`;
const api = `https://auth.us-east-2.aws.commercetools.com/oauth/${projectKey}/anonymous/token`;

interface APIclient {
  clientID: string;
  clientSecret: string;

  getKeyOfClient: () => string;
}

export const firstAPIclient: APIclient = {
  clientID: 'ZqlDZy6cGA7Orkp0w9s2wLt-',
  clientSecret: '97HG1cNT6JHpjXp0Tk6KoRdTUepnNeVN',

  getKeyOfClient(): string {
    return btoa(`${this.clientID}:${this.clientSecret}`);
  },
};

export const newClientForProducts: APIclient = {
  clientID: 'prbJGzm9SX_IQmd4rCebdASm',
  clientSecret: 'NzK4PIQznLSKXS9MGnyzZ0gQNsW3sZ1v',

  getKeyOfClient(): string {
    return btoa(`${this.clientID}:${this.clientSecret}`);
  },
};

export function receiveAnonymusAccessToken() {
  async function getAnonymusToken(url: string) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${newClientForProducts.getKeyOfClient()}`,
        //'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        //scope: `create_anonymous_token:${projectKey}`,
        //client_id: newClientForProducts.clientID,
       //client_secret: newClientForProducts.clientSecret,
        //scope: `create_anonymous_token:${projectKey} view_products:${projectKey} manage_my_orders:${projectKey} manage_my_profile:${projectKey}`,
      }),
    });
    const resp = await response.json();
    return JSON.stringify(resp);
  }

  getAnonymusToken(api)
    .then((output) => {
      localStorage.setItem('anonym_token', output);
      const jsonToken = JSON.parse(output);
      const anonymAccessToken = jsonToken.access_token;
      localStorage.setItem('anonym_access_token', anonymAccessToken);
      let tokenForGoods = localStorage.getItem('anonym_access_token');
      getProductsListInfoFromEcomm(tokenForGoods);
      console.log('anonym_access_token = ' + anonymAccessToken);
      return output;
    })
    .catch((err) => console.log(err));
}
