export async function removeProductFromCart(id: string, idGood: string) {
  const link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/carts/${id}`;

  let version: number;

  let info = JSON.parse(localStorage.getItem('newCart'));
  version = info.version;

  let data = JSON.stringify({
    version: version,
    actions: [
      {
        action: 'removeLineItem',
        productId: idGood,
        variantId: Number(localStorage.getItem('variantOfGood')),
        quantity: 1,
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
    localStorage.getItem('anonym_access_token') &&
    localStorage.getItem('anonym_access_token') !== 'undefined'
  )
    token = localStorage.getItem('anonym_access_token');
  console.log('token' + token);

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
      return output;
    })
    .catch((err) => console.log(err));
}
