import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course/coursedetail.component';
import { ErrorComponent } from './course/Error.component';
import {CourseIdRouter} from './shared/courseid.router.service'
import { CreateCourseComponent } from './course/createcourse.component';
import {UserModule} from './user/user.module';


const routes: Routes = [

  {path:'courses', component: CourseComponent},
  {path:'courses/:a', component: CourseDetailComponent,canActivate:[CourseIdRouter]},
  {path:'createcourse',component:CreateCourseComponent},
  //canDeactivate:['candeactivateCreateCourseLink']},
  {path:'user', loadChildren:'./user/user.module#UserModule'},
  {path:'404',component: ErrorComponent},
  {path:'', redirectTo:'/courses',pathMatch:'full'},
  {path:'**', redirectTo: '/404' ,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
