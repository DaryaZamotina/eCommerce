import TagCreator from "../module/tagCreator";
import { InputsType } from "../Helpers/Inputs/TypeInputs";
import validateEmail from "../Helpers/Inputs/validateEmail";
import validatePassword from "../Helpers/Inputs/validatePassword";
import validateName from "../Helpers/Inputs/validateName";
import errorMessages from "../Helpers/Inputs/errorMessages";

export default class CreateInputForForm {
  private arrImput: InputsType[];

  constructor(arrImput: InputsType[]) {
    this.arrImput = arrImput;
  }

  public createAndAppend() {
    this.arrImput.forEach((element) => {
      const containerImput = new TagCreator(
        element.container.tag,
        element.container.class,
        element.container.id,
        element.container.id_parent,
        element.container.text_content,
      );
      containerImput.createAndAppend();

      const lable = new TagCreator(
        element.label.tag,
        element.label.class,
        element.label.id,
        element.label.id_parent,
        element.label.text_content,
      );
      lable.createAndAppend();

      for (let key in element.label.attributes) {
        lable.addAttribute(`${key}`, element.label.attributes[key]);
      }

      const input = new TagCreator(
        element.input.tag,
        element.input.class,
        element.input.id,
        element.input.id_parent,
        element.input.text_content,
      );
      input.createAndAppend();

      for (let key in element.input.attributes) {
        input.addAttribute(`${key}`, element.input.attributes[key]);
      }

      const errorDiv = new TagCreator(
        "div",
        "registrationForm__error",
        `err__${element.input.id}`,
        element.container.id,
      );
      errorDiv.createAndAppend();

      if (element.input.attributes.type === "email") {
        this.validateEmail(element.input.id);
      }

      if (element.input.attributes.type === "password") {
        this.validatePassword(element.input.id);
      }

      if (
        element.input.id === "registrationForm__input_first_name" ||
        element.input.id === "registrationForm__input_second_name"
      ) {
        this.validateName(element.input.id);
      }
    });
  }

  private validateEmail(id: string) {
    const inputEmail = document.getElementById(id) as HTMLInputElement;
    const errInputEmail = document.getElementById(
      `err__${id}`,
    ) as HTMLDivElement;
    inputEmail.addEventListener("input", () => {
      if (!validateEmail(inputEmail.value)) {
        inputEmail.classList.add("active");
        errInputEmail.textContent = errorMessages[0];
      } else {
        inputEmail.classList.remove("active");
        errInputEmail.textContent = "";
      }
    });
  }

  private validatePassword(id: string) {
    const inputPassword = document.getElementById(id) as HTMLInputElement;
    const errInputPassword = document.getElementById(
      `err__${id}`,
    ) as HTMLDivElement;
    inputPassword.addEventListener("input", () => {
      if (!validatePassword(inputPassword.value)) {
        inputPassword.classList.add("active");
        errInputPassword.textContent = errorMessages[1];
      } else {
        inputPassword.classList.remove("active");
        errInputPassword.textContent = "";
      }
    });
  }

  private validateName(id: string) {
    const inputName = document.getElementById(id) as HTMLInputElement;
    const errInputName = document.getElementById(
      `err__${id}`,
    ) as HTMLDivElement;
    inputName.addEventListener("input", () => {
      if (!validateName(inputName.value)) {
        inputName.classList.add("active");
        errInputName.textContent = errorMessages[2];
      } else {
        inputName.classList.remove("active");
        errInputName.textContent = "";
      }
    });
  }
}
