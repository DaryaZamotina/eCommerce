import TagCreator from '../module/tagCreator';
import { InputsType } from '../Helpers/Inputs/TypeInputs';
import validateEmail from '../Helpers/Inputs/validateEmail';
import validatePassword from '../Helpers/Inputs/validatePassword';
import validateName from '../Helpers/Inputs/validateName';
import validateStreet from '../Helpers/Inputs/validateStreet';
import validatePostcode from '../Helpers/Inputs/validatePostcode';
import validateAge from '../Helpers/Inputs/validateAge';
import errorMessages from '../Helpers/Inputs/errorMessages';

export default class CreateInputForForm {
  private arrImput: InputsType[];
  private form: 'log' | 'reg';
  private arrValidReg: boolean[];
  private arrValidRegOption: boolean[];
  private arrValidLog: boolean[];
  private optionAddress: boolean;

  constructor(arrImput: InputsType[], form: 'log' | 'reg') {
    this.arrImput = arrImput;
    this.form = form;
    this.arrValidReg = [false, false, false, false, false, false, false, false];
    this.arrValidLog = [false, false];
    this.arrValidRegOption = [false, false, false];
    this.optionAddress = false;
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
        'div',
        'registrationForm__error',
        `err__${element.input.id}`,
        element.container.id,
      );
      errorDiv.createAndAppend();

      if (element.input.attributes.type === 'email') {
        if (this.form === 'reg') {
          this.addInputValidator(
            element.input.id,
            validateEmail,
            0,
            0,
            this.arrValidReg,
          );
        }
        if (this.form === 'log') {
          this.addInputValidator(
            element.input.id,
            validateEmail,
            0,
            0,
            this.arrValidLog,
          );
        }
      }

      if (element.input.attributes.type === 'password') {
        if (this.form === 'reg') {
          this.addInputValidator(
            element.input.id,
            validatePassword,
            1,
            1,
            this.arrValidReg,
          );
        }
        if (this.form === 'log') {
          this.addInputValidator(
            element.input.id,
            validatePassword,
            1,
            1,
            this.arrValidLog,
          );
        }
      }

      if (element.input.id === 'registrationForm__input_first_name') {
        this.addInputValidator(
          element.input.id,
          validateName,
          2,
          2,
          this.arrValidReg,
        );
      }

      if (element.input.id === 'registrationForm__input_second_name') {
        this.addInputValidator(
          element.input.id,
          validateName,
          2,
          3,
          this.arrValidReg,
        );
      }

      if (element.input.id === 'registrationForm__input_city') {
        this.addInputValidator(
          element.input.id,
          validateName,
          2,
          4,
          this.arrValidReg,
        );
      }

      if (element.input.id === 'registrationForm__input_city_option') {
        this.addInputValidator(
          element.input.id,
          validateName,
          2,
          0,
          this.arrValidRegOption,
        );
      }

      if (element.input.id === 'registrationForm__input_street') {
        this.addInputValidator(
          element.input.id,
          validateStreet,
          3,
          5,
          this.arrValidReg,
        );
      }

      if (element.input.id === 'registrationForm__input_street_option') {
        this.addInputValidator(
          element.input.id,
          validateStreet,
          3,
          1,
          this.arrValidRegOption,
        );
      }

      if (element.input.id === 'registrationForm__input_postcode') {
        this.addInputValidator(
          element.input.id,
          validatePostcode,
          4,
          6,
          this.arrValidReg,
        );
        this.createRadioButton('One', 'Set as default address');
        this.createRadioButton('Two', 'Also use as billing address');
        this.createShippingBillingLine('Billing');
        this.createSelectCountry('_option');
      }

      if (element.input.id === 'registrationForm__input_postcode_option') {
        this.addInputValidator(
          element.input.id,
          validatePostcode,
          4,
          2,
          this.arrValidRegOption,
        );
        this.createRadioButton('Three', 'Set as default address');
      }

