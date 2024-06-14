export default interface ICardProduct {
  cartState: string;
  createdAt: string;
  createdBy: CreatedBy;
  customLineItems: string[];
  deleteDaysAfterLastModification: number;
  directDiscounts: string[];
  discountCodes: string[];
  id: string;
  inventoryMode: string;
  itemShippingAddresses: string[];
  lastMessageSequenceNumber: number;
  lastModifiedAt: string;
  lastModifiedBy: LastModifiedBy;
  lineItems: LineItem[];
  origin: string;
  refusedGifts: string[];
  shipping: string[];
  shippingMode: string;
  taxCalculationMode: string;
  taxMode: string;
  taxRoundingMode: string;
  totalLineItemQuantity: number;
  totalPrice: TotalPrice;
  type: string;
  version: number;
  versionModifiedAt: string;
  discountOnTotalPrice?: {
    discountedAmount: TotalPrice;
  };
}

interface CreatedBy {
  clientId: string;
  isPlatformClient: boolean;
  anonymousId: string;
}

interface LastModifiedBy {
  clientId: string;
  isPlatformClient: boolean;
  anonymousId: string;
}

export interface LineItem {
  addedAt: string;
  discountedPricePerQuantity: string[];
  id: string;
  lastModifiedAt: string;
  lineItemMode: string;
  name: {
    en: string;
  };
  perMethodTaxRate: string[];
  price: Price;
  priceMode: string;
  productId: string;
  productKey: string;
  productSlug: Record<string, string>;
  productType: ProductType;
  quantity: number;
  state: State[];
  taxedPricePortions: string[];
  totalPrice: TotalPrice;
  variant: Variant;
}

interface State {
  quantity: number;
  state: {
    id: string;
    typeId: string;
  };
}

interface TotalPrice {
  type: string;
  currencyCode: string;
  centAmount: number;
  fractionDigits: number;
}

interface Price {
  discounted?: {
    value: Value;
  };
  id: string;
  value: Value;
  key: string;
}

interface Value {
  centAmount: number;
  currencyCode: string;
  fractionDigits: number;
  type: string;
}

interface ProductType {
  typeId: string;
  id: string;
  version: number;
}

interface Variant {
  id: number;
  sku: string;
  prices: Price[];
  images: Img[];
}

interface Img {
  url: string;
}
