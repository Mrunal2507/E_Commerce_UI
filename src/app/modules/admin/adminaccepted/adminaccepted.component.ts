import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product.service';
import { UserProduct } from 'src/app/components/user-product';

@Component({
  selector: 'app-adminaccepted',
  templateUrl: './adminaccepted.component.html',
  styleUrls: ['./adminaccepted.component.css']
})
export class AdminacceptedComponent implements OnInit{

  UserProductsList: UserProduct[] = [];
  constructor(private productService:ProductService, private router: Router){ }
  
  ngOnInit(): void {
    this.getAllUserProductsByApprovalStatus();
  }

  getAllUserProductsByApprovalStatus(){
    let approvalStatus='Accepted'
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
