import getShoppingCart from './getShoppingCart';

export default function getDiscount(promocode: string) {
  let token: string;
  if (
    localStorage.getItem('access_token_for_user') &&
    localStorage.getItem('access_token_for_user') !== 'undefined'
  )
    token = localStorage.getItem('access_token_for_user');
  else if (
    localStorage.getItem('anonym_access_token') &&
    localStorage.getItem('anonym_access_token') !== 'undefined'
  )
    token = localStorage.getItem('anonym_access_token');

  const requestBody = {
    version: Number(localStorage.getItem('versionOfCart')),
    actions: [
      {
        action: 'addDiscountCode',
        code: promocode,
      },
    ],
  };

  fetch(
    `https://api.us-east-2.aws.commercetools.com/jffstore/carts/${localStorage.getItem('IDCart')}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    },
  )
    .then((response) => response.json())
    .then((updatedCart) => {
      localStorage.setItem('versionOfCart', updatedCart.version);
      getShoppingCart();
    })
    .catch((error) => console.error('Error:', error));
}
