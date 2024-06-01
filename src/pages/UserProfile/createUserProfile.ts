import TagCreator from '../../module/tagCreator';
import { IUser } from './userInterface';
import '../../../public/assets/css/userProfilePage.css';
import getDataUser from '../Registration/getDataUser';

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
  const lastAddress = address[0];
  const street = lastAddress.streetName;
  const city = lastAddress.city;
  const coutry = lastAddress.country;
  const postalCode = lastAddress.postalCode;

  const wrapperGeneralData = document.createElement('div');
  wrapperGeneralData.className = 'wrapperGeneralData';
  wrapperGeneralData.id = 'wrapperGeneralData';
  profileSection.append(wrapperGeneralData);

  const wrapperPassword = document.createElement('div');
  wrapperPassword.className = 'wrapperPassword';
  wrapperPassword.id = 'wrapperPassword';
  profileSection.append(wrapperPassword);

  const wrapperProfile = document.createElement('div');
  wrapperProfile.className = 'wrapperProfile';
  wrapperProfile.id = 'wrapperProfile';
  wrapperGeneralData.append(wrapperProfile);

  const wrapperBilAddress = document.createElement('div');
  wrapperBilAddress.className = 'wrapperBilAddress';
  wrapperBilAddress.id = 'wrapperBilAddress';
  wrapperGeneralData.append(wrapperBilAddress);

  const h3BilAddress = document.createElement('h3');
  h3BilAddress.className = 'h3BilAddress';
  h3BilAddress.id = 'h3BilAddress';
  h3BilAddress.textContent = 'Billing address';
  wrapperBilAddress.append(h3BilAddress);

  const wrapperShipAddress = document.createElement('div');
  wrapperShipAddress.className = 'wrapperShipAddress';
  wrapperShipAddress.id = 'wrapperShipAddress';
  wrapperGeneralData.append(wrapperShipAddress);

  const h3ShipAddress = document.createElement('h3');
  h3ShipAddress.className = 'h3ShipAddress';
  h3ShipAddress.id = 'h3ShipAddress';
  h3ShipAddress.textContent = 'Shipping address';
  wrapperShipAddress.append(h3ShipAddress);

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

  //-------------Billing adress -----
  const labelForStreet: HTMLLabelElement = document.createElement('label');
  labelForStreet.textContent = 'Street';
  wrapperBilAddress.append(labelForStreet);

  const inputForStreet: HTMLInputElement = document.createElement('input');
  inputForStreet.className = 'inputForStreet';
  inputForStreet.id = 'inputForStreet';
  inputForStreet.placeholder = `${street}`;
  labelForStreet.append(inputForStreet);

  //-------------

  const labelForStreetNumber: HTMLLabelElement =
    document.createElement('label');
  labelForStreetNumber.textContent = 'Street No.';
  wrapperBilAddress.append(labelForStreetNumber);

  const inputForStreetNo: HTMLInputElement = document.createElement('input');
  inputForStreetNo.className = 'inputForStreetNo';
  inputForStreetNo.id = 'inputForStreetNo';
  inputForStreetNo.placeholder = ``;
  labelForStreetNumber.append(inputForStreetNo);

  //-------------
  const labelForPostalCode: HTMLLabelElement = document.createElement('label');
  labelForPostalCode.textContent = 'Postal code ';
  wrapperBilAddress.append(labelForPostalCode);

  const inputForPostalCode: HTMLInputElement = document.createElement('input');
  inputForPostalCode.className = 'inputForPostalCode.';
  inputForPostalCode.id = 'inputForPostalCode.';
  inputForPostalCode.placeholder = `${postalCode}`;
  labelForPostalCode.append(inputForPostalCode);
  //-------------
  const labelForCity: HTMLLabelElement = document.createElement('label');
  labelForCity.textContent = 'City ';
  wrapperBilAddress.append(labelForCity);

  const inputForCity: HTMLInputElement = document.createElement('input');
  inputForCity.className = 'inputForCity';
  inputForCity.id = 'inputForCity';
  inputForCity.placeholder = `${city}`;
  labelForCity.append(inputForCity);
  //-------------
  const labelForCoutry: HTMLLabelElement = document.createElement('label');
  labelForCoutry.textContent = 'Coutry';
  wrapperBilAddress.append(labelForCoutry);

  const inputForCoutry: HTMLInputElement = document.createElement('input');
  inputForCoutry.className = 'inputForCoutry';
  inputForCoutry.id = 'inputForCoutry';
  inputForCoutry.placeholder = `${coutry}`;
  labelForCoutry.append(inputForCoutry);

  //-------------Shipping adress -----
  const labelForStreetShip: HTMLLabelElement = document.createElement('label');
  labelForStreetShip.textContent = 'Street';
  wrapperShipAddress.append(labelForStreetShip);

  const inputForStreetShip: HTMLInputElement = document.createElement('input');
  inputForStreetShip.className = 'inputForStreet';
  inputForStreetShip.id = 'inputForStreet';
  inputForStreetShip.placeholder = `${street}`;
  labelForStreetShip.append(inputForStreetShip);

  //-------------

  const labelForStreetNumberShip: HTMLLabelElement =
    document.createElement('label');
  labelForStreetNumberShip.textContent = 'Street No.';
  wrapperShipAddress.append(labelForStreetNumberShip);

  const inputForStreetNoShip: HTMLInputElement =
    document.createElement('input');
  inputForStreetNoShip.className = 'inputForStreetNo';
  inputForStreetNoShip.id = 'inputForStreetNo';
  inputForStreetNoShip.placeholder = ``;
  labelForStreetNumberShip.append(inputForStreetNoShip);

  //-------------
  const labelForPostalCodeShip: HTMLLabelElement =
    document.createElement('label');
  labelForPostalCodeShip.textContent = 'Postal code ';
  wrapperShipAddress.append(labelForPostalCodeShip);

  const inputForPostalCodeShip: HTMLInputElement =
    document.createElement('input');
  inputForPostalCodeShip.className = 'inputForPostalCode.';
  inputForPostalCodeShip.id = 'inputForPostalCode';
  inputForPostalCodeShip.placeholder = `${postalCode}`;
  labelForPostalCodeShip.append(inputForPostalCodeShip);
  //-------------
  const labelForCityShip: HTMLLabelElement = document.createElement('label');
  labelForCityShip.textContent = 'City ';
  wrapperShipAddress.append(labelForCityShip);

  const inputForCityShip: HTMLInputElement = document.createElement('input');
  inputForCityShip.className = 'inputForCity';
  inputForCityShip.id = 'inputForCity';
  inputForCityShip.placeholder = `${city}`;
  labelForCityShip.append(inputForCityShip);
  //-------------
  const labelForCoutryShip: HTMLLabelElement = document.createElement('label');
  labelForCoutryShip.textContent = 'Coutry';
  wrapperShipAddress.append(labelForCoutryShip);

  const inputForCoutryShip: HTMLInputElement = document.createElement('input');
  inputForCoutryShip.className = 'inputForCoutry';
  inputForCoutryShip.id = 'inputForCoutry';
  inputForCoutryShip.placeholder = `${coutry}`;
  labelForCoutryShip.append(inputForCoutryShip);

  //-------------

  const buttonForChangeData: HTMLButtonElement =
    document.createElement('button');
  buttonForChangeData.className = 'buttonForChangeData';
  buttonForChangeData.id = 'buttonForChangeData';
  buttonForChangeData.textContent = 'Change your profile data';
  wrapperGeneralData.append(buttonForChangeData);

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
}
