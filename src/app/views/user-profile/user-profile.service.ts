import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserProfile } from './../../core/model/UserProfile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
 apiUrl:string='http://localhost:8080'
  constructor(private http:HttpClient) { }


findAllUserProfile():Observable<UserProfile[]>{
 return this.http.get<UserProfile[]>(`${this.apiUrl}/userprofiles`)
}
findUserProfileById(id:string):Observable<UserProfile>{
  return this.http.get<UserProfile>(`${this.apiUrl}/userprofiles/${id}`)
}
updateUserProfile(userProfile:UserProfile):Observable<UserProfile>{
  return this.http.put<UserProfile>(`${this.apiUrl}/userprofiles/update`,userProfile)
}
}
