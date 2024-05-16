import '../../../public/assets/css/body.css';
import { receiveAccessToken } from '../LoginPage/loginGetToken';
import getDataUser from './getDataUser';

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
      if (outputObj.statusCode == 400 || 200) {
        console.log('message about error: ' + outputObj.message);
      }
      return output;
    })
    .catch((err) => console.log(err));
}
