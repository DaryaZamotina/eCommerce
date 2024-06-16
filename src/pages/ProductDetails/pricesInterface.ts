export interface IPrices {
  id?: string;
  value?: {
    type?: string;
    currencyCode?: string;
    centAmount?: number;
    fractionDigits?: number;
  };
  key?: string;
  discounted?: {
    value?: {
      type?: string;
      currencyCode?: string;
      centAmount?: number;
      fractionDigits?: number;
    };
    discount?: {
      typeId?: string;
      id?: string;
    };
  };
}
