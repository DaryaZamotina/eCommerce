export default interface IResultNew {
  categories?: [];
  categoryOrderHints?: {};
  createdAt?: string;
  description?: {
    en?: string;
  };
  hasStagedChanges?: boolean;
  id?: string;
  key?: string;
  lastModifiedAt?: string;
  masterVariant?: {
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
        value?: number | string | {
          key?: string | number;
          label?: string | number;
        }
  },
    ];
    assets?: [];
  };
  metaTitle?: {
    en?: string;
  };
  metaDescription?: {
    en?: string;
  };
  name?: {
    en?: string;
  };
  priceMode?: string;
  productType?: {
    typeId?: string;
    id?: string;
  };
  published?: boolean;
  searchKeywords?: {};
  slug?: {
    en?: string;
  };
  variants?: [];
  version?: number;
}
