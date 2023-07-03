import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileLayoutComponent } from './user-profile-layout/user-profile-layout.component';
import { TestLayoutComponent } from './test-layout/test-layout.component';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './user-profile-layout/footer/footer.component';
import { NavHeaderComponent } from './user-profile-layout/nav-header/nav-header.component';
import { SideBarComponent } from './user-profile-layout/side-bar/side-bar.component';
import { ContentComponent } from './user-profile-layout/content/content.component';



@NgModule({
  declarations: [
    UserProfileLayoutComponent,
    TestLayoutComponent,
    EmployeeLayoutComponent,
    BlankLayoutComponent,
    FooterComponent,
    NavHeaderComponent,
    SideBarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],exports:[FooterComponent,
    NavHeaderComponent,
    SideBarComponent,
    ContentComponent]
})
export class LayoutsModule { }
