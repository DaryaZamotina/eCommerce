import TagCreator from "../../module/tagCreator";
import { IUser } from "./userInterface";
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

    const wrapperProfile = document.createElement('div');
    wrapperProfile.className = "wrapperProfile";
    wrapperProfile.id = "wrapperProfile";
    profileSection.append(wrapperProfile); 

    //-------------
    const labelForName: HTMLLabelElement  = document.createElement('label');
    labelForName.textContent = "First name ";
    wrapperProfile.append(labelForName); 

    const inputName: HTMLInputElement = document.createElement('input');
    inputName.className = "inputName";
    inputName.id = "inputName";
    inputName.placeholder = `${name}`;
    labelForName.append(inputName); 
    //-------------
    const labelForSurname: HTMLLabelElement  = document.createElement('label');
    labelForSurname.textContent = "Surname ";
    wrapperProfile.append(labelForSurname); 

    const inputSurname: HTMLInputElement = document.createElement('input');
    inputSurname.className = "inputSurname";
    inputSurname.id = "inputSurname";
    inputSurname.placeholder = `${surname}`;
    labelForSurname.append(inputSurname); 
    //-------------
    const labelForDateOfBirth: HTMLLabelElement  = document.createElement('label');
    labelForDateOfBirth.textContent = "Date of birth";
    wrapperProfile.append(labelForDateOfBirth); 

    const inputForDateOfBirth: HTMLInputElement = document.createElement('input');
    inputForDateOfBirth.className = "inputForDateOfBirth";
    inputForDateOfBirth.id = "inputForDateOfBirth";
    inputForDateOfBirth.placeholder = `${dateOfBirth}`;
    labelForDateOfBirth.append(inputForDateOfBirth); 
    //-------------
    const labelForEmail: HTMLLabelElement  = document.createElement('label');
    labelForEmail.textContent = "Email";
    wrapperProfile.append(labelForEmail); 
  
    const inputForEmail: HTMLInputElement = document.createElement('input');
    inputForEmail.className = "inputForEmail";
    inputForEmail.id = "inputForEmailh";
    inputForEmail.placeholder = `${email}`;
    labelForEmail.append(inputForEmail); 
    //-------------
    const labelForPassword: HTMLLabelElement  = document.createElement('label');
    labelForPassword.textContent = "Password";
    wrapperProfile.append(labelForPassword); 
     
    const inputForPassword: HTMLInputElement = document.createElement('input');
    inputForPassword.className = "inputForEmail";
    inputForPassword.id = "inputForEmailh";
    inputForPassword.type = "password";
    inputForPassword.placeholder = `${password}`;
    labelForPassword.append(inputForPassword); 
    //-------------
    
    const buttonForChangeData: HTMLButtonElement = document.createElement('button');
    buttonForChangeData.className = "buttonForChaneData";
    buttonForChangeData.id = "buttonForChaneData";
    buttonForChangeData.textContent = "Change your profile data";
    wrapperProfile.append(buttonForChangeData); 
}