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

/*
fetch(`https://api.us-east-2.aws.commercetools.com
/jffecommerce/api-clients/4hGzQciW9_bymQYQVIueryeN`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log("data" + data);
        console.log("access_token" + JSON.stringify(data));
    })  
    .catch((error) => {
        console.log(error);
    });
*/
