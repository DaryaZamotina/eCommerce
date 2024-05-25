import { createProductCard } from "../../pages/ProductDetails/productCardDetails"
import { clearPageContainer } from "../..";

export function openProductCard() {
    
    clearPageContainer();
    createProductCard();

    // сюда еще добавить роутинг на страницу продукта
}