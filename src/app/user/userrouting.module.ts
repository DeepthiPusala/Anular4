import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import {UserLoginComponent} from './userlogin.component'

const routes: Routes = [

 {path:'profile' , component:ProfileComponent},
 {path:'login' , component:UserLoginComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }  
