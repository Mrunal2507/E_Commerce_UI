import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/components/auth';
import { ProductService } from 'src/app/components/product.service';
import { UserProduct } from 'src/app/components/user-product';
import { UserService } from 'src/app/components/user.service';

@Component({
  selector: 'app-admin-living',
  templateUrl: './admin-living.component.html',
  styleUrls: ['./admin-living.component.css']
})
export class AdminLivingComponent implements OnInit{

  UserProductsList: UserProduct[] = [];
  auth:Auth=new Auth();
  constructor(private productService:ProductService, private userService:UserService){ }
  
  ngOnInit(): void {
    this.getAllUserProductsByCategory();
  }

  getAllUserProductsByCategory(){
    let category='Living Room'
    this.productService.getAllUserProductsByCategory(category).subscribe(
      (Response)=>{
        this.UserProductsList=Response;
        console.log(this.UserProductsList);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
