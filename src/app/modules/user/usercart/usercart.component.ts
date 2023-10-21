import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyProducts } from 'src/app/components/company-products';
import { ProductService } from 'src/app/components/product.service';
import { UserCart } from 'src/app/components/user-cart';
import { UserOrder } from 'src/app/components/user-order';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit{
  cart: UserCart = new UserCart();
  cartproduct!: CompanyProducts;
  order: UserOrder = new UserOrder();

  constructor(private productService:ProductService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const cartId = Number(localStorage.getItem('cartId'));
    console.log(cartId);
    this.productService.getCart(cartId).subscribe(
      (cart: UserCart) => {
        this.cart = cart;
        console.log('Cart:', this.cart);
      },

      (error) => {
        console.error('Error fetching cart:', error);
      }
    );
  }

  removeProduct(product: CompanyProducts) {
    let cartId: number = parseInt(localStorage.getItem("cartId") + '');
    this.productService.removeFromCart(cartId, product).subscribe(
      (Response) => {
        console.log("Removed from cart");
        this.ngOnInit();
        this._snackBar.open("removed from cart", "", {
          panelClass: 'blue-snackbar', 
          duration: 1000,
        });
      },
      (error) => {
        console.log("Error");
      }
    );
  } 

}