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
  private form: 'log' | 'reg';
  private arrValidReg: boolean[];
  private arrValidLog: boolean[];

  constructor(arrImput: InputsType[], form: 'log' | 'reg') {
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
    ];
    this.arrValidLog = [
      false,
      false,
    ]
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
        if (this.form === 'reg') {
          this.addInputValidator(element.input.id, validateEmail, 0, 0, this.arrValidReg);
        }
        if (this.form === 'log') {
          this.addInputValidator(element.input.id, validateEmail, 0, 0, this.arrValidLog);
        }
      }
      
      if (element.input.attributes.type === "password") {
        if (this.form === 'reg') {
          this.addInputValidator(element.input.id, validatePassword, 1, 1, this.arrValidReg);
        }
        if (this.form === 'log') {
          this.addInputValidator(element.input.id, validatePassword, 1, 1, this.arrValidLog);
        }
      }

      if (element.input.id === "registrationForm__input_first_name") {
        this.addInputValidator(element.input.id, validateName, 2, 2, this.arrValidReg);
      }

      if (element.input.id === "registrationForm__input_second_name") {
        this.addInputValidator(element.input.id, validateName, 2, 3, this.arrValidReg);
      }

      if (element.input.id === "registrationForm__input_city") {
        this.addInputValidator(element.input.id, validateName, 2, 4, this.arrValidReg);
      }

      if (element.input.id === "registrationForm__input_street") {
        this.addInputValidator(element.input.id, validateStreet, 3, 5, this.arrValidReg);
      }

      if (element.input.id === "registrationForm__input_postcode") {
        this.addInputValidator(element.input.id, validatePostcode, 4, 6, this.arrValidReg);
      }

      if (element.input.attributes.type === "date") {
        this.addInputValidator(element.input.id, validateAge, 5, 7, this.arrValidReg);
        this.createSelectCountry();
      }
    });

    if (this.form === "reg") {
      this.createButton("Register");
      this.createLinc("Already have an account?", "Sing in");
    }

    if (this.form === "log") {
      this.createButton("Log In");
      this.createLinc("Don't have an account?", "Register");
    }
  }

  private addInputValidator(
    id: string,
    validationFunction: (value: string) => boolean,
    errorMessageIndex: number,
    validationIndex: number,
    arr: boolean[]
  ) {
    const input = document.getElementById(id) as HTMLInputElement;
    const errorElement = document.getElementById(
      `err__${id}`,
    ) as HTMLDivElement;

    input.addEventListener("input", () => {
      if (!validationFunction(input.value)) {
        input.classList.add("active");
        errorElement.textContent = errorMessages[errorMessageIndex];
        arr[validationIndex] = false;
      } else {
        input.classList.remove("active");
        errorElement.textContent = "";
        arr[validationIndex] = true;
      }
      if (this.form === 'reg') {
        this.checkButton(arr);
      }
      if (this.form === 'log') {
        this.checkButton(arr);
      }
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
      "Germany",
    );
    option2.createAndAppend();
    option2.addAttribute("value", "Germany");

    const option3 = new TagCreator(
      "option",
      "option",
      "option2",
      "selectCountry",
      "France",
    );
    option3.createAndAppend();
    option3.addAttribute("value", "France");
  }

  private createButton(textContent: string) {
    if (this.form === 'reg') {
      const button = new TagCreator(
        "button",
        "registrationForm__button disabled",
        "registrationForm__button",
        "registrationForm",
        textContent,
      )
      button.createAndAppend();
      button.addAttribute("disabled", "disabled");
    }
    if (this.form === 'log') {
      const button = new TagCreator(
        "button",
        "buttonLogin disabled",
        "buttonLogin",
        "loginForm",
        textContent,
      )
      button.createAndAppend();
      button.addAttribute("disabled", "disabled");
    }
  }

  private checkButton(arr: boolean[]) {
    let button: HTMLButtonElement;
    if (this.form === 'reg') {
      button = document.getElementById(
        "registrationForm__button",
      ) as HTMLButtonElement;
    }
    if (this.form === 'log') {
      button = document.getElementById(
        "buttonLogin",
      ) as HTMLButtonElement;
      console.log(9);
    }
    let sum = 0;
    arr.forEach((element) => {
      if (element) {
        sum += 1;
      }
      if (sum === arr.length) {
        console.log(1);
        button.removeAttribute("disabled");
        button.classList.remove("disabled");
      } else {
        button.setAttribute("disabled", "disabled");
        button.classList.add("disabled");
      }
    });
  }

  private createLinc(textContentTitle: string, textContentLinc: string) {
    let nameForm: string;
    if (this.form === 'reg') {
      nameForm = 'registrationForm';
    }
    if (this.form === 'log') {
      nameForm = 'loginForm'
    }
    
    const lincContainer = new TagCreator(
      "div",
      `${nameForm}__container_linc`,
      `${nameForm}__container_linc`,
      nameForm,
    );
    lincContainer.createAndAppend();
    
    const lincTitle = new TagCreator(
      "div",
      `${nameForm}__title_linc`,
      `${nameForm}__title_linc`,
      `${nameForm}__container_linc`,
      textContentTitle,
    );
    lincTitle.createAndAppend();

    const linc = new TagCreator(
      "a",
      `${nameForm}__linc`,
      `${nameForm}__linc`,
      `${nameForm}__container_linc`,
      textContentLinc,
    );
    linc.createAndAppend();
    linc.addAttribute("href", "#");
  }
}
