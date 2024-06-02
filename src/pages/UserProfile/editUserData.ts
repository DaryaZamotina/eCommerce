import { IObjGeneralData } from './interfacesForObjectData';
import { getInfoFromInputs } from './getInfoFromInputs';
import { IUser } from './userInterface';

export function editUserData(token: string) {
  const id = localStorage.getItem('customerID');
  const link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/customers/${id}`;

  let info: IUser = JSON.parse(localStorage.getItem('userDetails'));
  let version = info.version;

  let mail: string;
  if (
    localStorage.getItem('email') &&
    localStorage.getItem('email') !== 'undefined'
  ) {
    mail = localStorage.getItem('email');
  } else mail = info.email;

  let name: string;
  if (
    localStorage.getItem('firstName') &&
    localStorage.getItem('firstName') !== 'undefined'
  ) {
    name = localStorage.getItem('firstName');
  } else name = info.firstName;

  let surname: string;
  if (
    localStorage.getItem('lastName') &&
    localStorage.getItem('lastName') !== 'undefined'
  ) {
    surname = localStorage.getItem('lastName');
  } else surname = info.firstName;

  let date: string;
  if (
    localStorage.getItem('dateOfBirth') &&
    localStorage.getItem('dateOfBirth') !== 'undefined'
  ) {
    date = localStorage.getItem('dateOfBirth');
  } else date = info.dateOfBirth;

  const bodyData = JSON.stringify({
    version: version,
    actions: [
      {
        action: 'changeEmail',
        email: mail,
      },
      {
        action: 'setFirstName',
        firstName: name,
      },
      {
        action: 'setLastName',
        lastName: surname,
      },
      {
        action: 'setDateOfBirth',
        dateOfBirth: date,
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
      console.log('userDetails = ' + info);
      const infoJSON = JSON.parse(info);
      return info;
    })
    .catch((err) => console.log(err.message));
}
