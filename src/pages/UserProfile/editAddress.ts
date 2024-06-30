import { IObjGeneralData } from './interfacesForObjectData';
import { getInfoFromInputs } from './getInfoFromInputs';
import { IUser } from './userInterface';

export function editAddress(token: string) {
  const id = localStorage.getItem('customerID');
  const link = `https://api.us-east-2.aws.commercetools.com/jffstore/customers/${id}`;

  let info: IUser = JSON.parse(localStorage.getItem('userDetails'));
  let version = info.version;
  let addressShipID = info.addresses[0].id;
  let addressBilID = info.addresses[1].id;
  //------
  let countryBil: string;
  if (
    localStorage.getItem('countryBil') &&
    localStorage.getItem('countryBil') !== 'undefined'
  ) {
    countryBil = localStorage.getItem('countryBil');
  } else countryBil = info.addresses[1].country;

  let cityBil: string;
  if (
    localStorage.getItem('cityBil') &&
    localStorage.getItem('cityBil') !== 'undefined'
  ) {
    cityBil = localStorage.getItem('cityBil');
  } else cityBil = info.addresses[1].city;

  let streetBil: string;
  if (
    localStorage.getItem('streetBil') &&
    localStorage.getItem('streetBil') !== 'undefined'
  ) {
    streetBil = localStorage.getItem('streetBil');
  } else streetBil = info.addresses[1].streetName;

  let postalCodeBil: string;
  if (
    localStorage.getItem('postalCodeBil') &&
    localStorage.getItem('postalCodeBil') !== 'undefined'
  ) {
    postalCodeBil = localStorage.getItem('postalCodeBil');
  } else postalCodeBil = info.addresses[1].postalCode;
  //------------

  let countryShip: string;
  if (
    localStorage.getItem('countryShip') &&
    localStorage.getItem('countryShip') !== 'undefined'
  ) {
    countryShip = localStorage.getItem('countryShip');
  } else countryShip = info.addresses[1].country;

  let cityShip: string;
  if (
    localStorage.getItem('cityShip') &&
    localStorage.getItem('cityShip') !== 'undefined'
  ) {
    cityShip = localStorage.getItem('citySShip');
  } else cityShip = info.addresses[0].city;

  let streetShip: string;
  if (
    localStorage.getItem('streeShip') &&
    localStorage.getItem('streetShip') !== 'undefined'
  ) {
    streetShip = localStorage.getItem('streetShip');
  } else streetShip = info.addresses[0].streetName;

  let postalCodeShip: string;
  if (
    localStorage.getItem('postalCodeShip') &&
    localStorage.getItem('postalCodeShip') !== 'undefined'
  ) {
    postalCodeShip = localStorage.getItem('postalCodeShip');
  } else postalCodeShip = info.addresses[0].postalCode;
  //-----------

  const bodyData = JSON.stringify({
    version: version,
    actions: [
      {
        action: 'changeAddress',
        addressId: addressShipID,
        address: {
          streetName: streetShip,
          postalCode: postalCodeShip,
          city: cityShip,
          country: countryShip,
        },
      },
      {
        action: 'changeAddress',
        addressId: addressBilID,
        address: {
          streetName: streetBil,
          postalCode: postalCodeBil,
          city: cityBil,
          country: countryBil,
        },
      },
    ],
  });

  async function postInfo(url: string) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: bodyData,
    });
    const resp = await response.json();
    return JSON.stringify(resp);
  }

  postInfo(link)
    .then((info) => {
      localStorage.setItem('userDetails', info);
      const infoJSON = JSON.parse(info);
      return info;
    })
    .catch((err) => console.log(err.message));
}
