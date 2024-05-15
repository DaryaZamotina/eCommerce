import '../../../public/assets/css/body.css';

export const projectKey: string = 'jffecommerce';

interface APIclient {
  clientID: string;
  clientSecret: string;

  getKeyOfClient: () => string;
}

const api = 'https://auth.us-east-2.aws.commercetools.com/oauth/token';

export const testAPIclient: APIclient = {
  clientID: '4hGzQciW9_bymQYQVIueryeN',
  clientSecret: 'jXSrGYfznZ46cJXieD33kM0kaEhJ7-FN',

  getKeyOfClient(): string {
    return btoa(`${this.clientID}:${this.clientSecret}`);
  },
};

export function receiveAccessToken() {
  async function getDataToken(url: string) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${testAPIclient.getKeyOfClient()}`,
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: testAPIclient.clientID,
        client_secret: testAPIclient.clientSecret,
        scope: `manage_customers:${projectKey}`,
      }),
    });
    const resp = await response.json();
    return JSON.stringify(resp);
  }

  getDataToken(api)
    .then((output) => {
      localStorage.setItem('token', output);
      const jsonToken = JSON.parse(output);
      const accessToken = jsonToken.access_token;
      localStorage.setItem('access_token_auth', accessToken);
      console.log('accessToken for authentification = ' + accessToken);
      return output;
    })
    .catch((err) => console.log(err));
}
