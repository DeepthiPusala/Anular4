import { Component, OnInit } from '@angular/core';
import { CourseService } from '../shared/course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../shared/Course.model';

@Component({
  
  templateUrl:'./coursedetail.component.html',
  
	   

})
export class CourseDetailComponent implements OnInit{
    courses: Course;

    constructor(private courseService : CourseService,private activated:ActivatedRoute){
     
    }
    ngOnInit()
    {
      this.courses =  this.courseService.getCourseById(+this.activated.snapshot.params['a']);
    }
}
