import { Role } from "./role";
import { UserCart } from "./user-cart";

export class Auth {
    emailId!:string;
    userFirstName!:string;
    mobileNo!:number;
    userLastName!:string;
    userPassword!:string;
    active:boolean=false;
    role!:Role[];
    cart!:UserCart;
}
