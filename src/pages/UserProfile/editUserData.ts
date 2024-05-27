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

let formDataOfNewUser = JSON.stringify({
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
});

// функция editUserData пока вызывается в navbar.ts и пока просто добавляет новую инфу про пользователя на страницу профиля

export function editUserData(token: string) {
  const link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/me`;

  async function postInfo(url: string) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: formDataOfNewUser,
    });
    const resp = await response.json();
    return JSON.stringify(resp);
  }

  postInfo(link)
    .then((info) => {
      localStorage.setItem('userDetails', info);
      console.log('userDetails = ' + info);
      const infoJSON = JSON.parse(info);

      const userProfileSection1 = document.getElementById(
        'userProfileSection1',
      );
      userProfileSection1.textContent = info;

      /* const userProfileSection1 = document.getElementById(
          'userProfileSection1',
        );
        userProfileSection1.textContent = "";
        userProfileSection1.textContent = info; */

      return info;
    })
    .catch((err) => console.log(err.message));
}
