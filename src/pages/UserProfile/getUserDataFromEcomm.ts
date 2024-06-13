import { createUserProfile } from './createUserProfile';
import { IUser } from './userInterface';
import { getInfoFromInputs } from './getInfoFromInputs';
import { addIDofUserToCart } from '../Cart/addIDofUserToCart';


export function getUserInfoFromEcomm(token: string) {
  let linkID: string;

  const linkMe = `https://api.us-east-2.aws.commercetools.com/jffecommerce/me`;

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

      /*  if (localStorage.getItem('newCart')) {
          addIDofUserToCart(localStorage.getItem('customerID'));
        } */

        return info;
      })
      .catch((err) => console.log(err.message));
  } else {
    getInfo(linkMe)
      .then((info) => {
        localStorage.setItem('userDetails', info);

       /* if (localStorage.getItem('newCart')) {
          let user: IUser = JSON.parse(localStorage.getItem('userDetails'));
          let userID = user.id;
          console.log("userID = " + userID);
          let versionOfCart = Number(localStorage.getItem("versionOfCart"));
          addIDofUserToCart(userID, versionOfCart);
        }  */

        createUserProfile();
        getInfoFromInputs();

        return info;
      })
      .catch((err) => console.log(err.message));
  }
}
