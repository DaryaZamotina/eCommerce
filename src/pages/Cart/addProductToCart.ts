export async function addProductToCart(id: string, token: string) {
  const urlToEcommForRegistration =
    'https://api.us-east-2.aws.commercetools.com/jffecommerce/carts';

  let data = JSON.stringify({
    currency: 'EUR',
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

  addProduct(urlToEcommForRegistration)
    .then((output) => {
      localStorage.setItem('newCart', output);
      // let outputObj = JSON.parse(output);

      console.log('newCart: ' + output);

      return output;
    })
    .catch((err) => console.log(err + 2));
}
