import { createUserProfile } from './createUserProfile';
import { IUser } from './userInterface';

export function getUserInfoFromEcomm(token: string) {
  let linkID: string;

  const linkMe = `https://api.us-east-2.aws.commercetools.com/jffecommerce/me`;

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

  if (localStorage.getItem('customerID')) {
    let id = localStorage.getItem('customerID');
    linkID = `https://api.us-east-2.aws.commercetools.com/jffecommerce/customers/${id}`;

    getInfo(linkID)
      .then((info) => {
        localStorage.setItem('userDetails', info);
        createUserProfile();

        return info;
      })
      .catch((err) => console.log(err.message));
  } else {
    getInfo(linkMe)
      .then((info) => {
        localStorage.setItem('userDetails', info);
        createUserProfile();

        return info;
      })
      .catch((err) => console.log(err.message));
  }
}
