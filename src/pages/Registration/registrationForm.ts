import TagCreator from "../../module/tagCreator";
import CreateInputForForm from "../creatorInputForForm";
import InputsForFormRegistration from "../../Helpers/Inputs/InputsForFormRegistration";
import "../../../public/assets/css/body.css";

export default class RegistrationForm {
  constructor() {}

  public createRegistrationForm() {
    const form = new TagCreator(
      "from",
      "registrationForm",
      "registrationForm",
      "body",
    );
    form.createAndAppend();

    const inputs = new CreateInputForForm(InputsForFormRegistration);
    inputs.createAndAppend();
    
    // можно подумать о return form, чтобы контейнер формы передавать в роутер и там создавать экземпляр RegistrationForm.
    // form.createAndReturn();
    // return form;
  }
}
