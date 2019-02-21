import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { CourseService } from '../shared/course.service';


@Component({
  templateUrl:'./createcourse.component.html',
  styles : ['em{float:right; color: #E05c65; padding-left-10px;}']
  
})
export class CreateCourseComponent {

  isDirty:boolean=true;
  
  constructor(private router : Router,private courseservice: CourseService){}



  saveCourse(newCourse)
  {
    console.log(newCourse);
    this.courseservice.saveCourse(newCourse)
    this.router.navigate(['/courses'])

  }
  
  cancel(){
    this.router.navigate(['/courses']);
  }
}