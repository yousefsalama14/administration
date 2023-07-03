import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  param1: string='';
  constructor(private toastr: ToastrService,
            private route: ActivatedRoute,
            private router:Router,
            private authService:AuthService){}
  ngOnInit(): void {
    console.log('init component')
// this.showSuccess()
this.route.queryParams.subscribe(params => {
  this.param1 = params['username'];
  this.authService.username=params['username'];
  this.authService.catchUsername(params['username']);
  console.log(this.param1)
  this.authService.setData('Hello from Module 1!');

});
//this.router.navigate(['/userprofile'])
//this.router.navigateByUrl('/userprofile')
  }
  title = 'administration';

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
