import { createUserProfile } from './createUserProfile';

export function getUserInfoFromEcomm(token: string) {
  const link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/me`;

  console.log('token in getProdFunc = ' + token);

  async function getInfo(url: string) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const resp = await response.json();
    return JSON.stringify(resp);
  }

  getInfo(link)
    .then((info) => {
      localStorage.setItem('userDetails', info);
      createUserProfile();

      return info;
    })
    .catch((err) => console.log(err.message));
}
