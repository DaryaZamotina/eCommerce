import { IUser } from '../UserProfile/userInterface';
export function addIDofUserToCart(userID: string, versionOfCart?: number) {
  let token: string;
  if (
    localStorage.getItem('access_token_for_user') &&
    localStorage.getItem('access_token_for_user') !== 'undefined'
  )
    token = localStorage.getItem('access_token_for_user');
  else if (
    localStorage.getItem('access_token_auth') &&
    localStorage.getItem('access_token_auth') !== 'undefined'
  ) {
    token = localStorage.getItem('access_token_auth');
  } else if (
    localStorage.getItem('anonym_access_token') &&
    localStorage.getItem('anonym_access_token') !== 'undefined'
  )
    token = localStorage.getItem('anonym_access_token');

  let id = localStorage.getItem('IDCart');

  const link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/carts/${id}`;

  let version: number;

  if (versionOfCart) {
    version = versionOfCart;
  } else {
    let info = JSON.parse(localStorage.getItem('newCart'));
    version = info.version;
  }

  let data = JSON.stringify({
    version: version,
    actions: [
      {
        action: 'setCustomerId',
        customerId: userID,
      },
    ],
  });

  async function addProduct(url: string) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
    const resp = await response.json();
    return JSON.stringify(resp);
  }

  addProduct(link)
    .then((output) => {
      localStorage.setItem('newCart', output);
      localStorage.setItem('versionOfCart', JSON.parse(output).version);
      return output;
    })
    .catch((err) => console.log(err));
}
