import TagCreator from "../module/tagCreator";
import { InputsType } from "../Helpers/Inputs/TypeInputs";

export default class CreateInputForForm {
  private arrImput: InputsType[];

  constructor(arrImput: InputsType[]) {
    this.arrImput = arrImput;
  }

  public createAndAppend() {
    this.arrImput.forEach((element) => {
      const containerImput = new TagCreator(
        element.conteiner.tag,
        element.conteiner.class,
        element.conteiner.id,
        element.conteiner.id_parent,
        element.conteiner.text_content,
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
    });
  }
}
