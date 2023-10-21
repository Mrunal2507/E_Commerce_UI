import { Auth } from "./auth";
import { CompanyProducts } from "./company-products";

export class UserOrder {
    orderId!: number;
    orderDate!: Date;
    dispatchDate!: Date;
    quantity!: number;
    cost!: number;
    orderStatus!: String;
    products!: CompanyProducts[];
    auth!: Auth;
}
