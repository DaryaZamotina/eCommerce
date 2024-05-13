import TagCreator from "../../module/tagCreator";

export default class HomePage {
  section: HTMLElement;

  constructor() {
    this.section = this.createSection();
  }
  
  public getSection() {
    return this.section;
  }

  private createSection() {
    const tagCreator = new TagCreator(
      "section",
      "section",
      "section",
      "pageContainer",
      "Main Page Content Will Be Soon",
    );
    this.section = tagCreator.createAndReturn();
    return this.section;
  }
}