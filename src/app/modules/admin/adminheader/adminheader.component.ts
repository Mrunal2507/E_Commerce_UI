import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { UserService } from 'src/app/components/user.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {
  isLoggegIn!: boolean;
  userName!: any;
  isH1Visible = true;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isLoggegIn = this.userService.isLoggedIn();
    this.userName = localStorage.getItem('firstname')?.toString();
  }

  logoutbutton() {
    this.userService.logout();
    this.router.navigate(['/admin/home']);
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
}
