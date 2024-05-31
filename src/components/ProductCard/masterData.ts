export default interface MasterData {
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
      prices: [
        {
          id: string;
          key: string;
          value: {
            centAmount: number;
            currencyCode: string;
            fractionDigits: number;
            type: string;
          };
        },
      ];
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
}