import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserComponent } from './user.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserordersComponent } from './userorders/userorders.component';
import { UsercartComponent } from './usercart/usercart.component';
import { UsercheckoutComponent } from './usercheckout/usercheckout.component';
import { UserproductsComponent } from './userproducts/userproducts.component';
import { MatOptionModule } from '@angular/material/core';
import { UserfooterComponent } from './userfooter/userfooter.component';
import { LivingRoomComponent } from './living-room/living-room.component';
import { BedroonComponent } from './bedroon/bedroon.component';
import { DiningRoomComponent } from './dining-room/dining-room.component';
import { StorageComponent } from './storage/storage.component';
import { UserPostComponent } from './user-post/user-post.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateUserLoginComponent } from './update-user-login/update-user-login.component';

@NgModule({
  declarations: [
    UserhomeComponent,
    UserComponent,
    UserheaderComponent,
    UserprofileComponent,
    UserordersComponent,
    UsercartComponent,
    UsercheckoutComponent,
    UserproductsComponent,
    UserfooterComponent,
    LivingRoomComponent,
    BedroonComponent,
    DiningRoomComponent,
    StorageComponent,
    UserPostComponent,
    UpdateUserComponent,
    UpdateUserLoginComponent,

  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonToggleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatOptionModule,
    RouterModule

  ],
  exports: [
    UserheaderComponent // Add UserheaderComponent to the exports array
  ]
})
export class UserModule { }
