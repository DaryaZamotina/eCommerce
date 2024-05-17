import TagCreator from '../../module/tagCreator';
import CreateInputForForm from '../creatorInputForForm';
import InputsForFormRegistration from '../../Helpers/Inputs/InputsForFormRegistration';
import '../../../public/assets/css/body.css';
import { forwardRegDatatoServer } from '../Registration/sendDataToEcomm';
import { receiveAccessToken } from '../LoginPage/loginGetToken';
import '../../../public/assets/css/registrationForm.css';
import '../../../public/assets/css/button.css';
//import { puButtonSendDataToEcomm } from './buttonSendData';

export default class RegistrationForm {
  private id: string;
  private form: string;

  constructor(id: string, form: string) {
    this.form = form;
    this.id = id;
  }

  public createRegistrationForm() {
    const form = new TagCreator(
      'from',
      'registrationForm',
      'registrationForm',
      this.id,
    );
    form.createAndAppend();

    const formTitle = new TagCreator(
      "div",
      "formTitle",
      "formTitle",
      "registrationForm",
      "Registration",
    );
    formTitle.createAndAppend();

    const inputs = new CreateInputForForm(InputsForFormRegistration, this.form);
    inputs.createAndAppend();

    const buttonToSendRegDataToServer = document.getElementById('registrationForm__button') as HTMLButtonElement;

    buttonToSendRegDataToServer.addEventListener('click', function () {
      const tokenForAuth = localStorage.getItem('access_token_auth');
      forwardRegDatatoServer(tokenForAuth);
    });
  }
}