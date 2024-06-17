import {
  getTotalNumberOfGoods,
  setTotalNumberOfGoods,
  getCurrentPage,
  setCurrentPage,
  getTotalNumberOfPages,
  setTotalNumberOfPage,
  getLimitPagination,
  getOffsetPagination,
  getSortPagination,
  getMethodPagination,
  setOffsetPagination,
} from './constsForPagination';
import pagination from '../components/Pagination/paginationInstance';
import fetchProductsSortedBy from '../Helpers/Sprt/fetchProductsSortedBy';

export function displayTotalPages(data: number) {
  setTotalNumberOfGoods(data);
  countTotalNumberOfPages();
  drawTotalNumberOfPages();
  displayCurrentPage();
  updatePaginationButtonDisabledState(getCurrentPage());
}

function countTotalNumberOfPages(): void {
  const totalNumberOfPage: number = Math.ceil(
    getTotalNumberOfGoods() / getLimitPagination(),
  );
  setTotalNumberOfPage(totalNumberOfPage);
}

function drawTotalNumberOfPages(): void {
  pagination.getTotalNumberOfPageHTML().textContent = `${getTotalNumberOfPages()}`;
}

export function handleClickPrevButton() {
  const newOffset = getOffsetPagination() - getLimitPagination();
  fetchProductsSortedBy(getSortPagination(), getMethodPagination(), newOffset);
  const newCurrentPage = Math.ceil((newOffset + 1) / getLimitPagination());
  setCurrentPage(newCurrentPage);
  pagination.getCurrentPageHTML().textContent = `${getCurrentPage()}`;
  updatePaginationButtonDisabledState(getCurrentPage());
}

export function handleClickNextButton() {
  const newOffset = getOffsetPagination() + getLimitPagination();
  fetchProductsSortedBy(getSortPagination(), getMethodPagination(), newOffset);
  const newCurrentPage = Math.ceil((newOffset + 1) / getLimitPagination());
  setCurrentPage(newCurrentPage);
  pagination.getCurrentPageHTML().textContent = `${getCurrentPage()}`;
  updatePaginationButtonDisabledState(getCurrentPage());
}

export function updatePaginationButtonDisabledState(newCurrentPage: number) {
  setButtonDisabledState(
    pagination.getPrevButton(),
    shouldDisablePrevButton(newCurrentPage),
  );
  setButtonDisabledState(
    pagination.getNextButton(),
    shouldDisableNextButton(newCurrentPage, getTotalNumberOfPages()),
  );
}

function shouldDisablePrevButton(currentPage: number) {
  return currentPage <= 1;
}

function shouldDisableNextButton(
  currentPage: number,
  totalNumberOfPages: number,
) {
  return currentPage >= totalNumberOfPages;
}

function setButtonDisabledState(button: HTMLElement, condition: boolean) {
  if (condition) {
    button.setAttribute('disabled', 'disabled');
  } else {
    button.removeAttribute('disabled');
  }
}

export function resetCounterForPagination() {
  setOffsetPagination(0);
  setCurrentPage(1);
}

function displayCurrentPage() {
  pagination.getCurrentPageHTML().textContent = `${getCurrentPage()}`;
}
