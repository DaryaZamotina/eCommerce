export async function addProductToCart(id: string, token: string) {
  const link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/carts/${id}`;
  
  let version: number;

    let info = JSON.parse(localStorage.getItem('newCart'));
    version = info.version;

  let data = JSON.stringify({
    version: version,
    actions: [
      {
        action: 'addLineItem',
        productId: localStorage.getItem('resultId'),
        variantId: 1,
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
      // let outputObj = JSON.parse(output);

      console.log('addingGood: ' + output);

      return output;
    })
    .catch((err) => console.log(err));
}
