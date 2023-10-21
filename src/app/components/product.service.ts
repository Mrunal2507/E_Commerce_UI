import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyProducts } from './company-products';
import { UserCart } from './user-cart';
import { UserOrder } from './user-order';
import { UserProduct } from './user-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private PATH_OF_API = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public addUserProducts(formData1:FormData): Observable<boolean> {
    console.log(formData1);
    return this.httpClient.post<boolean>(`${this.PATH_OF_API}/userProduct/adduseproducts`,formData1);
  }

  public getAllUserProductsByEmailId(emailId:String):Observable<UserProduct[]>{
    return this.httpClient.get<UserProduct[]>(`${this.PATH_OF_API}/userProduct/getAllUserProductsByEmailId/${emailId}`);
  }

  public getAllCompanyProducts():Observable<CompanyProducts[]>{
    return this.httpClient.get<CompanyProducts[]>(`${this.PATH_OF_API}/CompanyProducts/getAllCompanyProducts`);
  }

  public addProductsToCart(cartId: number,companyProducts: CompanyProducts): Observable<Boolean> {

    return this.httpClient.put<Boolean>(`${this.PATH_OF_API}/userCart/addToCart/${cartId}`, companyProducts);

  }

  public getAllUserProductsByCategory(category:String):Observable<UserProduct[]>{
    return this.httpClient.get<UserProduct[]>(`${this.PATH_OF_API}/userProduct/getAllUserProductsByCategory/${category}`);
  }

  public getAllUserProductsByApprovalStatus(approvalStatus:String):Observable<UserProduct[]>{
    return this.httpClient.get<UserProduct[]>(`${this.PATH_OF_API}/userProduct/getAllUserProductsByStatus/${approvalStatus}`);
  }

  public changeApprovalStatus(productId: number, status:String): Observable<UserProduct[]> {
    return this.httpClient.put<UserProduct[]>(`${this.PATH_OF_API}/userProduct/changeApprovalStatus/${productId}/${status}`,null);
  }
  
  public getCart(cartId: number): Observable<UserCart> {
    return this.httpClient.get<UserCart>(`${this.PATH_OF_API}/userCart/getCart/${cartId}`);
  }

  public removeFromCart(cartId: number, companyProducts: CompanyProducts): Observable<boolean> {
    const options = {
      body: companyProducts // Include the product in the request body
    };
    return this.httpClient.delete<boolean>(`${this.PATH_OF_API}/userCart/removeFromCart/${cartId}`, options);
  }

  public removeAllFromCart(cartId: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.PATH_OF_API}/userCart/removeAllFromCart/${cartId}`)
  }

  public addOrder(emaildId: string, order: UserOrder): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.PATH_OF_API}/userOrder/addOrder/${emaildId}`, order);
  }

  public getOrdersByEmailId(emaildId: string): Observable<UserOrder[]> {
    return this.httpClient.get<UserOrder[]>(`${this.PATH_OF_API}/userOrder/getAllOrdersByEmailId/${emaildId}`);
  }

  public getAllCompanyProductsByCategory(category:String):Observable<CompanyProducts[]>{
    return this.httpClient.get<CompanyProducts[]>(`${this.PATH_OF_API}/CompanyProducts/getAllCompanyProductsByCategory/${category}`);
  }

  public getAllOrders():Observable<UserOrder[]>{
    return this.httpClient.get<UserOrder[]>(`${this.PATH_OF_API}/userOrder/getAllOrders`);
  }
}
