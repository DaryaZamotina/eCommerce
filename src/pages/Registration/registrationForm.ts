import TagCreator from "../../module/tagCreator";
import CreateInputForForm from "../creatorInputForForm";
import InputsForFormRegistration from "../../Helpers/Inputs/InputsForFormRegistration";

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
  }
}
