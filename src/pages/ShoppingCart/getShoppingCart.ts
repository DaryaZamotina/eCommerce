import CreateCardProduct from "./createCardProduct";

export default async function getShoppingCart() {
  let link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/carts/${localStorage.getItem('IDCart')}`;

  const response = await fetch(link, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('anonym_access_token')}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }

  const data = await response.json();

  console.log(data);

  const result = new CreateCardProduct(data);
  result.createCard();
}