import TagCreator from '../../module/tagCreator';
import { IUser } from './userInterface';
import '../../../public/assets/css/userProfilePage.css';

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
  const lastAddress = address[address.length - 1];
  const street = lastAddress.streetName;
  const city = lastAddress.city;
  const coutry = lastAddress.country;
  const postalCode = lastAddress.postalCode;

  const wrapperProfile = document.createElement('div');
  wrapperProfile.className = 'wrapperProfile';
  wrapperProfile.id = 'wrapperProfile';
  profileSection.append(wrapperProfile);

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
  const labelForPassword: HTMLLabelElement = document.createElement('label');
  labelForPassword.textContent = 'Password';
  wrapperProfile.append(labelForPassword);

  const inputForPassword: HTMLInputElement = document.createElement('input');
  inputForPassword.className = 'inputForEmail';
  inputForPassword.id = 'inputForEmail';
  inputForPassword.type = 'password';
  inputForPassword.placeholder = `${password}`;
  labelForPassword.append(inputForPassword);
  //-------------
  const labelForStreet: HTMLLabelElement = document.createElement('label');
  labelForStreet.textContent = 'Street';
  wrapperProfile.append(labelForStreet);

  const inputForStreet: HTMLInputElement = document.createElement('input');
  inputForStreet.className = 'inputForStreet';
  inputForStreet.id = 'inputForStreet';
  inputForStreet.placeholder = `${street}`;
  labelForStreet.append(inputForStreet);

  //-------------

  const labelForStreetNumber: HTMLLabelElement =
    document.createElement('label');
  labelForStreetNumber.textContent = 'Street No.';
  wrapperProfile.append(labelForStreetNumber);

  const inputForStreetNo: HTMLInputElement = document.createElement('input');
  inputForStreetNo.className = 'inputForStreetNo';
  inputForStreetNo.id = 'inputForStreetNo';
  inputForStreetNo.placeholder = ``;
  labelForStreetNumber.append(inputForStreetNo);

  //-------------
  const labelForPostalCode: HTMLLabelElement = document.createElement('label');
  labelForPostalCode.textContent = 'Postal code ';
  wrapperProfile.append(labelForPostalCode);

  const inputForPostalCode: HTMLInputElement = document.createElement('input');
  inputForPostalCode.className = 'inputForPostalCode.';
  inputForPostalCode.id = 'inputForPostalCode.';
  inputForPostalCode.placeholder = `${postalCode}`;
  labelForPostalCode.append(inputForPostalCode);
  //-------------
  const labelForCity: HTMLLabelElement = document.createElement('label');
  labelForCity.textContent = 'City ';
  wrapperProfile.append(labelForCity);

  const inputForCity: HTMLInputElement = document.createElement('input');
  inputForCity.className = 'inputForCity';
  inputForCity.id = 'inputForCity';
  inputForCity.placeholder = `${city}`;
  labelForCity.append(inputForCity);
  //-------------
  const labelForCoutry: HTMLLabelElement = document.createElement('label');
  labelForCoutry.textContent = 'Coutry';
  wrapperProfile.append(labelForCoutry);

  const inputForCoutry: HTMLInputElement = document.createElement('input');
  inputForCoutry.className = 'inputForCoutry';
  inputForCoutry.id = 'inputForCoutry';
  inputForCoutry.placeholder = `${coutry}`;
  labelForCoutry.append(inputForCoutry);

  //-------------

  const buttonForChangeData: HTMLButtonElement =
    document.createElement('button');
  buttonForChangeData.className = 'buttonForChaneData';
  buttonForChangeData.id = 'buttonForChaneData';
  buttonForChangeData.textContent = 'Change your profile data';
  wrapperProfile.append(buttonForChangeData);
}
