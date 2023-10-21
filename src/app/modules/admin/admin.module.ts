import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminComponent } from './admin.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import { AdminrequestComponent } from './adminrequest/adminrequest.component';
import { AdminacceptedComponent } from './adminaccepted/adminaccepted.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AdminLivingComponent } from './admin-living/admin-living.component';
import { RouterModule } from '@angular/router';
import { AdminBedroomComponent } from './admin-bedroom/admin-bedroom.component';
import { AdminDiningComponent } from './admin-dining/admin-dining.component';
import { AdminStorageComponent } from './admin-storage/admin-storage.component';
import { AdminRejectedComponent } from './admin-rejected/admin-rejected.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { FormsModule } from '@angular/forms';
import { UpdateLoginComponent } from './update-login/update-login.component';
import { AdminSoldProductsComponent } from './admin-sold-products/admin-sold-products.component';

@NgModule({
  declarations: [
    AdminhomeComponent,
    AdminComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminrequestComponent,
    AdminacceptedComponent,
    AdminLivingComponent,
    AdminBedroomComponent,
    AdminDiningComponent,
    AdminStorageComponent,
    AdminRejectedComponent,
    AdminProfileComponent,
    AdminUsersComponent,
    UpdateAdminComponent,
    UpdateLoginComponent,
    AdminSoldProductsComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    FormsModule
  ]
})
export class AdminModule { }
