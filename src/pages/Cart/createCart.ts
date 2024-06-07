/*
curl https://api.{region}.commercetools.com/{projectKey}/carts -i \
--header 'Authorization: Bearer ${BEARER_TOKEN}' \
--header 'Content-Type: application/json' \
--data-binary @- << DATA 
{
  "currency" : "EUR"
}
DATA
*/

export function createCart() {}
