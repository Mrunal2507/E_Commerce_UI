import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/components/product.service';
import { UserCart } from 'src/app/components/user-cart';
import { UserOrder } from 'src/app/components/user-order';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usercheckout',
  templateUrl: './usercheckout.component.html',
  styleUrls: ['./usercheckout.component.css']
})
export class UsercheckoutComponent implements OnInit{

  radioButtonSelected = false;
  order:UserOrder=new UserOrder();
  cart:UserCart=new UserCart();
  isLoading!: boolean;

  constructor(private productService:ProductService, private _snackBar: MatSnackBar) { }

  toggleRadioButton(): void {
    this.radioButtonSelected = !this.radioButtonSelected;
  }

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

  checkout() {
    const currentDate = new Date();
    const dispatchDate = new Date(currentDate);
    dispatchDate.setDate(currentDate.getDate() + 10);
    this.order.orderDate = currentDate;
    this.order.dispatchDate = dispatchDate;
    this.order.quantity = this.cart.quantity;
    console.log(this.cart.totalCost);
    this.order.cost = this.cart.totalCost;
    console.log(this.order.cost);
    
    this.order.orderStatus = "Order Confirmed";
    this.order.products = this.cart.productsInCart;
    this.order.auth = this.cart.auth;
    const emailId = localStorage.getItem('emailId') + '';
    this.productService.addOrder(emailId, this.order).subscribe(
      (response) => {
        console.log("Order Confirmed");

        Swal.fire({
          text: "You will shortly receive a mail ragarding order details",
          imageUrl: "/assets/order2.gif"
        });
      },

      (error) => {
        console.log(error);
      }
    );
  }

  removeAll() {
    const cartId = Number(localStorage.getItem('cartId'));
    this.productService.removeAllFromCart(cartId).subscribe(
      (result: boolean) => {
        console.log('Removed From Cart successful:', result);
      },
      (error: any) => {
        console.error('Failed to remove product:', error);
      }
    );
  }

}
