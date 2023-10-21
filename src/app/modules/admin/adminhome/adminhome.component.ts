import { Component, OnInit } from '@angular/core';
import { CompanyProducts } from 'src/app/components/company-products';
import { ProductService } from 'src/app/components/product.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit{
  
  companyProductsList: CompanyProducts[] = [];
  firstFourProductsLoaded: boolean = false;
  allProductsLoaded: boolean = false;

  constructor(private productService: ProductService) {}

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

}

