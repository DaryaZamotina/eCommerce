export async function checkCartExistence(id: string, token: string) {
    const link =
      `https://api.us-east-2.aws.commercetools.com/jffecommerce/carts/${id}`;
  
  
    async function addProduct(url: string) {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const resp = await response.json();
      return JSON.stringify(resp);
    }
  
    addProduct(link)
      .then((output) => {
        localStorage.setItem('checkingCart', output);
  
        return output;
      })
      .catch((err) => console.log(err));
  }
  