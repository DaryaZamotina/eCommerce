import TagCreator from '../../module/tagCreator';
import CreateInputForForm from '../creatorInputForForm';
import InputsForFormLogin from '../../Helpers/Inputs/InputsForFormLogin';
import '../../../public/assets/css/body.css';

export default class LoginForm {
  constructor() {}

  public createLoginForm() {
    const loginForm = new TagCreator('form', 'loginForm', 'loginForm', 'body');
    loginForm.createAndAppend();

    const loginFormTitle = new TagCreator('div', 'loginFormTitle', 'loginFormTitle', 'loginForm', 'Log In');
    loginFormTitle.createAndAppend();

    const buttonsWrapper = new TagCreator(
      'form',
      'buttonsWrapper',
      'buttonsWrapper',
      'body',
    );
    buttonsWrapper.createAndAppend();

    const inputs = new CreateInputForForm(InputsForFormLogin, 'log');
    inputs.createAndAppend();

    /*const buttonLogin = new TagCreator(
        "button",
        "buttonLogin",
        "buttonLogin",
        "buttonsWrapper",
        "Login"
      )
      buttonLogin.createAndAppend(); */

    // const buttonLogin: HTMLButtonElement = document.createElement('button');
    // buttonLogin.className = 'buttonLogin';
    // buttonLogin.id = 'buttonLogin';
    // buttonLogin.textContent = 'Login';

    // const body = document.getElementById('body');
    // body.append(buttonLogin);

    const buttonRegistration = new TagCreator(
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
    buttonToMainPage.createAndAppend();

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
