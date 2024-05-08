const   projectKey: string = "jffecommerce";

interface APIclient {
    clientID: string,
    clientSecret: string,

    getKeyOfClient: () => string,

    getToken: () => string
}

export const testAPIclient: APIclient = {
    clientID: "4hGzQciW9_bymQYQVIueryeN",
    clientSecret: "jXSrGYfznZ46cJXieD33kM0kaEhJ7-FN",
    
    getKeyOfClient(): string {
        return btoa(`${this.clientID}:${this.clientSecret}`);
    },
    
    getToken(): string {
        let accessToken: string;

        fetch(`https://auth.us-east-2.aws.commercetools.com/oauth/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${testAPIclient.getKeyOfClient()}`,
            },
            body: new URLSearchParams({
                'grant_type': 'client_credentials',
                'client_id': `${this.clientID}`,
                'client_secret': `${this.clientSecret}`,
                'scope': `manage_customers:${projectKey}`
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let tokenData = JSON.stringify(data);
            accessToken = data.access_token;
            console.log("token = " + tokenData);
            console.log("access_token = " + accessToken);
        })  
        .catch((error) => {
            console.log("error = " + error);
        });

        return accessToken;
    }
}
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
