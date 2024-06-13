import '../../../public/assets/css/body.css';
import { receiveAccessToken } from '../LoginPage/loginGetToken';
import getDataUser from './getDataUser';
import {
  createModalWindow,
  handleClickCloseModalWindow,
} from '../../components/ModalWindow/modalWindow';
import '../../../public/assets/css/modal.css';
import { setHistoryPushStateToHome } from '../../components/Navbar/navbar';
import { setRoutingPage } from '../..';
import { getProductsListInfoFromEcomm } from '../../components/ProductCard/getProductDataFromEcomm';
import { getUserInfoFromEcomm } from '../UserProfile/getUserDataFromEcomm';
import { header } from '../..';
import { addIDofUserToCart } from '../Cart/addIDofUserToCart';

export async function forwardRegDatatoServer(accessTokenForAuth: string) {
  const urlToEcommForRegistration =
    'https://api.us-east-2.aws.commercetools.com/jffecommerce/customers';

  console.log(getDataUser());
  const formDataOfNewUser = JSON.stringify(getDataUser());

  async function sendNewUserInfo(url: string) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessTokenForAuth}`,
      },
      body: formDataOfNewUser,
    });
    const resp = await response.json();
    return JSON.stringify(resp);
  }

  sendNewUserInfo(urlToEcommForRegistration)
    .then((output) => {
      localStorage.setItem('newUser', output);
      let outputObj = JSON.parse(output);
      let error = outputObj.message;
      let customerID = outputObj.customer.id;
      console.log('customerID = ' + customerID);
      localStorage.setItem('customerID', customerID);

      console.log('message about error: ' + error);

      if (localStorage.getItem('newCart')) {
        addIDofUserToCart(customerID);
      }

      if (error == undefined) {
        //createModalWindow('Registration completed successfully!');
        console.log("Registration completed successfully!");
        //document.addEventListener('click', handleClickCloseModalWindow);

        if (
          localStorage.getItem('newUser') &&
          localStorage.getItem('newUser') !== 'undefined'
        ) {
          // const registrationForm = document.getElementById('registrationForm');
          // registrationForm.remove();
          header.getNavbar().addOrRemoveLinks();
          setRoutingPage();
        }
      } /*else if (
        error ==
        'There is already an existing customer with the provided email.'
      ) {
        createModalWindow(
          'There is already an existing customer with the provided data! Please enter the new correct ones or use our login form!',
        );
        document.addEventListener('click', handleClickCloseModalWindow);
      } */
      return output;
    })
    .catch((err) => console.log(err + 2));
}
