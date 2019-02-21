import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './date.component';
import { HelloComponent } from './hello.component.';
import { CourseComponent,CourselistComponent,NavComponent } from './index';
import {CourseService} from './shared/course.service';
import {CourseDetailComponent} from './course/coursedetail.component';
import {ErrorComponent} from './course/Error.component';
import {CourseIdRouter} from  './shared/courseid.router.service';
import { CreateCourseComponent } from './course/createcourse.component';
import { DurationPipe } from './course/PIPES/numbertostringpipe';
import {UserModule} from './user/user.module';
import { FormsModule } from '@angular/forms';
import{UserAuthenticationService} from './user/user.authenticate.service';
import{HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    HelloComponent,
    CourseComponent,
    CourselistComponent,
    NavComponent,
    CourseDetailComponent,
    ErrorComponent,CreateCourseComponent,
    DurationPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
 
  ],
  providers: [CourseService,
    CourseIdRouter,
    UserAuthenticationService
  //{
  //  provide:'candeactivateCreateCourseLink',
    //useValue:checkDirtyState
  //}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(createcourse: CreateCourseComponent)
{
  if(createcourse.isDirty)
 return window.confirm('Do you want to leave without saving data? ');
  
}