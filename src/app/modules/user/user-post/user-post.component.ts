import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product.service';
import { UserProduct } from 'src/app/components/user-product';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit{

  UserProductsList: UserProduct[] = [];

  constructor(private productService:ProductService, private router: Router){ }
  
  ngOnInit(): void {
    this.getAllUserProductsByEmailId();
  }

  getAllUserProductsByEmailId(){
    let emailId=localStorage.getItem('emailId')+'';
    this.productService.getAllUserProductsByEmailId(emailId).subscribe(
      (Response)=>{
        this.UserProductsList=Response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
