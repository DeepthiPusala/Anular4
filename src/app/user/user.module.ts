import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {UserRoutingModule} from './userrouting.module'
import { ProfileComponent } from './profile.component';
import { UserLoginComponent } from './userlogin.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({

  declarations: [
    ProfileComponent,
    UserLoginComponent
    ],
  imports: [
    CommonModule,
     UserRoutingModule,
     FormsModule,
     ReactiveFormsModule

    
  ],
  providers: [],
  exports:[
    ProfileComponent,
    UserLoginComponent
  ]

  })
export class UserModule { }