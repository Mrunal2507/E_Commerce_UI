import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Auth } from 'src/app/components/auth';
import { UserService } from 'src/app/components/user.service';
import { UpdateUserLoginComponent } from '../update-user-login/update-user-login.component';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit{
  auth:Auth=new Auth();
  showPassword = false;

  constructor(private userService:UserService, private dialog: MatDialog){ }
  
  ngOnInit(): void {
    this.getUserByEmailId();
  }

  getUserByEmailId(){
    let emailId = localStorage.getItem('emailId') + '';
    this.userService.getUserByEmailId(emailId).subscribe(
      (Response)=>{
        this.auth=Response;
      },
      (error)=>{
        console.log(error);
      }
    );
  } 

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  openProfileDialog(): void {
    this.dialog.open(UpdateUserComponent, {
      width: '600px',
      height:'450px'
    });
  }

  openProfileDialog1(): void {
    this.dialog.open(UpdateUserLoginComponent, {
      width: '600px',
      height:'350px'
    });
  }

}
