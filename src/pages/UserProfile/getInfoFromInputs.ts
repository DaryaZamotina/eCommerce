import { IObjGeneralData } from './interfacesForObjectData';
import { editUserData } from './editUserData';
import validateEmail from '../../Helpers/Inputs/validateEmail';
import { IUser } from './userInterface';

export function getInfoFromInputs() {
  const info: IUser = JSON.parse(localStorage.getItem('userDetails'));
  const name = info.firstName;
  const surname = info.lastName;
  const dateOfBirth = info.dateOfBirth;
  const email = info.email;

  let objGenData = {
    email: localStorage.getItem('email'),
    firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lastName'),
    dateOfBirth: localStorage.getItem('dateOfBirth'),
  };
  /*let objGenData = {
    'email': () => {
        if (localStorage.getItem('email')) {
        return localStorage.getItem('email');
      } else return email; 
    },
    'firstName': () => {
        if (localStorage.getItem('firstName')) {
            return localStorage.getItem('firstName');
          } else return name; 
    },
    'lastName': () => {
        if (localStorage.getItem('lastName')) {
        return localStorage.getItem('lastName');
      } else return surname; 
    },
    'dateOfBirth': () => { 
        if (localStorage.getItem('dateOfBirth')) {
        return localStorage.getItem('dateOfBirth');
      } else return dateOfBirth; 
    }
  }; */

  localStorage.setItem('objGenData', JSON.stringify(objGenData));

  /*const info: IUser = JSON.parse(localStorage.getItem('userDetails'));
  const name = info.firstName;
  const surname = info.lastName;
  const dateOfBirth = info.dateOfBirth;
  const email = info.email;

  let objGenData: IObjGeneralData;
  if (localStorage.getItem('email')) {
    objGenData['email'] = localStorage.getItem('email');
  } else  objGenData['email'] = email;

  if (localStorage.getItem('firstName')) {
    objGenData['firstName'] = localStorage.getItem('firstName');
  } else objGenData['firstName'] = name;

  if (localStorage.getItem('lastName')) {
     objGenData['lastName'] = localStorage.getItem('lastName');
  } else objGenData['lastName'] = surname;

  if (localStorage.getItem('dateOfBirth')) {
    objGenData['dateOfBirth'] = localStorage.getItem('dateOfBirth');
  } else objGenData['dateOfBirth'] = dateOfBirth; 
 */

  return objGenData;
}
