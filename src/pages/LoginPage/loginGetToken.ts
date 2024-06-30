import '../../../public/assets/css/body.css';
import { getProductsListInfoFromEcomm } from '../../components/ProductCard/getProductDataFromEcomm';
import {
  newClientForProducts,
  oneMoreClient,
} from '../Home/anonymusSessionToken';
import { IUser } from '../UserProfile/userInterface';
import { addIDofUserToCart } from '../Cart/addIDofUserToCart';

export const projectKey: string = 'jffstore';

interface APIclient {
  clientID: string;
  clientSecret: string;

  getKeyOfClient: () => string;
}

const api = 'https://auth.us-east-2.aws.commercetools.com/oauth/token';

export const testAPIclient: APIclient = {
  clientID: '4hGzQciW9_bymQYQVIueryeN',
  clientSecret: 'jXSrGYfznZ46cJXieD33kM0kaEhJ7-FN',

  getKeyOfClient(): string {
    return btoa(`${this.clientID}:${this.clientSecret}`);
  },
};

export const newClientJune: APIclient = {
  clientID: '4uIIJd6QQ__dbyg-QxfDbLIf',
  clientSecret: 'aYej4RLeuIRaexlTi7rrpaQ1FT0w95na',

  getKeyOfClient(): string {
    return btoa(`${this.clientID}:${this.clientSecret}`);
  },
};

export function receiveAccessToken() {
  async function getDataToken(url: string) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${newClientJune.getKeyOfClient()}`,
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: newClientJune.clientID,
        client_secret: newClientJune.clientSecret,
        //scope: `manage_customers:${projectKey}`,
      }),
    });
    const resp = await response.json();
    return JSON.stringify(resp);
  }

  getDataToken(api)
    .then((output) => {
      localStorage.setItem('token', output);
      const jsonToken = JSON.parse(output);
      const accessToken = jsonToken.access_token;
      localStorage.setItem('access_token_auth', accessToken);

      return output;
    })
    .catch((err) => console.log(err));
}
