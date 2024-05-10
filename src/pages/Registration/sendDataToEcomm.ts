// Part from LoginPage in order to obtain access token:

import { getAccessToken } from "../../index";

export const accessTokenForAuth = getAccessToken();

const   projectKey: string = "jffecommerce";

interface APIclient {
    clientID: string,
    clientSecret: string,

    getKeyOfClient: () => string,
}

const api = 'https://auth.us-east-2.aws.commercetools.com/oauth/token';

export const testAPIclient: APIclient = {
    clientID: "4hGzQciW9_bymQYQVIueryeN",
    clientSecret: "jXSrGYfznZ46cJXieD33kM0kaEhJ7-FN",

    getKeyOfClient(): string {
        return btoa(`${this.clientID}:${this.clientSecret}`);
    },
}

async function getDataToken(url: string) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${testAPIclient.getKeyOfClient()}`,
        },
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
            'client_id': testAPIclient.clientID,
            'client_secret': testAPIclient.clientSecret,
            'scope': `manage_customers:${projectKey}`
        })
    });
    const resp = await response.json();
    return JSON.stringify(resp);
}

getDataToken(api)  
    .then(output => {
    localStorage.setItem("token", output);
    return output;
    })
    .catch(err => console.log(err))

// End of LoginPage part

const urlToEcommForRegistration = "https://api.us-east-2.aws.commercetools.com/jffecommerce/customers";

let formDataOfNewUser = JSON.stringify({
        "email" : "test7@test.com",
        "firstName" : "test7",
        "lastName" : "test7",
        "password" : "test7"
  })

console.log(JSON.stringify(formDataOfNewUser));

export async function sendNewUserInfo(url: string) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessTokenForAuth}`,
        },
        body: formDataOfNewUser
    });
    const resp = await response.json();
    return JSON.stringify(resp);
}

sendNewUserInfo(urlToEcommForRegistration)  
    .then(output => {
    localStorage.setItem("newUser", output);
    return output;
    })
    .catch(err => console.log(err))