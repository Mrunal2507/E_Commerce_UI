import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyProducts } from 'src/app/components/company-products';
import { ProductService } from 'src/app/components/product.service';
import { UserService } from 'src/app/components/user.service';

@Component({
  selector: 'app-dining-room',
  templateUrl: './dining-room.component.html',
  styleUrls: ['./dining-room.component.css']
})
export class DiningRoomComponent implements OnInit{
  CompanyProductsList: CompanyProducts[] = [];
  
  constructor(private productService:ProductService, private userService: UserService,  private _snackBar: MatSnackBar){ }
  
  ngOnInit(): void {
    this.getAllCompanyProductsByCategory();
  }

  getAllCompanyProductsByCategory(){
    let category='Dining Room'
    this.productService.getAllCompanyProductsByCategory(category).subscribe(
      (Response)=>{
        this.CompanyProductsList=Response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  addtoCart(companyProduct: CompanyProducts) {

    if (this.userService.isLoggedIn()) {
      let cartId: number = parseInt(localStorage.getItem("cartId") + '');
      console.log(cartId);
      this.productService.addProductsToCart(cartId, companyProduct).subscribe(
        (Response) => {
          console.log("Added To cart");
          this._snackBar.open("Product Added to cart", "", {
            duration: 2000,
      });
    },

    (error) => {
      console.log("Error"+error);
    });
  }
}
}
