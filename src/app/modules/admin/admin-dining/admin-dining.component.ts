import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product.service';
import { UserProduct } from 'src/app/components/user-product';

@Component({
  selector: 'app-admin-dining',
  templateUrl: './admin-dining.component.html',
  styleUrls: ['./admin-dining.component.css']
})
export class AdminDiningComponent implements OnInit{

  UserProductsList: UserProduct[] = [];
  constructor(private productService:ProductService, private router: Router){ }
  
  ngOnInit(): void {
    this.getAllUserProductsByCategory();
  }

  getAllUserProductsByCategory(){
    let category='Dining Room'
    this.productService.getAllUserProductsByCategory(category).subscribe(
      (Response)=>{
        this.UserProductsList=Response;
      },
      (error)=>{
        console.log(error);
      }
    );
  } 
}
