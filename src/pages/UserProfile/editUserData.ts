import { IObjGeneralData } from './interfacesForObjectData';

/*
curl https://api.{region}.commercetools.com/{projectKey}/me -i \
--header 'Authorization: Bearer ${BEARER_TOKEN}' \
--header 'Content-Type: application/json' \
--data-binary @- << DATA 
{
  "version" : 3,
  "actions" : [ {
    "action" : "addAddress",
    "address" : {
      "streetName" : "Any Street",
      "streetNumber" : "1337",
      "postalCode" : "11111",
      "city" : "Any City",
      "country" : "US"
    }
  } ]
}
DATA
*/

// Вместо этой инфы ниже, нужно будет засунуть любую инфу из инпутов с
// измененными данными юзера. formDataOfNewUser приведен для примера

/*let formDataOfNewUser = JSON.stringify({
  version: 1,
  actions: [
    {
      action: 'addAddress',
      address: {
        streetName: 'Any Street',
        streetNumber: '1337',
        postalCode: '11111',
        city: 'Any City',
        country: 'US',
      },
    },
  ],
});*/

export function editUserData(token: string, obj: IObjGeneralData) {

  const id = localStorage.getItem('customerID');
  const link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/customers/${id}`;

  async function postInfo(url: string) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(obj),
    });
    const resp = await response.json();
    return JSON.stringify(resp);
  }

  postInfo(link)
    .then((info) => {
      localStorage.setItem('userDetails', info);
      console.log('userDetails = ' + info);
      const infoJSON = JSON.parse(info);
      return info;
    })
    .catch((err) => console.log(err.message));
}
