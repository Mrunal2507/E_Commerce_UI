import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product.service';
import { UserProduct } from 'src/app/components/user-product';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-adminrequest',
  templateUrl: './adminrequest.component.html',
  styleUrls: ['./adminrequest.component.css']
})
export class AdminrequestComponent implements OnInit{

  UserProductsList: UserProduct[] = [];
  constructor(private productService:ProductService, private router: Router,  private _snackBar: MatSnackBar ){ }
  
  ngOnInit(): void {
    this.getAllUserProductsByApprovalStatus();
  }

  getAllUserProductsByApprovalStatus(){
    let approvalStatus='Pending'
    this.productService.getAllUserProductsByApprovalStatus(approvalStatus).subscribe(
      (Response)=>{
        this.UserProductsList=Response;
      },
      (error)=>{
        console.log(error);
      }
    );
  } 

  changeStatus(productId:number,status:String){
    this.productService.changeApprovalStatus(productId,status).subscribe(
      (response)=>{
       console.log(response);
       this._snackBar.open("Status updated for product", "", {
        duration: 2000,
      });
       this.ngOnInit();
      },
      (error)=>{
        console.log(error);
        this._snackBar.open("Error", "", {
          duration: 2000,
        });
      }
    );
  }

}
