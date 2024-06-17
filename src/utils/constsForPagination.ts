let _sortPagination: string | undefined = undefined;
let _methodPagination: string | undefined = undefined;
let _offsetPagination: number | undefined = 0;
let _limitPagination: number = 8;
let _totalNumberOfGoods: number = 0;
let _currentPage: number = 1;
let _totalNumberOfPages: number = 0;

export function getSortPagination(): string {
  return _sortPagination;
}

export function setSortPagination(value: string): void {
  _sortPagination = value;
}

export function getMethodPagination(): string {
  return _methodPagination;
}

export function setMethodPagination(value: string): void {
  _methodPagination = value;
}

export function getOffsetPagination(): number {
  return _offsetPagination;
}

export function setOffsetPagination(value: number): void {
  _offsetPagination = value;
}

export function getLimitPagination(): number {
  return _limitPagination;
}

export function getTotalNumberOfGoods(): number {
  return _totalNumberOfGoods;
}

export function setTotalNumberOfGoods(value: number): void {
  _totalNumberOfGoods = value;
}

export function getCurrentPage(): number {
  return _currentPage;
}

export function setCurrentPage(value: number): void {
  _currentPage = value;
}

export function getTotalNumberOfPages(): number {
  return _totalNumberOfPages;
}

export function setTotalNumberOfPage(value: number): void {
  _totalNumberOfPages = value;
}
