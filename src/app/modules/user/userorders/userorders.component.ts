import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/product.service';
import { UserOrder } from 'src/app/components/user-order';

@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.css']
})
export class UserordersComponent implements OnInit{
  orders: UserOrder[] = [];

  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    this.getOrdersByEmailId();
  }

  getOrdersByEmailId(): void {
    let emailId = localStorage.getItem('emailId') + '';
    this.productService.getOrdersByEmailId(emailId).subscribe(
      (orders) => {
        this.orders = orders;
        console.log('Orders:', this.orders);
      },
      (error) => {
        console.error('Failed to fetch orders:', error);
      }
    );
  }
}
