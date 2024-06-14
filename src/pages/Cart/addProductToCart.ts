export async function addProductToCart(
  id: string,
  idGood: string,
  token: string,
) {
  const link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/carts/${id}`;

  let version: number;

  let info = JSON.parse(localStorage.getItem('newCart'));
  version = info.version;

  let data = JSON.stringify({
    version: Number(localStorage.getItem('versionOfCart')),
    actions: [
      {
        action: 'addLineItem',
        productId: idGood,
        variantId: Number(localStorage.getItem('variantOfGood')),
        quantity: 1,
      },
    ],
  });
  console.log('data = ' + data);

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

      return output;
    })
    .catch((err) => console.log(err));
}
