import { Auth } from "./auth";
import { CompanyProducts } from "./company-products";

export class UserCart {
    cartId!:number;
    totalCost!:number;
    quantity!:number;
    productsInCart!:CompanyProducts[];
    auth!:Auth;
}
