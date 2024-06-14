import { addProductToCart } from './addProductToCart';

export async function createCart(id: string, token: string) {
  const urlToEcommForRegistration =
    'https://api.us-east-2.aws.commercetools.com/jffecommerce/carts';

  let data = JSON.stringify({
    currency: 'EUR',
  });

  async function createCartInfo(url: string) {
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

  createCartInfo(urlToEcommForRegistration)
    .then((output) => {
      localStorage.setItem('newCart', output);
      let outputObj = JSON.parse(output);
      localStorage.setItem('IDCart', outputObj.id);
      localStorage.setItem('versionOfCart', JSON.parse(output).version);
      addProductToCart(outputObj.id, id, token);

      return output;
    })
    .catch((err) => console.log(err + 2));
}
