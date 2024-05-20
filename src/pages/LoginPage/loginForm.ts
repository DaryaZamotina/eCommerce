import TagCreator from '../../module/tagCreator';
import CreateInputForForm from '../creatorInputForForm';
import InputsForFormLogin from '../../Helpers/Inputs/InputsForFormLogin';
import '../../../public/assets/css/body.css';
import '../../../public/assets/css/button.css';

export default class LoginForm {
  private id: string;
  private form: string;

  constructor(id: string, form: string) {
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

    const inputs = new CreateInputForForm(InputsForFormLogin, 'log');
    inputs.createAndAppend();

    /*const buttonRegistration = new TagCreator(
      'button',
      'buttonRegistration',
      'buttonRegistration',
      'buttonsWrapper',
      'Go to Registration',
    );
    buttonRegistration.createAndAppend();

    const buttonToMainPage = new TagCreator(
      'button',
      'buttonToMainPage',
      'buttonToMainPage',
      'buttonsWrapper',
      'Home',
    );
    buttonToMainPage.createAndAppend(); */

    const messageAboutError = new TagCreator(
      'div',
      'messageAboutError',
      'messageAboutError',
      'buttonsWrapper',
      '',
    );
    messageAboutError.createAndAppend();
  }
}
