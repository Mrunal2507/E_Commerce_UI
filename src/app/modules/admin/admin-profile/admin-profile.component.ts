import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Auth } from 'src/app/components/auth';
import { UserService } from 'src/app/components/user.service';
import { UpdateAdminComponent } from '../update-admin/update-admin.component';
import { UpdateLoginComponent } from '../update-login/update-login.component';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit{
  auth:Auth=new Auth();
  showPassword = false;

  constructor(private userService:UserService, private dialog: MatDialog){ }
  
  ngOnInit(): void {
    this.getUserByEmailId();
  }

  getUserByEmailId(){
    let emailId = 'admin@gmail.com'
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
    this.dialog.open(UpdateAdminComponent, {
      width: '600px',
      height:'450px'
    });
  }

  openProfileDialog1(): void {
    this.dialog.open(UpdateLoginComponent, {
      width: '600px',
      height:'350px'
    });
  }

}
