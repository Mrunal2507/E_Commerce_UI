import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Auth } from 'src/app/components/auth';
import { UserService } from 'src/app/components/user.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit{
  auth:Auth=new Auth();
  emailId!: string;

  constructor(private userService:UserService, private dialogRef: MatDialogRef<UpdateAdminComponent>, private _snackBar: MatSnackBar){ }
  
  ngOnInit(): void {
    this.getUserByEmailId();
  }

  getUserByEmailId(){
    let emailId = 'admin@gmail.com'
    this.userService.getUserByEmailId(emailId).subscribe(
      (Response: any)=>{
        this.auth=Response;
      },
      (error: any)=>{
        console.log(error);
      }
    );
  }
  
  onUpdateClick(): void {
    this.userService.updateAuthByEmail(this.auth.emailId, this.auth).subscribe(
      (response: Auth) => {
        console.log('Auth updated successfully:', response);
        // Close the dialog after successful update
        this.dialogRef.close();
        this._snackBar.open("Profile updated Successfully", "", {
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
