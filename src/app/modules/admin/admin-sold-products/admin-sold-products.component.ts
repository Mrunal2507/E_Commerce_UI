import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/product.service';
import { UserOrder } from 'src/app/components/user-order';

@Component({
  selector: 'app-admin-sold-products',
  templateUrl: './admin-sold-products.component.html',
  styleUrls: ['./admin-sold-products.component.css']
})
export class AdminSoldProductsComponent implements OnInit{
  orders: UserOrder[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(){
    this.productService.getAllOrders().subscribe(
      (Response:UserOrder[])=>{
        this.orders=Response;
        console.log("Response ",Response);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }
}
