export async function addProductToCart(id: string, product_id: string, token: string) {
  const link =
    `https://api.us-east-2.aws.commercetools.com/jffecommerce/carts/${id}`;

  let data = JSON.stringify({
    action: 'addLineItem',
    productId: `${{product_id}}`,
    quantity: 1,
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
      localStorage.setItem('addingGood', output);
      // let outputObj = JSON.parse(output);

      console.log('addingGood: ' + output);

      return output;
    })
    .catch((err) => console.log(err));
}
