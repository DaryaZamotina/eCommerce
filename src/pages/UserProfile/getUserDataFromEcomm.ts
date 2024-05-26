
export function getUserInfoFromEcomm(token: string) {
  const link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/me`;

  console.log('token in getProdFunc = ' + token);

  async function getInfo(url: string) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const resp = await response.json();
    return JSON.stringify(resp);
  }

  getInfo(link)
    .then((info) => {
      localStorage.setItem('userDetails', info);
      console.log('userDetails = ' + info);
      const infoJSON = JSON.parse(info);
      /*const userProfileSection1 = document.getElementById(
        'userProfileSection1',
      );

      userProfileSection1.textContent = info; */

      return info;
    })
    .catch((err) => console.log(err.message));
}
