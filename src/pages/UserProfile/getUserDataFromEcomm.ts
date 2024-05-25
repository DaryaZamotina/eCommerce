/*
curl --get https://api.us-east-2.aws.commercetools.com/jffecommerce/customers/a71554f9-1e6f-4781-a9b5-f0bac0a6f9d5 -i \
 --header 'Authorization: Bearer tMlejRBdqheSfLI30wZRaeiZuJaoW4wT'
*/


export function getUserInfoFromEcomm(token: string) {
    const link =
      `https://api.us-east-2.aws.commercetools.com/jffecommerce/me`;
  
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

        const userProfileSection1 = document.getElementById('userProfileSection1');
        userProfileSection1.textContent = info;
  
        //const homeSection = document.getElementById('homeSection');
        //homeSection.textContent = infoJSON.results;
        
        //console.log('numberOfGoods = ' + numberOfGoods);
        //createProductsList(numberOfGoods, infoJSON.results);
  
        /*console.log('refresh_token_for_user = ' + infoJSON.refresh_token);
          localStorage.setItem('access_token_for_user', infoJSON.access_token);
          localStorage.setItem('refresh_token_for_user', infoJSON.refresh_token);*/
  
        return info;
      })
      .catch((err) => console.log(err.message));
  }
  