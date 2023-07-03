import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import { UserProfile } from './../../../core/model/UserProfile';
import { AuthService } from './../../../auth.service';


@Component({
  selector: 'app-user-profile-list',
  templateUrl: './user-profile-list.component.html',
  styleUrls: ['./user-profile-list.component.css']
})
export class UserProfileListComponent implements OnInit {


  userProfileList:UserProfile[]=[];
  page = 1;
	pageSize = 4;
  collectionSize = this.userProfileList.length;
  constructor(private userProfileService:UserProfileService,
              private authService:AuthService){}
  ngOnInit(): void {
    this.findUserProfileList();
    this.authService.getData().subscribe(data => {
      console.log('Data ',data);
    });
    console.log('Data 2');
  }
findUserProfileList(){
  console.log(this.authService.username);
  this.userProfileService.findAllUserProfile().subscribe(
    (data:UserProfile[]) =>{
      this.userProfileList=data
      console.log(data)},
    (error:Error) =>{console.log(error)},
    ()=>console.log('User Profile List Complete'))
    // this.refreshCountries();
}
// refreshCountries() {
// 	this.userProfileList = this.userProfileList.map((country, i) => ({  ...country })).slice(
//     (this.page - 1) * this.pageSize,
//     (this.page - 1) * this.pageSize + this.pageSize,
//   );
// }
}
