import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private selectRegionSource=new BehaviorSubject<string|null>(null);
  selectRegionChanges$=this.selectRegionSource.asObservable();
username:string='';
password:string='';
  constructor() { }

  catchUsername(username:string|null):void{
    console.log('catch username',username)
    this.username!= username
 this.selectRegionSource.next(username);
   }

   private data = new Subject<string>();
  
   setData(data: string) {
     this.data.next(data);
   }
   
   getData() {
     return this.data.asObservable();
   }
}
