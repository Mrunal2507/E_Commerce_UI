import { Auth } from "./auth";

export class UserProduct {
    userProductId!:number;
    userProductName!:String;
    userProductImage!:String;
    userProductPrice!:number;
    category!:String;
    description!:String;
    requestDate!:Date;
    approvalStatus!:String;
    auth!:Auth;
}
