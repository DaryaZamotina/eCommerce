import TagCreator from "../../module/tagCreator";
import CreateInputForForm from "../creatorInputForForm";
import InputsForFormLogin from "../../Helpers/Inputs/InputsForFormLogin";


export default class LoginForm {
    constructor() {}
  
    public createLoginForm() {
      const loginForm = new TagCreator(
        "from",
        "loginForm",
        "loginForm",
        "body",
      );
      loginForm.createAndAppend();
  
      const inputs = new CreateInputForForm(InputsForFormLogin);
      inputs.createAndAppend();

      const buttonLogin: HTMLButtonElement = document.createElement('button');
      buttonLogin.className = 'buttonLogin';
      buttonLogin.id = 'buttonLogin';
      buttonLogin.textContent = "Login";
      
      const body = document.getElementById("body");
      body.append(buttonLogin);
    }
  }
