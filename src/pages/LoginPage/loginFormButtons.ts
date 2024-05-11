import TagCreator from "../../module/tagCreator";
import CreateInputForForm from "../creatorInputForForm";
import InputsForFormLogin from "../../Helpers/Inputs/InputsForFormLogin";


export default class LoginForm {
    constructor() {}
  
    public createRegistrationForm() {
      const loginForm = new TagCreator(
        "from",
        "loginForm",
        "loginForm",
        "body",
      );
      loginForm.createAndAppend();
  
      const inputs = new CreateInputForForm(InputsForFormLogin);
      inputs.createAndAppend();
    }
  }