import TagCreator from '../../module/tagCreator';
import {
  handleClickPrevButton,
  handleClickNextButton,
} from '../../utils/countPageForPagination';

export default class Pagination {
  private currentPageHTML: HTMLElement;

  private totalNumberOfPageHTML: HTMLElement;

  private prevButton: HTMLElement;

  private nextButton: HTMLElement;

  private pagination: HTMLElement;

  constructor() {
    this.currentPageHTML = this.createCurrentPage();
    this.totalNumberOfPageHTML = this.createTotalNumberOfPage();
    this.prevButton = this.createPrevButton();
    this.nextButton = this.createNextButton();
    this.pagination = this.createPagination();
  }

  public getPagination() {
    return this.pagination;
  }
  public getCurrentPageHTML() {
    return this.currentPageHTML;
  }

  public getTotalNumberOfPageHTML() {
    return this.totalNumberOfPageHTML;
  }

  public getPrevButton() {
    return this.prevButton;
  }

  public getNextButton() {
    return this.nextButton;
  }

  createCurrentPage() {
    const tagCreator = new TagCreator(
      'span',
      'pagination__current-page',
      'paginationCurrentPage',
    );
    this.currentPageHTML = tagCreator.createAndReturn();
    return this.currentPageHTML;
  }

  createTotalNumberOfPage() {
    const tagCreator = new TagCreator(
      'span',
      'pagination__total-number-of-page',
      'paginationTotalNumberOfPage',
    );
    this.totalNumberOfPageHTML = tagCreator.createAndReturn();
    return this.totalNumberOfPageHTML;
  }

  createSeparator() {
    const tagCreator = new TagCreator(
      'span',
      'pagination__separator',
      'paginationSeparator',
      '',
      '/',
    );
    const separator = tagCreator.createAndReturn();
    return separator;
  }

  createPrevButton() {
    const tagButton = new TagCreator(
      'button',
      'pagination__prev-button',
      'paginationPrevButton',
      '',
      'prev',
    );
    this.prevButton = tagButton.createAndReturn();
    this.prevButton.addEventListener('click', () => handleClickPrevButton());
    return this.prevButton;
  }

  createNextButton() {
    const tagButton = new TagCreator(
      'button',
      'pagination__next-button',
      'paginationNextButton',
      '',
      'next',
    );
    this.nextButton = tagButton.createAndReturn();
    this.nextButton.addEventListener('click', () => handleClickNextButton());
    return this.nextButton;
  }

  createPagination() {
    const tagDiv = new TagCreator('div', 'pagination', 'pagination');
    this.pagination = tagDiv.createAndReturn();
    this.pagination.append(
      this.getPrevButton(),
      this.getCurrentPageHTML(),
      this.createSeparator(),
      this.getTotalNumberOfPageHTML(),
      this.getNextButton(),
    );
    return this.pagination;
  }
}
