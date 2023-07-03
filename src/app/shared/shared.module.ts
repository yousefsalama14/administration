import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './components/layouts/layouts.module';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,LayoutsModule,    HttpClientModule,FormsModule,ReactiveFormsModule

  ],exports:[LayoutsModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ]
})
export class SharedModule { }
