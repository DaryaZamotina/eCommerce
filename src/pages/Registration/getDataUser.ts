export default function getDataUser() {
  const arrInputs = document.querySelectorAll('input');
  const country = document.getElementById('selectCountry') as HTMLSelectElement;
  console.log(arrInputs[4].value);
  return {
    email: arrInputs[0].value,
    password: arrInputs[1].value,
    firstName: arrInputs[2].value,
    lastName: arrInputs[3].value,
    dateOfBirth: arrInputs[4].value,
    addresses: [
      {
        key: 'address1',
        title: 'Mrs.',
        firstName: arrInputs[2].value,
        lastName: arrInputs[3].value,
        streetName: arrInputs[6].value,
        postalCode: arrInputs[7].value,
        city: arrInputs[5].value,
        country: country.value,
        email: arrInputs[0].value,
      },
    ],
  };
}
