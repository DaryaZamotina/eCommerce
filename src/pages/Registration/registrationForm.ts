import TagCreator from "../../module/tagCreator";
import CreateInputForForm from "../creatorInputForForm";
import InputsForFormRegistration from "../../Helpers/Inputs/InputsForFormRegistration";
import "../../../public/assets/css/body.css";
import "../../../public/assets/css/registrationForm.css";
import "../../../public/assets/css/button.css";

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

    const formTitle = new TagCreator(
      "div",
      "formTitle",
      "formTitle",
      "registrationForm",
      "Registration",
    );
    formTitle.createAndAppend();

    const inputs = new CreateInputForForm(InputsForFormRegistration, "reg");
    inputs.createAndAppend();
  }
}
