import TagCreator from '../../module/tagCreator';
import { IUser } from './userInterface';
import '../../../public/assets/css/userProfilePage.css';
import getDataUser from '../Registration/getDataUser';
import { editUserData } from './editUserData';
import { IObjGeneralData } from './interfacesForObjectData';
import { getInfoFromInputs } from './getInfoFromInputs';
import validateEmail from '../../Helpers/Inputs/validateEmail';
import { editPassword } from './editPassword';
import { editAddress } from './editAddress';

export function createUserProfile() {
  const profileSection = document.getElementById('userProfileSection1');
  profileSection.innerHTML = '';

  const info: IUser = JSON.parse(localStorage.getItem('userDetails'));
  const name = info.firstName;
  const surname = info.lastName;
  const dateOfBirth = info.dateOfBirth;
  const email = info.email;
  const password = info.password;

  const address = info.addresses;

  const shippingAddress = address[0];
  const streetShip: string = shippingAddress.streetName;
  const cityShip: string = shippingAddress.city;
  const coutryShip: string = shippingAddress.country;
  const postalCodeShip: string = shippingAddress.postalCode;
  const defaultBilID: string = info.defaultBillingAddressId;
  const bilID: string = info.billingAddressIds[0];

  console.log('defaultBilID vs bilID = ' + defaultBilID + ' vs ' + bilID);

  let billingAddress;
  let streetBil: string;
  let cityBil: string;
  let coutryBil: string;
  let postalCodeBil: string;
  let defaultShipID: string;
  let shipID: string;

  if (address[1]) {
    billingAddress = address[1];
    streetBil = billingAddress.streetName;
    cityBil = billingAddress.city;
    coutryBil = billingAddress.country;
    postalCodeBil = billingAddress.postalCode;
    defaultShipID = info.defaultShippingAddressId;
    shipID = info.shippingAddressIds[0];
  }

  console.log('defaultShipID vs shipID = ' + defaultShipID + ' vs ' + shipID);

  //---------------wrappers ------------

  const wrapperGeneralData: HTMLDivElement = document.createElement('div');
  wrapperGeneralData.className = 'wrapperGeneralData';
  wrapperGeneralData.id = 'wrapperGeneralData';
  profileSection.append(wrapperGeneralData);

  const wrapperPassword: HTMLDivElement = document.createElement('div');
  wrapperPassword.className = 'wrapperPassword';
  wrapperPassword.id = 'wrapperPassword';
  profileSection.append(wrapperPassword);

  const wrapperProfile: HTMLDivElement = document.createElement('div');
  wrapperProfile.className = 'wrapperProfile';
  wrapperProfile.id = 'wrapperProfile';
  wrapperGeneralData.append(wrapperProfile);

  //------------Biling wrapper
  const wrapperBilAddress: HTMLDivElement = document.createElement('div');
  wrapperBilAddress.className = 'wrapperBilAddress';
  wrapperBilAddress.id = 'wrapperBilAddress';
  wrapperGeneralData.append(wrapperBilAddress);

  const h3BilAddress: HTMLElement = document.createElement('h3');
  h3BilAddress.className = 'h3BilAddress';
  h3BilAddress.id = 'h3BilAddress';
  h3BilAddress.textContent = 'Billing address';
  wrapperBilAddress.append(h3BilAddress);

  const labelForCheckboxBil: HTMLLabelElement = document.createElement('label');
  labelForCheckboxBil.textContent = 'Default billing address';
  wrapperBilAddress.append(labelForCheckboxBil);

  const checkboxBilling: HTMLInputElement = document.createElement('input');
  checkboxBilling.className = 'checkboxBiling';
  checkboxBilling.id = 'checkboxBiling';
  checkboxBilling.type = 'checkbox';
  labelForCheckboxBil.append(checkboxBilling);

  if (defaultBilID == bilID) {
    checkboxBilling.checked = true;
  }

  //------------Shipping wrapper
  const wrapperShipAddress: HTMLDivElement = document.createElement('div');
  wrapperShipAddress.className = 'wrapperShipAddress';
  wrapperShipAddress.id = 'wrapperShipAddress';
  wrapperGeneralData.append(wrapperShipAddress);

  const h3ShipAddress: HTMLElement = document.createElement('h3');
  h3ShipAddress.className = 'h3ShipAddress';
  h3ShipAddress.id = 'h3ShipAddress';
  h3ShipAddress.textContent = 'Shipping address';
  wrapperShipAddress.append(h3ShipAddress);

  const labelForCheckboxShip: HTMLLabelElement =
    document.createElement('label');
  labelForCheckboxShip.textContent = 'Default shipping address';
  wrapperShipAddress.append(labelForCheckboxShip);

  const checkboxShipping: HTMLInputElement = document.createElement('input');
  checkboxShipping.className = 'checkboxShipping';
  checkboxShipping.id = 'checkboxShipping';
  checkboxShipping.type = 'checkbox';
  labelForCheckboxShip.append(checkboxShipping);

  if (defaultShipID == shipID) {
    checkboxShipping.checked = true;
  }

  //-------------
  const labelForName: HTMLLabelElement = document.createElement('label');
  labelForName.textContent = 'First name ';
  wrapperProfile.append(labelForName);

  const inputName: HTMLInputElement = document.createElement('input');
  inputName.className = 'inputName';
  inputName.id = 'inputName';
  inputName.placeholder = `${name}`;
  labelForName.append(inputName);

  inputName.onchange = () => {
    localStorage.setItem('firstName', inputName.value);
    console.log(inputName.value);
  };
  //-------------
  const labelForSurname: HTMLLabelElement = document.createElement('label');
  labelForSurname.textContent = 'Surname ';
  wrapperProfile.append(labelForSurname);

  const inputSurname: HTMLInputElement = document.createElement('input');
  inputSurname.className = 'inputSurname';
  inputSurname.id = 'inputSurname';
  inputSurname.placeholder = `${surname}`;
  labelForSurname.append(inputSurname);

  inputSurname.onchange = () => {
    localStorage.setItem('lastName', inputSurname.value);
    console.log(inputSurname.value);
  };
  //-------------
  const labelForDateOfBirth: HTMLLabelElement = document.createElement('label');
  labelForDateOfBirth.textContent = 'Date of birth';
  wrapperProfile.append(labelForDateOfBirth);

  const inputForDateOfBirth: HTMLInputElement = document.createElement('input');
  inputForDateOfBirth.className = 'inputForDateOfBirth';
  inputForDateOfBirth.id = 'inputForDateOfBirth';
  inputForDateOfBirth.placeholder = `${dateOfBirth}`;
  labelForDateOfBirth.append(inputForDateOfBirth);

  inputForDateOfBirth.onchange = () => {
    localStorage.setItem('dateOfBirth', inputForDateOfBirth.value);
    console.log(inputForDateOfBirth.value);
  };

  //-------------
  const labelForEmail: HTMLLabelElement = document.createElement('label');
  labelForEmail.textContent = 'Email';
  wrapperProfile.append(labelForEmail);

  const inputForEmail: HTMLInputElement = document.createElement('input');
  inputForEmail.className = 'inputForEmail';
  inputForEmail.id = 'inputForEmail';
  inputForEmail.placeholder = `${email}`;
  inputForEmail.type = 'email';
  labelForEmail.append(inputForEmail);

  inputForEmail.onchange = () => {
    localStorage.setItem('email', inputForEmail.value);
    validateEmail(inputForEmail.value);
    console.log(inputForEmail.value);
  };

  //-------------
  const buttonForChangeGenData: HTMLButtonElement =
    document.createElement('button');
  buttonForChangeGenData.className = 'buttonForChangeGenData';
  buttonForChangeGenData.id = 'buttonForChangeGenData';
  buttonForChangeGenData.textContent = 'Change your personal info';
  wrapperProfile.append(buttonForChangeGenData);

  //-------------Billing adress -----
  const labelForStreet: HTMLLabelElement = document.createElement('label');
  labelForStreet.textContent = 'Street';
  wrapperBilAddress.append(labelForStreet);

  const inputForStreet: HTMLInputElement = document.createElement('input');
  inputForStreet.className = 'inputForStreet';
  inputForStreet.id = 'inputForStreet';

  if (shipID == bilID || !streetBil) {
    inputForStreet.placeholder = `${streetShip}`;
  } else inputForStreet.placeholder = `${streetBil}`;
  labelForStreet.append(inputForStreet);
  inputForStreet.onchange = () => {
    localStorage.setItem('streetBil', inputForStreet.value);
  };

  //-------------
  const labelForPostalCode: HTMLLabelElement = document.createElement('label');
  labelForPostalCode.textContent = 'Postal code ';
  wrapperBilAddress.append(labelForPostalCode);

  const inputForPostalCode: HTMLInputElement = document.createElement('input');
  inputForPostalCode.className = 'inputForPostalCode';
  inputForPostalCode.id = 'inputForPostalCode';

  if (!postalCodeBil) {
    inputForPostalCode.placeholder = `${postalCodeShip}`;
  } else inputForPostalCode.placeholder = `${postalCodeBil}`;

  labelForPostalCode.append(inputForPostalCode);

  inputForPostalCode.onchange = () => {
    localStorage.setItem('postalCodeBil', inputForPostalCode.value);
  };

  //-------------
  const labelForCity: HTMLLabelElement = document.createElement('label');
  labelForCity.textContent = 'City ';
  wrapperBilAddress.append(labelForCity);

  const inputForCity: HTMLInputElement = document.createElement('input');
  inputForCity.className = 'inputForCity';
  inputForCity.id = 'inputForCity';
  if (!cityBil) {
    inputForCity.placeholder = `${cityShip}`;
  } else inputForCity.placeholder = `${cityBil}`;

  labelForCity.append(inputForCity);

  inputForCity.onchange = () => {
    localStorage.setItem('cityBil', inputForCity.value);
  };
  //-------------
  const labelForCoutry: HTMLLabelElement = document.createElement('label');
  labelForCoutry.textContent = 'Coutry';
  wrapperBilAddress.append(labelForCoutry);

  const inputForCoutry: HTMLInputElement = document.createElement('input');
  inputForCoutry.className = 'inputForCoutry';
  inputForCoutry.id = 'inputForCoutry';

  if (!coutryBil) {
    inputForCoutry.placeholder = `${coutryShip}`;
  } else inputForCoutry.placeholder = `${coutryBil}`;

  inputForCoutry.onchange = () => {
    localStorage.setItem('countryBil', inputForCoutry.value);
  };

  labelForCoutry.append(inputForCoutry);

  //-------------Shipping adress -----
  const labelForStreetShip: HTMLLabelElement = document.createElement('label');
  labelForStreetShip.textContent = 'Street';
  wrapperShipAddress.append(labelForStreetShip);

  const inputForStreetShip: HTMLInputElement = document.createElement('input');
  inputForStreetShip.className = 'inputForStreet';
  inputForStreetShip.id = 'inputForStreet';
  inputForStreetShip.placeholder = `${streetShip}`;

  inputForStreetShip.onchange = () => {
    localStorage.setItem('streetShip', inputForStreetShip.value);
  };

  labelForStreetShip.append(inputForStreetShip);

  //-------------
  const labelForPostalCodeShip: HTMLLabelElement =
    document.createElement('label');
  labelForPostalCodeShip.textContent = 'Postal code ';
  wrapperShipAddress.append(labelForPostalCodeShip);

  const inputForPostalCodeShip: HTMLInputElement =
    document.createElement('input');
  inputForPostalCodeShip.className = 'inputForPostalCode.';
  inputForPostalCodeShip.id = 'inputForPostalCode';
  inputForPostalCodeShip.placeholder = `${postalCodeShip}`;
  inputForPostalCodeShip.onchange = () => {
    localStorage.setItem('postalCodeShip', inputForPostalCodeShip.value);
  };

  labelForPostalCodeShip.append(inputForPostalCodeShip);
  //-------------
  const labelForCityShip: HTMLLabelElement = document.createElement('label');
  labelForCityShip.textContent = 'City ';
  wrapperShipAddress.append(labelForCityShip);

  const inputForCityShip: HTMLInputElement = document.createElement('input');
  inputForCityShip.className = 'inputForCity';
  inputForCityShip.id = 'inputForCity';
  inputForCityShip.placeholder = `${cityShip}`;

  inputForCityShip.onchange = () => {
    localStorage.setItem('cityShip', inputForCityShip.value);
  };

  labelForCityShip.append(inputForCityShip);
  //-------------
  const labelForCoutryShip: HTMLLabelElement = document.createElement('label');
  labelForCoutryShip.textContent = 'Coutry';
  wrapperShipAddress.append(labelForCoutryShip);

  const inputForCoutryShip: HTMLInputElement = document.createElement('input');
  inputForCoutryShip.className = 'inputForCoutry';
  inputForCoutryShip.id = 'inputForCoutry';
  inputForCoutryShip.placeholder = `${coutryShip}`;

  inputForCoutryShip.onchange = () => {
    localStorage.setItem('countryShip', inputForCoutryShip.value);
  };

  labelForCoutryShip.append(inputForCoutryShip);

  //-------------

  const buttonForChangeAddress: HTMLButtonElement =
    document.createElement('button');

  buttonForChangeAddress.className = 'buttonForChangeAddress';
  buttonForChangeAddress.id = 'buttonForChangeAddress';
  buttonForChangeAddress.textContent = 'Change your address';
  wrapperGeneralData.append(buttonForChangeAddress);

  //-------------
  const labelForOldPassword: HTMLLabelElement = document.createElement('label');
  labelForOldPassword.textContent = 'Old Password';
  wrapperPassword.append(labelForOldPassword);

  const inputForOldPassword: HTMLInputElement = document.createElement('input');
  inputForOldPassword.className = 'inputForOldPassword';
  inputForOldPassword.id = 'inputForOldPassword';
  inputForOldPassword.type = 'password';
  inputForOldPassword.placeholder = ``;
  inputForOldPassword.onchange = () => {
    localStorage.setItem('oldPassword', inputForOldPassword.value);
  };
  labelForOldPassword.append(inputForOldPassword);
  //--------
  const labelForNewPassword: HTMLLabelElement = document.createElement('label');
  labelForNewPassword.textContent = 'New Password';
  wrapperPassword.append(labelForNewPassword);

  const inputForNewPassword: HTMLInputElement = document.createElement('input');
  inputForNewPassword.className = 'inputForNewPassword';
  inputForNewPassword.id = 'inputForNewPassword';
  inputForNewPassword.type = 'password';
  inputForNewPassword.placeholder = ``;
  inputForNewPassword.onchange = () => {
    localStorage.setItem('newPassword', inputForNewPassword.value);
  };
  labelForNewPassword.append(inputForNewPassword);

  //-------------

  const buttonForChangePassword: HTMLButtonElement =
    document.createElement('button');
  buttonForChangePassword.className = 'buttonForChangePassword';
  buttonForChangePassword.id = 'buttonForChangePassword';
  buttonForChangePassword.textContent = 'Change your password';
  wrapperPassword.append(buttonForChangePassword);

  //--------object for General info -------

  buttonForChangeGenData.addEventListener('click', function () {
    getInfoFromInputs();
    editUserData(localStorage.getItem('access_token_auth'));
  });

  buttonForChangePassword.addEventListener('click', function () {
    editPassword(localStorage.getItem('access_token_auth'));
  });

  buttonForChangeAddress.addEventListener('click', function () {
    editAddress(localStorage.getItem('access_token_auth'));
  });
}
