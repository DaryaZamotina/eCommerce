import IResult from '../../components/ProductCard/InterfaceProduct';

export default async function fetchProductsSortedByPrice() {
  const response = await fetch(
    'https://api.us-east-2.aws.commercetools.com/jffecommerce/product-projections/search?sort=name.en desc',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('anonym_access_token')}`,
        'Content-Type': 'application/json',
      },
    },
  );

  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }

  const data = await response.json();

  for (let i = 0; i < data.results.length; i += 1) {
    console.log(data.results[i].name);
  }
}
