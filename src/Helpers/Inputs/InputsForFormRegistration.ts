export default [
  {
    container: {
      tag: "div",
      class: "registrationForm__container",
      id: "registrationForm__container_email",
      id_parent: "registrationForm",
      text_content: "",
    },
    label: {
      tag: "label",
      class: "registrationForm__label",
      id: "registrationForm__label_email",
      id_parent: "registrationForm__container_email",
      text_content: "E-mail",
      attributes: {
        for: "email",
      },
    },
    input: {
      tag: "input",
      class: "registrationForm__input_email",
      id: "registrationForm__input_email",
      id_parent: "registrationForm__container_email",
      text_content: "",
      attributes: {
        type: "email",
        placeholder: "example@email.com",
        autocomplete: "disabled",
      },
    },
  },
  {
    container: {
      tag: "div",
      class: "registrationForm__container",
      id: "registrationForm__container_password",
      id_parent: "registrationForm",
      text_content: "",
    },
    label: {
      tag: "label",
      class: "registrationForm__label",
      id: "registrationForm__label_password",
      id_parent: "registrationForm__container_password",
      text_content: "Password",
      attributes: {
        for: "password",
      },
    },
    input: {
      tag: "input",
      class: "registrationForm__input_password",
      id: "registrationForm__input_password",
      id_parent: "registrationForm__container_password",
      text_content: "",
      attributes: {
        type: "password",
        placeholder: "Password",
        autocomplete: "disabled",
      },
    },
  },
  {
    container: {
      tag: "div",
      class: "registrationForm__container",
      id: "registrationForm__container_first_name",
      id_parent: "registrationForm",
      text_content: "",
    },
    label: {
      tag: "label",
      class: "registrationForm__label",
      id: "registrationForm__label_first_name",
      id_parent: "registrationForm__container_first_name",
      text_content: "First name",
      attributes: {
        for: "text",
      },
    },
    input: {
      tag: "input",
      class: "registrationForm__input_first_name",
      id: "registrationForm__input_first_name",
      id_parent: "registrationForm__container_first_name",
      text_content: "",
      attributes: {
        type: "text",
        placeholder: "First name",
        autocomplete: "disabled",
      },
    },
  },
  {
    container: {
      tag: "div",
      class: "registrationForm__container",
      id: "registrationForm__container_second_name",
      id_parent: "registrationForm",
      text_content: "",
    },
    label: {
      tag: "label",
      class: "registrationForm__label",
      id: "registrationForm__label_second_name",
      id_parent: "registrationForm__container_second_name",
      text_content: "Second name",
      attributes: {
        for: "text",
      },
    },
    input: {
      tag: "input",
      class: "registrationForm__input_second_name",
      id: "registrationForm__input_second_name",
      id_parent: "registrationForm__container_second_name",
      text_content: "",
      attributes: {
        type: "text",
        placeholder: "Second name",
        autocomplete: "disabled",
      },
    },
  },
  {
    container: {
      tag: "div",
      class: "registrationForm__container",
      id: "registrationForm__container_date",
      id_parent: "registrationForm",
      text_content: "",
    },
    label: {
      tag: "label",
      class: "registrationForm__label",
      id: "registrationForm__label_date",
      id_parent: "registrationForm__container_date",
      text_content: "Date",
      attributes: {
        for: "text",
      },
    },
    input: {
      tag: "input",
      class: "registrationForm__input_date",
      id: "registrationForm__input_date",
      id_parent: "registrationForm__container_date",
      text_content: "",
      attributes: {
        type: "date",
        autocomplete: "disabled",
      },
    },
  },
  {
    container: {
      tag: "div",
      class: "registrationForm__container",
      id: "registrationForm__container_city",
      id_parent: "registrationForm",
      text_content: "",
    },
    label: {
      tag: "label",
      class: "registrationForm__label",
      id: "registrationForm__label_city",
      id_parent: "registrationForm__container_city",
      text_content: "City",
      attributes: {
        for: "text",
      },
    },
    input: {
      tag: "input",
      class: "registrationForm__input_city",
      id: "registrationForm__input_city",
      id_parent: "registrationForm__container_city",
      text_content: "",
      attributes: {
        type: "text",
        placeholder: "City",
        autocomplete: "disabled",
      },
    },
  },
  {
    container: {
      tag: "div",
      class: "registrationForm__container",
      id: "registrationForm__container_street",
      id_parent: "registrationForm",
      text_content: "",
    },
    label: {
      tag: "label",
      class: "registrationForm__label",
      id: "registrationForm__label_street",
      id_parent: "registrationForm__container_street",
      text_content: "Street",
      attributes: {
        for: "text",
      },
    },
    input: {
      tag: "input",
      class: "registrationForm__input_street",
      id: "registrationForm__input_street",
      id_parent: "registrationForm__container_street",
      text_content: "",
      attributes: {
        type: "text",
        placeholder: "Street",
        autocomplete: "disabled",
      },
    },
  },
  {
    container: {
      tag: "div",
      class: "registrationForm__container",
      id: "registrationForm__container_postcode",
      id_parent: "registrationForm",
      text_content: "",
    },
    label: {
      tag: "label",
      class: "registrationForm__label",
      id: "registrationForm__label_postcode",
      id_parent: "registrationForm__container_postcode",
      text_content: "Postcode",
      attributes: {
        for: "text",
      },
    },
    input: {
      tag: "input",
      class: "registrationForm__input_postcode",
      id: "registrationForm__input_postcode",
      id_parent: "registrationForm__container_postcode",
      text_content: "",
      attributes: {
        type: "text",
        placeholder: "Postcode",
        autocomplete: "disabled",
      },
    },
  },
];
