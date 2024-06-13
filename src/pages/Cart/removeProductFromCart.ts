import getShoppingCart from '../ShoppingCart/getShoppingCart';

export async function removeProductFromCart(
  id: string,
  lineItemId: string,
  variantOfGood: number,
  quantity: number,
) {
  const link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/carts/${id}`;

  let version: number;

  let info = JSON.parse(localStorage.getItem('newCart'));
  version = info.version;
  localStorage.setItem('versionOfCart', info.version);

  let data = JSON.stringify({
    version: Number(localStorage.getItem('versionOfCart')),
    actions: [
      {
        action: 'removeLineItem',
        lineItemId: lineItemId,
        variantId: variantOfGood,
        quantity: quantity,
      },
    ],
  });
  console.log('data = ' + data);

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

  async function removeProduct(url: string) {
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

  removeProduct(link)
    .then((output) => {
      localStorage.setItem('newCart', output);
      localStorage.setItem('versionOfCart', JSON.parse(output).version);
      getShoppingCart();
      return output;
    })
    .catch((err) => console.log(err));
}
