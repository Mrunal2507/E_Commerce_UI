import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product.service';
import { UserProduct } from 'src/app/components/user-product';

@Component({
  selector: 'app-admin-rejected',
  templateUrl: './admin-rejected.component.html',
  styleUrls: ['./admin-rejected.component.css']
})
export class AdminRejectedComponent implements OnInit{

  UserProductsList: UserProduct[] = [];
  constructor(private productService:ProductService, private router: Router){ }
  
  ngOnInit(): void {
    this.getAllUserProductsByApprovalStatus();
  }

  getAllUserProductsByApprovalStatus(){
    let approvalStatus='Rejected'
    this.productService.getAllUserProductsByApprovalStatus(approvalStatus).subscribe(
      (Response)=>{
        this.UserProductsList=Response;
      },
      (error)=>{
        console.log(error);
      }
    );
  } 

}
