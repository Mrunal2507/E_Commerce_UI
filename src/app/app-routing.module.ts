import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import { AuthGuard } from './components/auth.guard';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AdminhomeComponent } from './modules/admin/adminhome/adminhome.component';
import { UserComponent } from './modules/user/user.component';
import { UserhomeComponent } from './modules/user/userhome/userhome.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserproductsComponent } from './modules/user/userproducts/userproducts.component';
import { UserprofileComponent } from './modules/user/userprofile/userprofile.component';
import { UserordersComponent } from './modules/user/userorders/userorders.component';
import { UsercheckoutComponent } from './modules/user/usercheckout/usercheckout.component';
import { UsercartComponent } from './modules/user/usercart/usercart.component';
import { LivingRoomComponent } from './modules/user/living-room/living-room.component';
import { DiningRoomComponent } from './modules/user/dining-room/dining-room.component';
import { BedroonComponent } from './modules/user/bedroon/bedroon.component';
import { StorageComponent } from './modules/user/storage/storage.component';
import { UserPostComponent } from './modules/user/user-post/user-post.component';
import { AdminacceptedComponent } from './modules/admin/adminaccepted/adminaccepted.component';
import { AdminrequestComponent } from './modules/admin/adminrequest/adminrequest.component';
import { AdminLivingComponent } from './modules/admin/admin-living/admin-living.component';
import { AdminBedroomComponent } from './modules/admin/admin-bedroom/admin-bedroom.component';
import { AdminDiningComponent } from './modules/admin/admin-dining/admin-dining.component';
import { AdminStorageComponent } from './modules/admin/admin-storage/admin-storage.component';
import { AdminRejectedComponent } from './modules/admin/admin-rejected/admin-rejected.component';
import { AdminProfileComponent } from './modules/admin/admin-profile/admin-profile.component';
import { AdminUsersComponent } from './modules/admin/admin-users/admin-users.component';
import { AdminSoldProductsComponent } from './modules/admin/admin-sold-products/admin-sold-products.component';


const routes: Routes = [

  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'forbidden', component: ForbiddenComponent },
  // { path: 'user', component:UserComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AuthGuard], data: { roles: ['Admin'] },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AdminhomeComponent },
      { path: 'accepted', component: AdminacceptedComponent },
      { path: 'request', component:AdminrequestComponent },
      { path: 'living', component:AdminLivingComponent },
      { path: 'bedroom', component:AdminBedroomComponent },
      { path: 'dining', component:AdminDiningComponent },
      { path: 'storage', component:AdminStorageComponent },
      { path: 'rejected', component:AdminRejectedComponent },
      { path: 'profile', component:AdminProfileComponent },
      { path: 'users', component:AdminUsersComponent },
      { path: 'soldProducts', component:AdminSoldProductsComponent }
    ]
  },

  {
    path: 'user', component: UserComponent,
    canActivate: [AuthGuard], data: { roles: ['User'] },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: UserhomeComponent },
      { path: 'sellproduct', component: UserproductsComponent },
      { path: 'profile', component: UserprofileComponent },
      { path: 'order', component: UserordersComponent },
      { path: 'checkout', component: UsercheckoutComponent },
      { path: 'cart', component: UsercartComponent },
      { path: 'living', component:LivingRoomComponent },
      { path: 'dining', component:DiningRoomComponent },
      { path: 'bedroom', component:BedroonComponent },
      { path: 'storage', component:StorageComponent },
      { path: 'post', component:UserPostComponent },
    ]
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterLink
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
