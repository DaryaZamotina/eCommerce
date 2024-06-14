import CreateCardProduct from './createCardProduct';

export default async function getShoppingCart() {
  let link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/carts/${localStorage.getItem('IDCart')}`;

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

  const response = await fetch(link, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }

  const data = await response.json();

  const result = new CreateCardProduct(data);
  result.createCard();
}
