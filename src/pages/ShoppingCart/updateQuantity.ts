export function updateQuantity(idGood: string, quantity: number) {
  let buttonChange = document.getElementById(`buttonChangeQuantity_${idGood}`);

  let cardProductQuantity = document.getElementById(
    `cardProductQuantity_${idGood}`,
  );

  let token: string;
  if (
    localStorage.getItem('access_token_for_user') &&
    localStorage.getItem('access_token_for_user') !== 'undefined'
  )
    token = localStorage.getItem('access_token_for_user');
  else if (
    localStorage.getItem('anonym_access_token') &&
    localStorage.getItem('anonym_access_token') !== 'undefined'
  )
    token = localStorage.getItem('anonym_access_token');

  let id = localStorage.getItem('IDCart');
  const link = `https://api.us-east-2.aws.commercetools.com/jffecommerce/carts/${id}`;

  let version: number;

  let info = JSON.parse(localStorage.getItem('newCart'));
  version = info.version;

  buttonChange.addEventListener('click', () => {
    // cardProductQuantity.textContent = `Quantity: ${quantity}`;

    /*let idOfLineItem: string;

  for (let i = 0; i < info.lineItems.length; i++) {
    if ((idGood = info.lineItems[i].productId)) {
      console.log("idGood = " + idGood + "info.lineItems[i].productId = " + info.lineItems[i].productId);
      idOfLineItem = info.lineItems[i].id;
      console.log("idOfLineItem = " + info.lineItems[i].id);
    }
  }*/

    let data = JSON.stringify({
      version: version,
      actions: [
        {
          action: 'changeLineItemQuantity',
          lineItemId: idGood,
          quantity: quantity,
        },
      ],
    });

    async function addProduct(url: string) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });
      const resp = await response.json();
      return JSON.stringify(resp);
    }

    addProduct(link)
      .then((output) => {
        localStorage.setItem('newCart', output);
        localStorage.setItem('versionOfCart', JSON.parse(output).version);

        let goodsNumber = document.getElementById('goodsNumber');

        if (goodsNumber.style.display = "none") {
          goodsNumber.style.display = "block";
        }
  
        let goodsNumberP = document.getElementById('goodsNumberP');
        let cart = JSON.parse(localStorage.getItem("newCart"));
        let numberOfGoods = String(cart.totalLineItemQuantity);
        goodsNumberP.textContent = numberOfGoods; 
  
        if (numberOfGoods == "undefined") {
          let goodsNumber = document.getElementById('goodsNumber');
          goodsNumber.style.display = "none";
        }

        return output;
      })
      .catch((err) => console.log(err));
  });
}
