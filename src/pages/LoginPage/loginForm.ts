import TagCreator from "../../module/tagCreator";
import CreateInputForForm from "../creatorInputForForm";
import InputsForFormLogin from "../../Helpers/Inputs/InputsForFormLogin";

export default class LoginForm {
    constructor() {}
  
    public createLoginForm() {
      const loginForm = new TagCreator(
        "form",
        "loginForm",
        "loginForm",
        "body",
      );
      loginForm.createAndAppend();

      const buttonsWrapper = new TagCreator(
        "form",
        "buttonsWrapper",
        "buttonsWrapper",
        "body",
      );
      buttonsWrapper.createAndAppend();

      const inputs = new CreateInputForForm(InputsForFormLogin);
      inputs.createAndAppend();

      const buttonLogin = new TagCreator(
        "button",
        "buttonLogin",
        "buttonLogin",
        "buttonsWrapper",
        "Login"
      )
      buttonLogin.createAndAppend();

      const buttonRegistration = new TagCreator(
        "button",
        "buttonRegistration",
        "buttonRegistration",
        "buttonsWrapper",
        "Go to Registration"
      )
      buttonRegistration.createAndAppend();
      const buttonToMainPage = new TagCreator(
        "button",
        "buttonToMainPage",
        "buttonToMainPage",
        "buttonsWrapper",
        "Home"
      )
      buttonToMainPage.createAndAppend();

      const messageAboutError = new TagCreator(
        "div",
        "messageAboutError",
        "messageAboutError",
        "buttonsWrapper"
      )
      messageAboutError.createAndAppend();
    }
  }
