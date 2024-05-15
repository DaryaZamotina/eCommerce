import '../../../public/assets/css/body.css';
import { receiveAccessToken } from '../LoginPage/loginGetToken';

export async function forwardRegDatatoServer(accessTokenForAuth: string) {
  const urlToEcommForRegistration =
    'https://api.us-east-2.aws.commercetools.com/jffecommerce/customers';

  let formDataOfNewUser = JSON.stringify({
    email: 'test12@test.com',
    firstName: 'test12',
    lastName: 'test12',
    password: 'test12',
  });

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
      if (outputObj.statusCode == 400) {
        console.log('message about error: ' + outputObj.message);
      }
      return output;
    })
    .catch((err) => console.log(err));
}
