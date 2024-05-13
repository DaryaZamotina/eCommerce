import TagCreator from '../../module/tagCreator';
import CreateInputForForm from '../creatorInputForForm';
import InputsForFormRegistration from '../../Helpers/Inputs/InputsForFormRegistration';
import '../../../public/assets/css/body.css';
import { forwardRegDatatoServer } from '../Registration/sendDataToEcomm';
import { receiveAccessToken } from '../LoginPage/loginGetToken';

export default class RegistrationForm {
  constructor() {}

  public createRegistrationForm() {
    const form = new TagCreator(
      'from',
      'registrationForm',
      'registrationForm',
      'body',
    );
    form.createAndAppend();

    const inputs = new CreateInputForForm(InputsForFormRegistration);
    inputs.createAndAppend();

    const buttonToSendRegDataToServer: HTMLButtonElement =
      document.createElement('button');
    buttonToSendRegDataToServer.className = 'buttonToSendRegDataToServer';
    buttonToSendRegDataToServer.id = 'buttonToSendRegDataToServer';
    buttonToSendRegDataToServer.textContent = 'Send Data to Ecomm';
    buttonToSendRegDataToServer.type = 'button';

    const body = document.getElementById('body');
    body.append(buttonToSendRegDataToServer);

    buttonToSendRegDataToServer.addEventListener('click', function () {
      const tokenForAuth = localStorage.getItem('access_token_auth');
      forwardRegDatatoServer(tokenForAuth);
    });
  }
}
