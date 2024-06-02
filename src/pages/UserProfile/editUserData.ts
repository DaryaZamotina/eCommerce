import { IObjGeneralData } from './interfacesForObjectData';
import { getInfoFromInputs } from './getInfoFromInputs';
import { IUser } from './userInterface';

export function editUserData(token: string) {
  const id = localStorage.getItem('customerID');
  const link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/customers/${id}`;

  let info: IUser = JSON.parse(localStorage.getItem('newUser'));
  let version = info.version;

  const bodyData = JSON.stringify({
    version: version,
    actions: [
      {
        action: 'changeEmail',
        email: localStorage.getItem('email'),
      },
      {
        action: 'setFirstName',
        firstName: localStorage.getItem('firstName'),
      },
      {
        action: 'setLastName',
        lastName: localStorage.getItem('lastName'),
      },
      {
        action: 'setDateOfBirth',
        dateOfBirth: localStorage.getItem('dateOfBirth'),
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
      localStorage.setItem('newUser', info);
      console.log('userDetails = ' + info);
      const infoJSON = JSON.parse(info);
      return info;
    })
    .catch((err) => console.log(err.message));
}
