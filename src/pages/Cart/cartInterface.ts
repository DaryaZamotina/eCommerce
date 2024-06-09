export interface ICart {
  cartState: string;
  createdAt: string;
  createdBy: {
    clientId: string;
    isPlatformClient: boolean;
  };
  customLineItems: [];
  deleteDaysAfterLastModification: 90;
  directDiscounts: [];
  discountCodes: [];
  id: string;
  inventoryMode: string;
  itemShippingAddresses: [];
  lastMessageSequenceNumber: number;
  lastModifiedAt: string;
  lastModifiedBy: {
    clientId: string;
    isPlatformClient: boolean;
  };
  lineItems: [
    {
      addedAt: string;
      discountedPricePerQuantity: [];
      id: string;
      lastModifiedAt: string;
      lineItemMode: string;
      name: {
        en: string;
      };
      perMethodTaxRate: [];
      price: {
        id: string;
        key: string;
        value: {
          type: string;
          currencyCode: string;
          centAmount: number;
          fractionDigits: number;
        };
      };
      type: string;
      priceMode: string;
      productId: string;
      productKey: string;
      productSlug: {
        en: string;
      };
      productType: {
        typeId: string;
        id: string;
        version: number;
      };
      quantity: number;
      state: [
        {
          quantity: number;
          state: {
            typeId: string;
            id: string;
          };
        },
      ];
      taxedPricePortions: [];
      totalPrice: {
        type: string;
        currencyCode: string;
        centAmount: number;
        fractionDigits: number;
      };
      variant: {
        assets: [];
        attributes: [
          {
            name: string;
            value: number;
          },
          {
            name: string;
            value: number;
          },
        ];
        id: 2;
        images: [
          {
            url: string;
          },
        ];
        prices: [
          {
            id: string;
          },
        ];
        sku: string;
      };
    },
  ];
  origin: string;
  refusedGifts: [];
  shipping: [];
  shippingMode: string;
  taxCalculationMode: string;
  taxMode: string;
  taxRoundingMode: string;
  totalLineItemQuantity: 3;
  totalPrice: {
    type: string;
    currencyCode: string;
    centAmount: number;
    fractionDigits: number;
  };
  type: string;
  version: number;
  versionModifiedAt: string;
}
