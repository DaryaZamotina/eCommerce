export default interface IResult {
  id?: string;
  version?: number;
  versionModifiedAt?: string;
  lastMessageSequenceNumber?: number;
  createdAt?: string;
  lastModifiedAt?: string;
  lastModifiedBy?: {
    isPlatformClient?: boolean;
    user?: {
      typeId?: string;
      id?: string;
    };
  };
  createdBy?: {
    isPlatformClient?: boolean;
    user?: {
      typeId?: string;
      id?: string;
    };
  };
  productType?: {
    typeId?: string;
    id?: string;
  };
  masterData?: {
    current?: {
      name?: {
        en?: string;
      };
      description?: {
        en?: string;
      };
      categories?: [];
      categoryOrderHints?: {};
      lug?: {
        en?: string;
      };
      metaTitle?: {
        en?: string;
      };
      metaDescription?: {
        en?: string;
      };
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
      };
      variants?: [];
      searchKeywords?: {};
    };
    staged?: {
      name?: {
        en?: string;
      };
      description?: {
        en?: string;
      };
      categories?: [];
      categoryOrderHints?: {};
      slug?: {
        en?: string;
      };
      metaTitle?: {
        en?: string;
      };
      metaDescription?: {
        en?: string;
      };
      masterVariant?: {
        id?: number;
        prices?: [];
        images?: [];
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
      };
      variants?: [];
      searchKeywords?: {};
    };
    published?: boolean;
    hasStagedChanges?: boolean;
  };
  priceMode?: string;
  lastVariantId?: number;
}
