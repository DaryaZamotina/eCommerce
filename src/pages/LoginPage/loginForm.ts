import TagCreator from '../../module/tagCreator';
import CreateInputForForm from '../creatorInputForForm';
import InputsForFormLogin from '../../Helpers/Inputs/InputsForFormLogin';
import '../../../public/assets/css/body.css';
import '../../../public/assets/css/button.css';
import { moveToRegistration } from './buttonsToRegToHome';
import { sendLoginPasswordToLocalStorage } from './inputsLoginPassword';
import { sendDataToEComm } from './loginAuthentification';

export default class LoginForm {
  private id: string;
  private form: 'log';

  constructor(id: string, form: 'log') {
    this.form = form;
    this.id = id;
  }

  public createLoginForm() {
    const loginForm = new TagCreator('form', 'loginForm', 'loginForm', this.id);
    loginForm.createAndAppend();

    const loginFormTitle = new TagCreator(
      'div',
      'loginFormTitle',
      'loginFormTitle',
      'loginForm',
      'Log In',
    );
    loginFormTitle.createAndAppend();

    const buttonsWrapper = new TagCreator(
      'form',
      'buttonsWrapper',
      'buttonsWrapper',
      'loginForm',
    );
    buttonsWrapper.createAndAppend();

    const inputs = new CreateInputForForm(InputsForFormLogin, this.form);
    inputs.createAndAppend();

    const messageAboutError = new TagCreator(
      'div',
      'messageAboutError',
      'messageAboutError',
      'buttonsWrapper',
      '',
    );
    messageAboutError.createAndAppend();

    sendLoginPasswordToLocalStorage();

    moveToRegistration();
  }
}
