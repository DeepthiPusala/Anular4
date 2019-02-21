import { Component } from '@angular/core';
import { CourseService } from '../shared/course.service';
import { Course } from '../shared/Course.model';

@Component({
  selector: 'course',
  template:`<div>

  <h1>Up Coming Courses</h1>

<div class="row">
    <div *ngFor="let course of courses"> 
     <coursethumbnail #courseobj (eventcaptured)=parent($event) [tempcourse]='course'> </coursethumbnail></div>
     <div> <button class='btn btn-primary' (click)=courseobj.callme()>Call </button> </div>       
</div>
  `,
})
export class CourseComponent {
  
  courses: Course[];

  constructor(private courseService : CourseService){
   // this.courses =  courseService.getAllCourses();

   //getting data from observable from service,  data is variable which stores data from observable
   //using lamda expression to get data 

   courseService.getAllCourses().
   subscribe((data) =>this.courses=data);
  }

  
parent(data)
{

  console.log(data);
}
     



}
