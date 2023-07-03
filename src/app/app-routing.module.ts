import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileLayoutComponent } from './shared/components/layouts/user-profile-layout/user-profile-layout.component';
import { EmployeeLayoutComponent } from './shared/components/layouts/employee-layout/employee-layout.component';
import { TestLayoutComponent } from './shared/components/layouts/test-layout/test-layout.component';
import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
  {path:'userprofile',component:UserProfileLayoutComponent,loadChildren:()=>import ('./views/user-profile/user-profile.module').then(m=>m.UserProfileModule)},
  {path:'employees',component:EmployeeLayoutComponent,loadChildren:()=>import ('./views/employees/employees.module').then(m=>m.EmployeesModule)},


{path:"test",component:TestLayoutComponent},
{path:"home",component:BlankLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule,SharedModule]
})
export class AppRoutingModule { }
