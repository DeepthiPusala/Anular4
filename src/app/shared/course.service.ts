import { Injectable } from "@angular/core";
import {Course} from './Course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class CourseService{

  private _url="/assets/data/course.json"

  //private _url="https://api.github.com/users/mkranthikiran"

  //private _url="http://172.23.92.44:9191/courses";

  constructor(private http:HttpClient)
    {
    }
  

    getAllCourses() :Observable<Course[]>
    {

      //subscribing in this class only not in componennt so we write .subscribe here only

      //this.http.get(this._url).subscribe((data) => console.log(data));

     return this.http.get<Course[]>(this._url);

     //if course obj is in service first one
       // return courses;
    }

    getCourseById(id: number) {
        for (let course of courses) {
         if (course.id === id)
            return course;
          else
          null;
        }
    }


    saveCourse(newCourse)
  {
    newCourse.id=999;
courses.push(newCourse)
console.log(newCourse);

  }
}

   const courses: Course[]= [

        {
    
          id: 1,
    
          name: 'Angular Connect',
    
          date: new Date('9/26/2036') ,
    
          time: '10:00 am',

          duration:1,
    
          price: 1000,
    
          imageUrl: '/assets/images/angularconnect-shield.png',
    
          location: {
    
            trainingRoom: 'Harsvard',
    
                building : 'Campus' ,
    
            city: 'Hyderabad'        
    
          }     
    
        },
        {
    
          id: 2,
    
          name: 'Spring',
    
          date: new Date('9/22/2036'),

          duration:2,
    
          time: '10:30 am',
    
          price: 4000,
    
          imageUrl: '/assets/images/angularconnect-shield.png',
    
          location: {
    
            trainingRoom: 'galileo',
    
                building : 'Campus' ,
    
            city: 'Hyderabad'        
    
         }     
    
        },
       {
    
          id: 3,
    
         name: 'JDBC',
    
          date: new Date( '10/26/2036'),
    
          time: '05:00 am',
    
          price: 800,
    
          imageUrl: '/assets/images/angularconnect-shield.png',
    
          onlineurl:'https://javatpoint.com'    
    
       },
       {
    
         id: 4,
    
          name: 'spring boot',
    
          date: new Date( '10/26/2036'),
    
         time: '09:00 am',
    
          price: 800,
    
          imageUrl: '/assets/images/angularconnect-shield.png',
    
          onlineurl:'https://javatpoint.com'    
    
        }
    
    
     ] 

    