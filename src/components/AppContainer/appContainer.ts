import TagCreator from '../../module/tagCreator';

export default class AppContainer {
  appContainer: HTMLElement;

  constructor() {
    this.appContainer = this.createAppContainer();
  }

  public getAppContainer() {
    return this.appContainer;
  }

  private createAppContainer() {
    const appContainerTagCreator = new TagCreator(
      'div',
      'app-container',
      'appContainer',
      'body',
    );
    this.appContainer = appContainerTagCreator.createAndReturn();
    return this.appContainer;
  }
}
