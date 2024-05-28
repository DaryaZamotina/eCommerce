export default interface IResult {
  id: string;
  version: number;
  versionModifiedAt: string;
  lastMessageSequenceNumber: number;
  createdAt: string;
  lastModifiedAt: string;
  lastModifiedBy: {
    isPlatformClient: boolean;
    user: {
      typeId: string;
      id: string;
    };
  };
  createdBy: {
    isPlatformClient: boolean;
    user: {
      typeId: string;
      id: string;
    };
  };
  productType: {
    typeId: string;
    id: string;
  };
  masterData: {
    current: {
      name: {
        en: string;
      };
      description: {
        en: string;
      };
      categories: [];
      categoryOrderHints: {};
      lug: {
        en: string;
      };
      metaTitle: {
        en: string;
      };
      metaDescription: {
        en: string;
      };
      masterVariant: {
        id: number;
        prices: [];
        images: [
          {
            dimensions: {};
            url: string;
          },
        ];
        attributes: [
          {
            name: string;
            value: {
              en: string;
            };
          },
        ];
        assets: [];
      };
      variants: [];
      searchKeywords: {};
    };
    staged: {
      name: {
        en: string;
      };
      description: {
        en: string;
      };
      categories: [];
      categoryOrderHints: {};
      slug: {
        en: string;
      };
      metaTitle: {
        en: string;
      };
      metaDescription: {
        en: string;
      };
      masterVariant: {
        id: number;
        prices: [];
        images: [];
        attributes: [
          {
            name: string;
            value: {
              en: string;
            };
          },
        ];
        assets: [];
      };
      variants: [];
      searchKeywords: {};
    };
    published: boolean;
    hasStagedChanges: boolean;
  };
  priceMode: string;
  lastVariantId: number;
}
