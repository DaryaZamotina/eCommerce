export default class TagCreator {
  constructor(
    public tag: string,
    public className: string,
    public id: string,
    public childId: string,
    public text?: string,
  ) {
    this.className = className;
    this.id = id;
    this.childId = childId;
    this.tag = tag;
    this.text = text;
  }

  public createAndAppend(child?: boolean) {
    const tag = document.createElement(`${this.tag}`);
    tag.textContent = this.text || "";
    tag.className = this.className;
    tag.id = this.id;
    if (child) {
      document.getElementById(`${this.childId}`)!.prepend(tag);
    } else {
      document.getElementById(`${this.childId}`)!.appendChild(tag);
    }
  }

  public addAttribute(attribute: string, vaule: string) {
    document
      .getElementById(`${this.id}`)!
      .setAttribute(`${attribute}`, `${vaule}`);
  }

  public removeElement() {
    document.getElementById(`${this.id}`)!.remove();
  }

  // public createReturnAndAppend(child?: boolean) {
  //   const element = this.createAndReturn();
  //   if (child) {
  //     document.getElementById(`${this.childId}`)!.prepend(element);
  //   } else {
  //     document.getElementById(`${this.childId}`)!.appendChild(element);
  //   }    return element;
  // }
  
  public createAndReturn() {
    const element = document.createElement(`${this.tag}`);
    element.textContent = this.text || "";
    element.className = this.className;
    element.id = this.id;
    console.log(element);
    return element;
  }
}
