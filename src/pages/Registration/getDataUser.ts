export default function getDataUser() {
  const arrInputs = document.querySelectorAll('input');
  const country = document.getElementById('selectCountry') as HTMLSelectElement;
  const country_option = document.getElementById('selectCountry_option') as HTMLSelectElement;
  console.log(arrInputs[4].value);
  let obj: UserObj = {
    email: arrInputs[0].value,
    password: arrInputs[1].value,
    firstName: arrInputs[2].value,
    lastName: arrInputs[3].value,
    dateOfBirth: arrInputs[4].value,
    addresses: [
      {
        key: 'address1',
        title: 'Mrs.',
        firstName: arrInputs[2].value,
        lastName: arrInputs[3].value,
        streetName: arrInputs[6].value,
        postalCode: arrInputs[7].value,
        city: arrInputs[5].value,
        country: country.value,
        email: arrInputs[0].value,
      },
    ],
    shippingAddresses: [0],
    billingAddresses: [0],
  };
  const shippingAddressDefault = document.getElementById('radioButtonOne') as HTMLDivElement;
  if (shippingAddressDefault.className === 'radioButton active') {
    obj.defaultShippingAddress = 0;
  }
  const billingAddress = document.getElementById('radioButtonTwo') as HTMLDivElement;
  if (billingAddress.className === 'radioButton') {
    const newAddress = {
      key: 'address',
      title: 'Mr.',
      firstName: arrInputs[2].value,
      lastName: arrInputs[3].value,
      streetName: arrInputs[9].value,
      postalCode: arrInputs[10].value,
      city: arrInputs[8].value,
      country: country.value,
      email: arrInputs[0].value,
    }
    obj.addresses.push(newAddress);
    obj.billingAddresses[0] = 1;
    const billingAddressDefault = document.getElementById('radioButtonThree') as HTMLDivElement;
    if (billingAddressDefault.className === 'radioButton active') {
      obj.defaultBillingAddress = 1;
    }
  }
  return obj;
}

type UserObj = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  addresses: {
    key: string;
    title: string;
    firstName: string;
    lastName: string;
    streetName: string;
    postalCode: string;
    city: string;
    country: string;
    email: string;
  }[];
  defaultShippingAddress?: number;
  shippingAddresses: number[];
  defaultBillingAddress?: number;
  billingAddresses: number[];
}
