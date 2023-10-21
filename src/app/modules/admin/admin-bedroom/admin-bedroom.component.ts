import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product.service';
import { UserProduct } from 'src/app/components/user-product';

@Component({
  selector: 'app-admin-bedroom',
  templateUrl: './admin-bedroom.component.html',
  styleUrls: ['./admin-bedroom.component.css']
})
export class AdminBedroomComponent implements OnInit{

  UserProductsList: UserProduct[] = [];
  constructor(private productService:ProductService, private router: Router){ }
  
  ngOnInit(): void {
    this.getAllUserProductsByCategory();
  }

  getAllUserProductsByCategory(){
    let category='Bedroom'
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