      if (element.input.attributes.type === 'date') {
        this.addInputValidator(
          element.input.id,
          validateAge,
          5,
          7,
          this.arrValidReg,
        );
        this.createShippingBillingLine('Shipping');
        this.createSelectCountry('');
      }
    });

    if (this.form === 'reg') {
      this.disabledAddressOption();
      this.createButton('Register');
      this.createLink('Already have an account?', 'Sing in');
    }

    if (this.form === 'log') {
      this.createButton('Log In');
      this.createLink("Don't have an account?", 'Register');
    }
  }

  private addInputValidator(
    id: string,
    validationFunction: (value: string) => boolean,
    errorMessageIndex: number,
    validationIndex: number,
    arr: boolean[],
  ) {
    const input = document.getElementById(id) as HTMLInputElement;
    const errorElement = document.getElementById(
      `err__${id}`,
    ) as HTMLDivElement;

    input.addEventListener('input', () => {
      if (!validationFunction(input.value)) {
        input.classList.add('active');
        errorElement.textContent = errorMessages[errorMessageIndex];
        arr[validationIndex] = false;
      } else {
        input.classList.remove('active');
        errorElement.textContent = '';
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

  private createSelectCountry(option: string) {
    const container = new TagCreator(
      'div',
      'registrationForm__container',
      `registrationForm__container_country${option}`,
      'registrationForm',
    );
    container.createAndAppend();

    const containerLabel = new TagCreator(
      'div',
      'registrationForm__label',
      `registrationForm__label_country${option}`,
      `registrationForm__container_country${option}`,
      'Country',
    );
    containerLabel.createAndAppend();

    const select = new TagCreator(
      'select',
      'selectCountry',
      `selectCountry${option}`,
      `registrationForm__container_country${option}`,
    );
    select.createAndAppend();

    const option1 = new TagCreator(
      'option',
      'option',
      `option1${option}`,
      `selectCountry${option}`,
      'US',
    );
    option1.createAndAppend();
    option1.addAttribute('value', 'US');

    const option2 = new TagCreator(
      'option',
      'option',
      `option2${option}`,
      `selectCountry${option}`,
      'Germany',
    );
    option2.createAndAppend();
    option2.addAttribute('value', 'Germany');

    const option3 = new TagCreator(
      'option',
      'option',
      `option2${option}`,
      `selectCountry${option}`,
      'France',
    );
    option3.createAndAppend();
    option3.addAttribute('value', 'France');
  }

  private createButton(textContent: string) {
    if (this.form === 'reg') {
      const button = new TagCreator(
        'button',
        'registrationForm__button disabled',
        'registrationForm__button',
        'registrationForm',
        textContent,
      );
      button.createAndAppend();
      button.addAttribute('disabled', 'disabled');
    }
    if (this.form === 'log') {
      const button = new TagCreator(
        'button',
        'buttonLogin disabled',
        'buttonLogin',
        'loginForm',
        textContent,
      );
      button.createAndAppend();
      button.addAttribute('disabled', 'disabled');
    }
  }

  private checkButton(arr: boolean[]) {
    let button: HTMLButtonElement;
    if (this.form === 'reg') {
      button = document.getElementById(
        'registrationForm__button',
      ) as HTMLButtonElement;
    }
    if (this.form === 'log') {
      button = document.getElementById('buttonLogin') as HTMLButtonElement;
    }
    let sum = 0;
    let sum1 = 0;
    let sum2 = 0;
    if (this.optionAddress) {
      this.arrValidRegOption.forEach((element) => {
        if (element) {
          sum1 += 1;
        }
      });
    }
    if (this.optionAddress) {
      this.arrValidReg.forEach((element) => {
        if (element) {
          sum2 += 1;
        }
      });
    }
    arr.forEach((element) => {
      if (element) {
        sum += 1;
      }
      if (
        (this.optionAddress && sum2 === 8 && sum1 === 3) ||
        (!this.optionAddress && sum === arr.length)
      ) {
        button.removeAttribute('disabled');
        button.classList.remove('disabled');
      } else {
        button.setAttribute('disabled', 'disabled');
        button.classList.add('disabled');
      }
    });
  }

  private createLink(textContentTitle: string, textContentLink: string) {
    let nameForm: string;
    if (this.form === 'reg') {
      nameForm = 'registrationForm';
    }
    if (this.form === 'log') {
      nameForm = 'loginForm';
    }

    const linkContainer = new TagCreator(
      'div',
      `${nameForm}__container_link`,
      `${nameForm}__container_link`,
      nameForm,
    );
    linkContainer.createAndAppend();

    const linkTitle = new TagCreator(
      'div',
      `${nameForm}__title_link`,
      `${nameForm}__title_link`,
      `${nameForm}__container_link`,
      textContentTitle,
    );
    linkTitle.createAndAppend();

    const link = new TagCreator(
      'a',
      `${nameForm}__link`,
      `${nameForm}__link`,
      `${nameForm}__container_link`,
      textContentLink,
    );
    link.createAndAppend();
    link.addAttribute('href', '#');
  }

  private createShippingBillingLine(id: string) {
    const shippingBillingLine = new TagCreator(
      'div',
      id,
      id,
      'registrationForm',
      `${id} address`,
    );
    shippingBillingLine.createAndAppend();
  }

  private createRadioButton(id: string, textContent: string) {
    const containerRadioButton = new TagCreator(
      'div',
      'containerRadioButton',
      `containerRadioButton${id}`,
      'registrationForm',
    );
    containerRadioButton.createAndAppend();

    const radioButton = new TagCreator(
      'div',
      'radioButton active',
      `radioButton${id}`,
      `containerRadioButton${id}`,
    );
    radioButton.createAndAppend();

    const radioSwitch = new TagCreator(
      'div',
      'radioSwitch active',
      `radioSwitch${id}`,
      `radioButton${id}`,
    );
    radioSwitch.createAndAppend();

    const redioTitle = new TagCreator(
      'div',
      'redioTitle',
      `redioTitle${id}`,
      `containerRadioButton${id}`,
      textContent,
    );
    redioTitle.createAndAppend();

    const radioButtonClick = document.getElementById(
      `radioButton${id}`,
    ) as HTMLDivElement;
    const radioSwitchClick = document.getElementById(
      `radioSwitch${id}`,
    ) as HTMLDivElement;

    radioButtonClick.addEventListener('click', () => {
      this.optionAddress = !this.optionAddress;
      radioButtonClick.classList.toggle('active');
      radioSwitchClick.classList.toggle('active');
      if (radioButtonClick.id === 'radioButtonTwo') {
        this.disabledAddressOption();
        // if (this.arrValidReg.length === 8) {
        //   this.arrValidReg = [false, false, false, false, false, false, false, false, false, false, false];
        // } else {
        //   this.arrValidReg = [false, false, false, false, false, false, false, false];
        // }
        const input = document.getElementById(
          'registrationForm__input_email',
        ) as HTMLInputElement;
        const event = new Event('input', {
          bubbles: true,
          cancelable: true,
        });
        input.dispatchEvent(event);
      }
    });
  }

  private disabledAddressOption() {
    const billing = document.getElementById('Billing') as HTMLDivElement;
    const country = document.getElementById(
      'registrationForm__container_country_option',
    ) as HTMLDivElement;
    const city = document.getElementById(
      'registrationForm__container_city_option',
    ) as HTMLDivElement;
    const street = document.getElementById(
      'registrationForm__container_street_option',
    ) as HTMLDivElement;
    const postcode = document.getElementById(
      'registrationForm__container_postcode_option',
    ) as HTMLDivElement;
    const radio = document.getElementById(
      'containerRadioButtonThree',
    ) as HTMLDivElement;
    if (billing.style.display !== 'none') {
      billing.style.display = 'none';
      country.style.display = 'none';
      city.style.display = 'none';
      street.style.display = 'none';
      postcode.style.display = 'none';
      radio.style.display = 'none';
    } else {
      billing.style.display = 'flex';
      country.style.display = 'flex';
      city.style.display = 'flex';
      street.style.display = 'flex';
      postcode.style.display = 'flex';
      radio.style.display = 'flex';
    }
  }
}
