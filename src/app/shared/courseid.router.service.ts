import { Injectable } from "@angular/core";
import { CourseService } from '../shared/course.service';
import { ActivatedRoute, Router ,ActivatedRouteSnapshot} from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()

export class  CourseIdRouter implements CanActivate{

  constructor(private courseService : CourseService,private router:Router)
  {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const courseExists = !!this.courseService.getCourseById(+route.params['a'])
    if(!courseExists){
      this.router.navigate(['/404'])}

    return courseExists
  }

}

  