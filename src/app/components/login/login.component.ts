import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Auth } from "../auth";
import { UserService } from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.loginForm = this.formBuilder.group({
      emailId: ["", [Validators.required]],
      userPassword: ["", [Validators.required]],
    });
    this.signupForm = this.formBuilder.group({
      emailId: ["", [Validators.required]],
      mobileNo: ["", [Validators.required]],
      userFirstName: ["", [Validators.required]],
      userLastName: ["", [Validators.required]],
      userPassword: ["", [Validators.required, Validators.minLength(6)]],
    });
  }


  loginForm: FormGroup;
  signupForm: FormGroup;
  auth!: Auth;
  loading = false;
  
  ngOnInit(): void { }

  login(loginForm: FormGroup) {
    this.userService.authenticateUser(loginForm.value).subscribe(
      (response: Auth) => {
        console.log(response);
        if(response==null){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your access has been DENIED!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        }
        else{
        console.log("authenticated succesfully");
        localStorage.setItem("IsLoggedIn", "true");
        localStorage.setItem("emailId", response.emailId);
        localStorage.setItem("firstname", response.userFirstName);
        localStorage.setItem('roles', JSON.stringify(response.role));
        if(response.cart!=null)
        localStorage.setItem("cartId",response.cart.cartId.toString());
        console.log(response);
        loginForm.reset();
        if (this.userService.roleMatch(["Admin"])) {
          this.router.navigate(["/admin"]);
        } else if (this.userService.roleMatch(["User"])) {
          localStorage.setItem('cartId', response.cart.cartId.toString());
          this.router.navigate(["/user/home"]);
        }
        console.log(response);
        this._snackBar.open("Logged in Successfully", "", {
          duration: 2000,
        });
      }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  signup(signupForm: FormGroup) {
    this.userService.signup(signupForm.value).subscribe(
      (response: any) => {
        console.log("Register user succesfully");
        signupForm.reset();
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onClick() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

}

