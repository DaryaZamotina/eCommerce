export default interface IVariant {
  id?: number;
  prices?: [
    {
      discounted?: {
        discount?: {
          id?: string;
          typeId?: string;
        };
        value?: {
          centAmount?: number;
          currencyCode?: string;
          fractionDigits?: number;
          type?: string;
        };
      };
      id?: string;
      key?: string;
      value?: {
        centAmount?: number;
        currencyCode?: string;
        fractionDigits?: number;
        type?: string;
      };
    },
  ];
  images?: [
    {
      dimensions?: {};
      url?: string;
    },
  ];
  attributes?: [
    {
      name?: string;
      value?:
        | number
        | string
        | {
            key?: string | number;
            label?: string | number;
          };
    },
  ];
  assets?: [];
}
