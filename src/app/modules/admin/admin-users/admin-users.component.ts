import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Auth } from 'src/app/components/auth';
import { UserService } from 'src/app/components/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit{
  
  userList: Auth[] = [];
  isActive!: boolean;
  emailId: string = '';  

  constructor( private userService: UserService, private _snackBar: MatSnackBar){ }
  
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (response: any[]) => {
        const regularUsers = response.filter(user => user.emailId !== 'admin@gmail.com');
        this.userList = regularUsers;
        console.log(response);
        console.log(this.userList);
      },
      (error: any) => {
        console.log(error);
      });
  }

  deactivateUser(emailId: string): void {
    if (confirm('Are you sure you want to deactivate this user?')) {
      this.userService.deactivateUser(emailId).subscribe(
        () => {
          console.log('User deactivated successfully.');
          this.isActive = false;
          this.getAllUsers(); 
          this._snackBar.open("Deactivated Successfully", "", {
            duration: 2000,
          });
        },
        (error) => {
          console.error('Error deactivating user:', error);
        }
      );
    } else {
      console.error('Email ID not found in local storage.');
    }
  }

  activateUser(emailId: string): void {
    if (confirm('Are you sure you want to activate this user?')){
      this.userService.activateUser(emailId).subscribe(
        () => {
          console.log('User activated successfully.');
          this.isActive = true; 
          this.getAllUsers();
          this._snackBar.open("Activated Successfully", "", {
            duration: 2000,
          });
        },
        (error) => {
          console.error('Error activating user:', error);
        }
      );
    } else {
      console.error('Email ID not found in local storage.');
    }
  }
}
