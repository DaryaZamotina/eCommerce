import TagCreator from "../module/tagCreator";
import { InputsType } from "../Helpers/Inputs/TypeInputs";
import validateEmail from "../Helpers/Inputs/validateEmail";

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

      if (element.input.attributes.type === 'email') {
        this.validateEmail(element.input.id);
      }
    });
  }

  private validateEmail(id: string) {
    const inputEmail = document.getElementById(id) as HTMLInputElement;
    inputEmail.addEventListener('input', () => {
      console.log(validateEmail(inputEmail.value));
    });
  }
}
