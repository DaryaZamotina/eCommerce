import TagCreator from "../module/tagCreator";
import { InputsType } from "../Helpers/Inputs/TypeInputs";
import validateEmail from "../Helpers/Inputs/validateEmail";
import validatePassword from "../Helpers/Inputs/validatePassword";
import validateName from "../Helpers/Inputs/validateName";
import validateStreet from "../Helpers/Inputs/validateStreet";
import validatePostcode from "../Helpers/Inputs/validatePostcode";
import validateAge from "../Helpers/Inputs/validateAge";
import errorMessages from "../Helpers/Inputs/errorMessages";

export default class CreateInputForForm {
  private arrImput: InputsType[];
  private form: string;
  private arrValidReg: boolean[];

  constructor(arrImput: InputsType[], form?: string) {
    this.arrImput = arrImput;
    this.form = form;
    this.arrValidReg = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
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
        this.addInputValidator(element.input.id, validateEmail, 0, 0);
      }

      if (element.input.attributes.type === "password") {
        this.addInputValidator(element.input.id, validatePassword, 1, 1);
      }

      if (element.input.id === "registrationForm__input_first_name") {
        this.addInputValidator(element.input.id, validateName, 2, 2);
      }

      if (element.input.id === "registrationForm__input_second_name") {
        this.addInputValidator(element.input.id, validateName, 2, 3);
      }

      if (element.input.id === "registrationForm__input_city") {
        this.addInputValidator(element.input.id, validateName, 2, 4);
      }

      if (element.input.id === "registrationForm__input_street") {
        this.addInputValidator(element.input.id, validateStreet, 3, 5);
      }

      if (element.input.id === "registrationForm__input_postcode") {
        this.addInputValidator(element.input.id, validatePostcode, 4, 6);
      }

      if (element.input.attributes.type === "date") {
        this.addInputValidator(element.input.id, validateAge, 5, 7);
        this.createSelectCountry();
      }
    });

    if (this.form === "reg") {
      this.createButton("Register");
      this.createLinc("Already have an account?", "Sing in");
    }
  }

  private addInputValidator(
    id: string,
    validationFunction: (value: string) => boolean,
    errorMessageIndex: number,
    validationIndex: number,
  ) {
    const input = document.getElementById(id) as HTMLInputElement;
    const errorElement = document.getElementById(
      `err__${id}`,
    ) as HTMLDivElement;

    input.addEventListener("input", () => {
      if (!validationFunction(input.value)) {
        input.classList.add("active");
        errorElement.textContent = errorMessages[errorMessageIndex];
        this.arrValidReg[validationIndex] = false;
      } else {
        input.classList.remove("active");
        errorElement.textContent = "";
        this.arrValidReg[validationIndex] = true;
      }
      this.checkButton(this.arrValidReg);
    });
  }

  private createSelectCountry() {
    const container = new TagCreator(
      "div",
      "registrationForm__container",
      "registrationForm__container_country",
      "registrationForm",
    );
    container.createAndAppend();

    const containerLabel = new TagCreator(
      "div",
      "registrationForm__label",
      "registrationForm__label_country",
      "registrationForm__container_country",
      "Country",
    );
    containerLabel.createAndAppend();

    const select = new TagCreator(
      "select",
      "selectCountry",
      "selectCountry",
      "registrationForm__container_country",
    );
    select.createAndAppend();

    const option1 = new TagCreator(
      "option",
      "option",
      "option1",
      "selectCountry",
      "US",
    );
    option1.createAndAppend();
    option1.addAttribute("value", "US");

    const option2 = new TagCreator(
      "option",
      "option",
      "option2",
      "selectCountry",
      "UK",
    );
    option2.createAndAppend();
    option2.addAttribute("value", "UK");
  }

  private createButton(textContent: string) {
    const button = new TagCreator(
      "button",
      "registrationForm__button disabled",
      "registrationForm__button",
      "registrationForm",
      textContent,
    );
    button.createAndAppend();
    button.addAttribute("disabled", "disabled");
  }

  private checkButton(arr: boolean[]) {
    const button = document.getElementById(
      "registrationForm__button",
    ) as HTMLButtonElement;
    let sum = 0;
    arr.forEach((element, index) => {
      if (element) {
        sum += 1;
      }
      if (sum === 8) {
        button.removeAttribute("disabled");
        button.classList.remove("disabled");
      } else {
        button.setAttribute("disabled", "disabled");
        button.classList.add("disabled");
      }
    });
  }

  private createLinc(textContentTitle: string, textContentLinc: string) {
    const lincContainer = new TagCreator(
      "div",
      "registrationForm__container_linc",
      "registrationForm__container_linc",
      "registrationForm",
    );
    lincContainer.createAndAppend();

    const lincTitle = new TagCreator(
      "div",
      "registrationForm__title_linc",
      "registrationForm__title_linc",
      "registrationForm__container_linc",
      textContentTitle,
    );
    lincTitle.createAndAppend();

    const linc = new TagCreator(
      "a",
      "registrationForm__linc",
      "registrationForm__linc",
      "registrationForm__container_linc",
      textContentLinc,
    );
    linc.createAndAppend();
    linc.addAttribute("href", "#");
  }
}
