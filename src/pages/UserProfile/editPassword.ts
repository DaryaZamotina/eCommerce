import { IObjGeneralData } from './interfacesForObjectData';
import { getInfoFromInputs } from './getInfoFromInputs';
import { IUser } from './userInterface';

export function editPassword(token: string) {
  const index = localStorage.getItem('customerID');
  const link = `https://api.us-east-2.aws.commercetools.com/jffstore/customers/password`;

  let info: IUser = JSON.parse(localStorage.getItem('userDetails'));
  let version = info.version;

  let oldPassword: string = localStorage.getItem('oldPassword');
  let newPassword: string = localStorage.getItem('newPassword');

  const bodyData = JSON.stringify({
    id: index,
    version: version,
    currentPassword: oldPassword,
    newPassword: newPassword,
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
