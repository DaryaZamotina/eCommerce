export default [
  {
    container: {
      tag: 'div',
      class: 'loginForm__container_email',
      id: 'loginForm__container_email',
      id_parent: 'loginForm',
      text_content: '',
    },
    label: {
      tag: 'label',
      class: 'loginForm__label_email',
      id: 'loginForm__label_email',
      id_parent: 'loginForm__container_email',
      text_content: 'Mail',
      attributes: {
        for: 'email',
      },
    },
    input: {
      tag: 'input',
      class: 'loginForm__input_email',
      id: 'loginForm__input_email',
      id_parent: 'loginForm__container_email',
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
      class: 'loginForm__container_password',
      id: 'loginForm__container_password',
      id_parent: 'loginForm',
      text_content: '',
    },
    label: {
      tag: 'label',
      class: 'loginForm__label_password',
      id: 'loginForm__label_password',
      id_parent: 'loginForm__container_password',
      text_content: 'Password',
      attributes: {
        for: 'password',
      },
    },
    input: {
      tag: 'input',
      class: 'loginForm__input_password',
      id: 'loginForm__input_password',
      id_parent: 'loginForm__container_password',
      text_content: '',
      attributes: {
        type: 'password',
        placeholder: 'password',
      },
    },
  },
];
