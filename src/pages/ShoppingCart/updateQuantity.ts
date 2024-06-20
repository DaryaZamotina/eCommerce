import getShoppingCart from './getShoppingCart';

export function updateQuantity(idGood: string, quantity: number) {
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

  let info = JSON.parse(localStorage.getItem('newCart'));
  version = info.version;

  let data = JSON.stringify({
    version: version,
    actions: [
      {
        action: 'changeLineItemQuantity',
        lineItemId: idGood,
        quantity: quantity,
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

      let goodsNumber = document.getElementById('goodsNumber');

      if ((goodsNumber.style.display = 'none')) {
        goodsNumber.style.display = 'block';
      }

      let goodsNumberP = document.getElementById('goodsNumberP');
      let cart = JSON.parse(localStorage.getItem('newCart'));
      let numberOfGoods = String(cart.totalLineItemQuantity);
      goodsNumberP.textContent = numberOfGoods;

      if (numberOfGoods == 'undefined') {
        let goodsNumber = document.getElementById('goodsNumber');
        goodsNumber.style.display = 'none';
      }
      getShoppingCart();

      getShoppingCart();

      return output;
    })
    .catch((err) => {
      console.log(err);
    });
}
