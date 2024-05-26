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
