import { createProductCard } from "./productCardDetails";
import { clearPageContainer } from "../..";
import { openProductCard } from "../../components/ProductCard/openProductCard";

export function getInfoFromEcommByIDofGood(id: string, token: string) {
    const link =
      `https://api.us-east-2.aws.commercetools.com/jffecommerce/products/${id}`;
  
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
        localStorage.setItem('choosenGood', info);
        openProductCard();
        createProductCard(id);
        return info;
      })
      .catch((err) => console.log(err.message));
  }
  