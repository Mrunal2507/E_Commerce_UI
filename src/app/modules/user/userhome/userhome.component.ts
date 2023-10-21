import { Component, OnInit } from '@angular/core';
import { CompanyProducts } from 'src/app/components/company-products';
import { ProductService } from 'src/app/components/product.service';
import { UserService } from 'src/app/components/user.service';
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit{
  
  companyProductsList: CompanyProducts[] = [];
  firstFourProductsLoaded: boolean = false;
  allProductsLoaded: boolean = false;
  isLoggegIn!: boolean;
  cartId!: number;
  product!: CompanyProducts;
  
  constructor(private productService: ProductService, private userService: UserService,  private _snackBar: MatSnackBar){ }
  
  ngOnInit(): void {
    this.getAllCompanyProducts();
  }

  getAllCompanyProducts() {
    this.productService.getAllCompanyProducts().subscribe(
      (response: CompanyProducts[]) => {
        this.companyProductsList = response;
        this.loadFirstFourProducts();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  loadFirstFourProducts() {
    this.companyProductsList = this.companyProductsList.slice(0, 4);
    this.firstFourProductsLoaded = true;
  }

  loadAllProducts() {
    this.productService.getAllCompanyProducts().subscribe(
      (response: CompanyProducts[]) => {
        this.companyProductsList = response;
        this.allProductsLoaded = true;
      },
      (error: any) => {
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
          duration: 1000,
      });
    },

    (error) => {
      console.log("Error");
    });
  }
}
  
}
