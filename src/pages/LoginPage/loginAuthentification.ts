import { getAccessToken } from "../../index";

export const accessTokenForAuth = getAccessToken();

const urlForUser = "https://api.us-east-2.aws.commercetools.com/jffecommerce/customers/a71554f9-1e6f-4781-a9b5-f0bac0a6f9d5";

/*
curl --get https://api.us-east-2.aws.commercetools.com/jffecommerce/customers/a71554f9-1e6f-4781-a9b5-f0bac0a6f9d5 -i \
 --header 'Authorization: Bearer tMlejRBdqheSfLI30wZRaeiZuJaoW4wT'
*/

async function setNewUser(url: string) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessTokenForAuth}`,
        }
    });
    const resp = await response.json();
    return JSON.stringify(resp);
}

setNewUser(urlForUser)  
    .then(info => {
    localStorage.setItem("user", info);
    return info;
    })
    .catch(err => console.log(err))

/*
curl https://api.us-east-2.aws.commercetools.com/jffecommerce/customers -i \
 --header 'Authorization: Bearer tMlejRBdqheSfLI30wZRaeiZuJaoW4wT' \
 --header 'Content-Type: application/json' \
 --data-binary @- << DATA 
 {
   "email" : "test5@test.com",
   "firstName" : "test5",
   "lastName" : "test5",
   "password" : "test5"
 }
DATA
*/