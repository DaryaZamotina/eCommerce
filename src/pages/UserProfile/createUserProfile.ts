import TagCreator from '../../module/tagCreator';
import { IUser } from './userInterface';
import '../../../public/assets/css/userProfilePage.css';
import getDataUser from '../Registration/getDataUser';
import { editUserData } from './editUserData';
import { IObjGeneralData } from './interfacesForObjectData';
import { getInfoFromInputs } from './getInfoFromInputs';

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

  const billingAddress = address[1];
  const streetBil: string = billingAddress.streetName;
  const cityBil: string = billingAddress.city;
  const coutryBil: string = billingAddress.country;
  const postalCodeBil: string = billingAddress.postalCode;
  const defaultShipID: string = info.defaultShippingAddressId;
  const shipID: string = info.shippingAddressIds[0];

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
  //-------------
  const labelForSurname: HTMLLabelElement = document.createElement('label');
  labelForSurname.textContent = 'Surname ';
  wrapperProfile.append(labelForSurname);

  const inputSurname: HTMLInputElement = document.createElement('input');
  inputSurname.className = 'inputSurname';
  inputSurname.id = 'inputSurname';
  inputSurname.placeholder = `${surname}`;
  labelForSurname.append(inputSurname);
  //-------------
  const labelForDateOfBirth: HTMLLabelElement = document.createElement('label');
  labelForDateOfBirth.textContent = 'Date of birth';
  wrapperProfile.append(labelForDateOfBirth);

  const inputForDateOfBirth: HTMLInputElement = document.createElement('input');
  inputForDateOfBirth.className = 'inputForDateOfBirth';
  inputForDateOfBirth.id = 'inputForDateOfBirth';
  inputForDateOfBirth.placeholder = `${dateOfBirth}`;
  labelForDateOfBirth.append(inputForDateOfBirth);
  //-------------
  const labelForEmail: HTMLLabelElement = document.createElement('label');
  labelForEmail.textContent = 'Email';
  wrapperProfile.append(labelForEmail);

  const inputForEmail: HTMLInputElement = document.createElement('input');
  inputForEmail.className = 'inputForEmail';
  inputForEmail.id = 'inputForEmailh';
  inputForEmail.placeholder = `${email}`;
  labelForEmail.append(inputForEmail);
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
  inputForStreet.placeholder = `${streetBil}`;
  labelForStreet.append(inputForStreet);

  //-------------
  const labelForPostalCode: HTMLLabelElement = document.createElement('label');
  labelForPostalCode.textContent = 'Postal code ';
  wrapperBilAddress.append(labelForPostalCode);

  const inputForPostalCode: HTMLInputElement = document.createElement('input');
  inputForPostalCode.className = 'inputForPostalCode.';
  inputForPostalCode.id = 'inputForPostalCode.';
  inputForPostalCode.placeholder = `${postalCodeBil}`;
  labelForPostalCode.append(inputForPostalCode);
  //-------------
  const labelForCity: HTMLLabelElement = document.createElement('label');
  labelForCity.textContent = 'City ';
  wrapperBilAddress.append(labelForCity);

  const inputForCity: HTMLInputElement = document.createElement('input');
  inputForCity.className = 'inputForCity';
  inputForCity.id = 'inputForCity';
  inputForCity.placeholder = `${cityBil}`;
  labelForCity.append(inputForCity);
  //-------------
  const labelForCoutry: HTMLLabelElement = document.createElement('label');
  labelForCoutry.textContent = 'Coutry';
  wrapperBilAddress.append(labelForCoutry);

  const inputForCoutry: HTMLInputElement = document.createElement('input');
  inputForCoutry.className = 'inputForCoutry';
  inputForCoutry.id = 'inputForCoutry';
  inputForCoutry.placeholder = `${coutryBil}`;
  labelForCoutry.append(inputForCoutry);

  //-------------Shipping adress -----
  const labelForStreetShip: HTMLLabelElement = document.createElement('label');
  labelForStreetShip.textContent = 'Street';
  wrapperShipAddress.append(labelForStreetShip);

  const inputForStreetShip: HTMLInputElement = document.createElement('input');
  inputForStreetShip.className = 'inputForStreet';
  inputForStreetShip.id = 'inputForStreet';
  inputForStreetShip.placeholder = `${streetShip}`;
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
  labelForPostalCodeShip.append(inputForPostalCodeShip);
  //-------------
  const labelForCityShip: HTMLLabelElement = document.createElement('label');
  labelForCityShip.textContent = 'City ';
  wrapperShipAddress.append(labelForCityShip);

  const inputForCityShip: HTMLInputElement = document.createElement('input');
  inputForCityShip.className = 'inputForCity';
  inputForCityShip.id = 'inputForCity';
  inputForCityShip.placeholder = `${cityShip}`;
  labelForCityShip.append(inputForCityShip);
  //-------------
  const labelForCoutryShip: HTMLLabelElement = document.createElement('label');
  labelForCoutryShip.textContent = 'Coutry';
  wrapperShipAddress.append(labelForCoutryShip);

  const inputForCoutryShip: HTMLInputElement = document.createElement('input');
  inputForCoutryShip.className = 'inputForCoutry';
  inputForCoutryShip.id = 'inputForCoutry';
  inputForCoutryShip.placeholder = `${coutryShip}`;
  labelForCoutryShip.append(inputForCoutryShip);

  //-------------

  const buttonForChangeAddress: HTMLButtonElement =
    document.createElement('button');
  buttonForChangeAddress.className = 'buttonForChangeAddress';
  buttonForChangeAddress.id = 'buttonForChangeAddress';
  buttonForChangeAddress.textContent = 'Change your address';
  wrapperGeneralData.append(buttonForChangeAddress);

  //-------------
  const labelForPassword: HTMLLabelElement = document.createElement('label');
  labelForPassword.textContent = 'Password';
  wrapperPassword.append(labelForPassword);

  const inputForPassword: HTMLInputElement = document.createElement('input');
  inputForPassword.className = 'inputForEmail';
  inputForPassword.id = 'inputForEmail';
  inputForPassword.type = 'password';
  inputForPassword.placeholder = `${password}`;
  labelForPassword.append(inputForPassword);
  //-------------

  const buttonForChangePassword: HTMLButtonElement =
    document.createElement('button');
  buttonForChangePassword.className = 'buttonForChangePassword';
  buttonForChangePassword.id = 'buttonForChangePassword';
  buttonForChangePassword.textContent = 'Change your password';
  wrapperPassword.append(buttonForChangePassword);

  //--------object for General info -------

  getInfoFromInputs();

  /*let objGenData: IObjGeneralData;

  const inputEmail = <HTMLInputElement>(document.getElementById('inputForEmail'));

  inputEmail.addEventListener('input', () => {
    objGenData['email'] = inputEmail.value;
    localStorage.setItem('email', inputEmail.value);
  });

  inputName.addEventListener('change', () => {
    objGenData['firstName'] = inputName.value;
    localStorage.setItem('firstName', inputName.value);
  });

  inputSurname.addEventListener('change', () => {
    objGenData['lastName'] = inputSurname.value;
  });

  inputForDateOfBirth.addEventListener('change', () => {
    objGenData['dateOfBirth'] = inputForDateOfBirth.value;
  });

  console.log('email = ' + localStorage.getItem('email'));
  //console.log("objGenData = " + objGenData); */

  //----------------

  /*buttonForChangeGenData.addEventListener('click', function () {
    editUserData(localStorage.getItem('access_token_auth'), objGenData);
  });

  /*buttonForChangeAddress.addEventListener('click', function() {
    editUserData(localStorage.getItem('access_token_auth'), objAddress);
  });

  buttonForChangePassword.addEventListener('click', function(){
    editUserData(localStorage.getItem('access_token_auth'), objPass);
  })*/
}
