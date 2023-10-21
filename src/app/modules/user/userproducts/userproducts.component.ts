import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product.service';
import { UserProduct } from 'src/app/components/user-product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userproducts',
  templateUrl: './userproducts.component.html',
  styleUrls: ['./userproducts.component.css']
})

export class UserproductsComponent implements OnInit {

  emailId:string|null=localStorage.getItem('emailId');
  UserProducts:UserProduct=new UserProduct();
  AddProductForm: FormGroup;
  imageBytes: Uint8Array | undefined;
  selectedFile!: File;
  UserProductsList: UserProduct[] = [];
  loading = false;

  constructor(private productService:ProductService, private formBuilder: FormBuilder, private router: Router,) { 
    this.AddProductForm = this.formBuilder.group({
      userProductName: ["", [Validators.required]],
      description: ["", [Validators.required]],
      userProductPrice: ["", [Validators.required]],
      category: ["", [Validators.required]],
      userProductImage: [""],
    });
  }
  
  ngOnInit(): void { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.UserProducts.userProductImage=this.selectedFile.name;
  }

  AddProduct(AddProductForm:FormGroup) {
    let emailId=localStorage.getItem('emailId')+'';
    this.UserProducts=AddProductForm.value;
   
    console.log(this.UserProducts);
    let formData = new FormData();
    formData.append("file", this.selectedFile)
    formData.append("emailId",emailId)
    formData.append("userProducts", JSON.stringify(this.UserProducts))
    console.log(formData);
    this.productService.addUserProducts(formData).subscribe(
      (response: any) => {
        console.log("user product added");
        console.log(response);
        AddProductForm.reset();
        this.ngOnInit();
        
        Swal.fire(
          'Good job!',
          'Product Request Added! Further details will be mailed you soon',
          'success'
        )
      },
      (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    );
  }

  onClick() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 200);
  }
  
}
