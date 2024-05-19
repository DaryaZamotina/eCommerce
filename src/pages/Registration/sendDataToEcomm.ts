import '../../../public/assets/css/body.css';
import { receiveAccessToken } from '../LoginPage/loginGetToken';
import getDataUser from './getDataUser';
import { createModalWindow } from '../../components/ModalWindow/modalWindow';
import HomePage from '../../pages/Home/homePage';
import '../../../public/assets/css/modal.css';

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

      //if (outputObj.statusCode == 400 || 200) {
       console.log('message about error: ' + error);

       //createModalWindow(error);

        if (error == undefined) {
          createModalWindow("Registration completed successfully!");

          const registrationForm = document.getElementById('registrationForm');
          registrationForm.remove();

          const pageContainer = document.getElementById('pageContainer');
          const homePage = new HomePage();
          pageContainer.append(homePage.getHomePage());

        } else if (error == 'There is already an existing customer with the provided email.') {
          createModalWindow("There is already an existing customer with the provided data! Please enter the new correct ones or use our login form!");
        }

        const btnCloseModalWindow = document.getElementById(
          'btnCloseModalWindow',
        ) as HTMLButtonElement; 

        btnCloseModalWindow.addEventListener("click", function() {
          const modalWindow = document.getElementById("modalWindow");
          modalWindow.remove();
        }) 

     // }
      return output;
    })
    .catch((err) => console.log(err + 2));
}
