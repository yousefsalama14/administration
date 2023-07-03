import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileListComponent } from './user-profile-list/user-profile-list.component';
import { UserProfileDetailsComponent } from './user-profile-details/user-profile-details.component';
import { AddUserProfileComponent } from './add-user-profile/add-user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';

const routes: Routes = [
  {path:"",component:UserProfileListComponent},

  {path:"add",component:AddUserProfileComponent},
  {path:":id",component:UserProfileDetailsComponent},
  {path:":id/edit",component:EditUserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
