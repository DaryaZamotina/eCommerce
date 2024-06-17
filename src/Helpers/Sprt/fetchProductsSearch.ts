// import IResult from '../../components/ProductCard/InterfaceProduct';

// export default async function fetchProductsSearch() {
//   const url =
//     'https://api.us-east-2.aws.commercetools.com/jffecommerce/product-projections/search?text.en=mirror';
//   const queryParams = new URLSearchParams({
//     text: 'name.en=Nicole Mirror',
//     // 'query.fullText.language': 'en',
//     // 'value': `"bad"`,
//     // 'query.fullText.mustMatch': 'any'
//   });

//   const fullUrl = `${url}?${queryParams.toString()}`;

//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('anonym_access_token')}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(`Result fetchProductsSearch: ${result}`);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// }
