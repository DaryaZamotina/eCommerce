import TagCreator from '../../module/tagCreator';
import CreateInputForForm from '../creatorInputForForm';
import InputsForFormRegistration from '../../Helpers/Inputs/InputsForFormRegistration';
import '../../../public/assets/css/body.css';

export default class RegistrationForm {
  constructor() {}

  public createRegistrationForm() {
    const form = new TagCreator(
      'from',
      'registrationForm',
      'registrationForm',
      'body',
    );
    form.createAndAppend();

    const inputs = new CreateInputForForm(InputsForFormRegistration);
    inputs.createAndAppend();
  }
}

// Появляется ошибка, когда надо вставить форму регистрации в pageContainer. Из-за getElementById. Пишет, не может быть найдено значение null. Предлагаю убрать getElementById в этом файле и в требующихся ему файлах. Переделать под return element и отдельную строку append element.
/*
export default class RegistrationForm {
  registrationFormContainer: HTMLElement;

  constructor() {
    this.createRegistrationForm();
    this.registrationFormContainer = this.createRegistrationFormContainer();
  }

  public createRegistrationForm() {
    const form = new TagCreator(
      'form',
      'registrationForm',
      'registrationForm',
      'registrationFormContainer',
    );
    form.createAndAppend();

    const inputs = new CreateInputForForm(InputsForFormRegistration);
    inputs.createAndAppend();
  }

  createRegistrationFormContainer() {
    const regFormContainerTagCreator = new TagCreator(
      'div',
      'registration-form-container',
      'registrationFormContainer',
      'pageContainer',
    );
    this.registrationFormContainer = regFormContainerTagCreator.createAndReturn();
    const getRegForm = document.getElementById('registrationForm');

    this.registrationFormContainer.append(getRegForm);
    return this.registrationFormContainer;
  }
}
*/
