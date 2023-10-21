import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/components/user.service';
import { LoginComponent } from 'src/app/components/login/login.component';
@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css'],

})
export class UserheaderComponent implements OnInit {
  isLoggegIn!: boolean;
  userName!: any;
  isH1Visible = true;
  isActive: boolean[] = [false, false, false, false];
  
  constructor(
    private userService: UserService,
    private router: Router,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.isLoggegIn = this.userService.isLoggedIn();
    this.userName = localStorage.getItem('firstname')?.toString();
  }

  logoutbutton() {
    this.userService.logout();
    this.router.navigate(['/user/home']);
    this.ngOnInit();
  }

  loginbutton() {
    if (!this.isLoggegIn) {
      this.router.navigate(['/login']);
    }
  }

  closeH1() {
    this.isH1Visible = false;
  }

  activateButton(index: number) {
    this.isActive = this.isActive.map((value, i) => i === index);
  }
}
