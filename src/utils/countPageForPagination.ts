import {
  getTotalNumberOfGoods,
  setTotalNumberOfPage,
  getTotalNumberOfPages,
  setTotalNumberOfGoods,
} from './constsForPagination';
import pagination from '../components/Pagination/paginationInstance';

export function displayTotalPages(data: number) {
  setTotalNumberOfGoods(data);
  countTotalNumberOfPages();
  drawTotalNumberOfPages();
}

function countTotalNumberOfPages(): void {
  const totalNumberOfPage: number = Math.ceil(getTotalNumberOfGoods() / 8);
  setTotalNumberOfPage(totalNumberOfPage);
}

function drawTotalNumberOfPages(): void {
  pagination.getTotalNumberOfPageHTML().textContent = `${getTotalNumberOfPages()}`;
}
