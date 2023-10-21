import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Auth } from 'src/app/components/auth';
import { UserService } from 'src/app/components/user.service';
import { UpdateAdminComponent } from '../../admin/update-admin/update-admin.component';

@Component({
  selector: 'app-update-user-login',
  templateUrl: './update-user-login.component.html',
  styleUrls: ['./update-user-login.component.css']
})
export class UpdateUserLoginComponent implements OnInit{
  auth:Auth=new Auth();
  emailId!: string;
  showPassword = false;

  constructor(private userService:UserService, private dialogRef: MatDialogRef<UpdateAdminComponent>, private _snackBar: MatSnackBar){ }
  
  ngOnInit(): void {
    this.getUserByEmailId();
  }

  getUserByEmailId(){
    let emailId = localStorage.getItem('emailId') + '';
    this.userService.getUserByEmailId(emailId).subscribe(
      (Response: any)=>{
        this.auth=Response;
      },
      (error: any)=>{
        console.log(error);
      }
    );
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  
  onUpdateClick(): void {
    this.userService.updateAuthByEmail(this.auth.emailId, this.auth).subscribe(
      (response: Auth) => {
        console.log('Auth updated successfully:', response);
        // Close the dialog after successful update
        this.dialogRef.close();
        this._snackBar.open("Credentials updated Successfully", "", {
          duration: 2000,
        });
        window.location.reload();
      },
      (error: any) => {
        console.error('Error updating Auth:', error);
      }
    );
  }

}
