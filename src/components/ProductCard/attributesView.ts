import TagCreator from '../../module/tagCreator';
import IResult from './InterfaceProduct';
import formatName from '../../Helpers/formatAttributeName';

export default class AttributesView {
  private currentGood: IResult;

  private attributeContainer: HTMLElement;

  constructor(currentGood: IResult) {
    this.currentGood = currentGood;
    this.attributeContainer = this.createAttributeContainer();
  }

  public getAttributeContainer() {
    return this.attributeContainer;
  }

  private createAttributeArray() {
    let attributesArray: string[] = [];
    this.currentGood.masterData.current.masterVariant.attributes.forEach(
      (attribute) => {
        let attributeValue = '';
        if (typeof attribute.value === 'object') {
          if (Array.isArray(attribute.value)) {
            attributeValue = attribute.value
              .map((val) => `${val.label}`)
              .join(', ');
          } else {
            attributeValue = `${attribute.value.label}`;
          }
        } else {
          attributeValue = `${attribute.value}`;
        }
        attributesArray.push(
          `${formatName(attribute.name)}: ${attributeValue}`,
        );
      },
    );
    return attributesArray;
  }

  private createAttributeTitle() {
    const titleTagCreator = new TagCreator(
      'h3',
      'attribute-title',
      'attributeTitle',
      '',
      'Specifications',
    );
    const title = titleTagCreator.createAndReturn();
    return title;
  }

  private createAttributeContainer() {
    const tagCreator = new TagCreator(
      'section',
      'attribute-container',
      'attributeContainer',
    );
    this.attributeContainer = tagCreator.createAndReturn();

    this.attributeContainer.append(this.createAttributeTitle());

    this.createAttributeArray().forEach((attribute: string) => {
      const oneAttribute = document.createElement('p');
      oneAttribute.textContent = attribute;
      this.attributeContainer.append(oneAttribute);
    });

    return this.attributeContainer;
  }
}
