export default [
  {
    container: {
      tag: 'div',
      class: 'registrationForm__container_email',
      id: 'registrationForm__container_email',
      id_parent: 'registrationForm',
      text_content: '',
    },
    label: {
      tag: 'label',
      class: 'registrationForm__label_email',
      id: 'registrationForm__label_email',
      id_parent: 'registrationForm__container_email',
      text_content: 'Mail',
      attributes: {
        for: 'email',
      },
    },
    input: {
      tag: 'input',
      class: 'registrationForm__input_email',
      id: 'registrationForm__input_email',
      id_parent: 'registrationForm__container_email',
      text_content: '',
      attributes: {
        type: 'email',
        placeholder: 'example@email.com',
      },
    },
  },
  {
    container: {
      tag: 'div',
      class: 'registrationForm__container_password',
      id: 'registrationForm__container_password',
      id_parent: 'registrationForm',
      text_content: '',
    },
    label: {
      tag: 'label',
      class: 'registrationForm__label_password',
      id: 'registrationForm__label_password',
      id_parent: 'registrationForm__container_password',
      text_content: 'Password',
      attributes: {
        for: 'password',
      },
    },
    input: {
      tag: 'input',
      class: 'registrationForm__input_password',
      id: 'registrationForm__input_password',
      id_parent: 'registrationForm__container_password',
      text_content: '',
      attributes: {
        type: 'password',
        placeholder: 'password',
      },
    },
  },
  {
    container: {
      tag: 'div',
      class: 'registrationForm__container_first_name',
      id: 'registrationForm__container_first_name',
      id_parent: 'registrationForm',
      text_content: '',
    },
    label: {
      tag: 'label',
      class: 'registrationForm__label_first_name',
      id: 'registrationForm__label_first_name',
      id_parent: 'registrationForm__container_first_name',
      text_content: 'First name',
      attributes: {
        for: 'text',
      },
    },
    input: {
      tag: 'input',
      class: 'registrationForm__input_first_name',
      id: 'registrationForm__input_first_name',
      id_parent: 'registrationForm__container_first_name',
      text_content: '',
      attributes: {
        type: 'text',
        placeholder: 'First name',
      },
    },
  },
  {
    container: {
      tag: 'div',
      class: 'registrationForm__container_second_name',
      id: 'registrationForm__container_second_name',
      id_parent: 'registrationForm',
      text_content: '',
    },
    label: {
      tag: 'label',
      class: 'registrationForm__label_second_name',
      id: 'registrationForm__label_second_name',
      id_parent: 'registrationForm__container_second_name',
      text_content: 'Second name',
      attributes: {
        for: 'text',
      },
    },
    input: {
      tag: 'input',
      class: 'registrationForm__input_second_name',
      id: 'registrationForm__input_second_name',
      id_parent: 'registrationForm__container_second_name',
      text_content: '',
      attributes: {
        type: 'text',
        placeholder: 'Second name',
      },
    },
  },
  {
    container: {
      tag: 'div',
      class: 'registrationForm__container_date',
      id: 'registrationForm__container_date',
      id_parent: 'registrationForm',
      text_content: '',
    },
    label: {
      tag: 'label',
      class: 'registrationForm__label_date',
      id: 'registrationForm__label_date',
      id_parent: 'registrationForm__container_date',
      text_content: 'Date',
      attributes: {
        for: 'text',
      },
    },
    input: {
      tag: 'input',
      class: 'registrationForm__input_date',
      id: 'registrationForm__input_date',
      id_parent: 'registrationForm__container_date',
      text_content: '',
      attributes: {
        type: 'date',
      },
    },
  },
];
