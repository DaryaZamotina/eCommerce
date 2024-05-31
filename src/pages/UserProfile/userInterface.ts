export interface IUser {
  id: string;
  version: number;
  versionModifiedAt: string;
  lastMessageSequenceNumber: number;
  createdAt: string;
  lastModifiedAt: string;
  lastModifiedBy: {
    clientId: string;
    isPlatformClient: boolean;
    customer: {
      typeId: string;
      id: string;
    };
  };
  createdBy: {
    clientId: string;
    isPlatformClient: string;
  };
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  password: string;
  addresses: [
    {
      id: string;
      title: string;
      firstName: string;
      lastName: string;
      streetName: string;
      postalCode: string;
      city: string;
      country: string;
      email: string;
      key: string;
    },
    {
      id: string;
      streetName: string;
      streetNumber: string;
      postalCode: string;
      city: string;
      country: string;
    },
  ];
  shippingAddressIds: [];
  billingAddressIds: [];
  isEmailVerified: boolean;
  stores: [];
  authenticationMode: string;
}
