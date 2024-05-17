import TagCreator from '../../module/tagCreator';
import '../../../public/assets/css/body.css';

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
    );
    this.appContainer = appContainerTagCreator.createAndReturn();
    return this.appContainer;
  }
}
