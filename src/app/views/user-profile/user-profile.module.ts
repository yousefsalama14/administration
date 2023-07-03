import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileListComponent } from './user-profile-list/user-profile-list.component';
import { AddUserProfileComponent } from './add-user-profile/add-user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { UserProfileDetailsComponent } from './user-profile-details/user-profile-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserProfileListComponent,
    AddUserProfileComponent,
    EditUserProfileComponent,
    UserProfileDetailsComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,SharedModule
  ]
})
export class UserProfileModule { }
