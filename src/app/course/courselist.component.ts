import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Course } from '../shared/Course.model';

@Component({
  selector: 'coursethumbnail',
  template:`
  <div class="well" [routerLink]="['/courses',tempcourse?.id]">
   
 <h2>

   Name : {{tempcourse?.name|uppercase}}

   </h2>

  <div>Date : {{tempcourse?.date|date}} </div>
  <div> Duration: {{tempcourse?.duration |duration}}

  <div [ngSwitch]="tempcourse?.time">
  <span *ngSwitchCase="'8:00 am'">Early start</span>
  <span *ngSwitchCase="'10:00 am'">Late start</span>
  <span *ngSwitchDefault>Default</span>
  Time : {{tempcourse?.time}} </div>
  

  <div>Price : {{tempcourse?.price|currency:'INR'}} </div>

  <div *ngIf ="tempcourse?.location">

  Location :<span>{{tempcourse?.location?.trainingRoom}},</span>

  <span class="pad-left">{{tempcourse?.location?.building}},{{tempcourse?.location?.city}}</span> </div>

  <div *ngIf="tempcourse?.onlineurl">
  Onlineurl: {{tempcourse?.onlineurl}}</div>

  <br>
  <button  class="btn btn-primary" (click)="transferdatatoparent()">Enroll</button>
  
  `,
  styles:[`.pad-left{margin-left: 20px;}
      .well div{color: #bbb;}
		 `

	   ]

})
export class CourselistComponent {
    @Input() tempcourse:Course;
    @Output() eventcaptured= new EventEmitter();

    transferdatatoparent()
    {

console.log('child component button clicked');

this.eventcaptured.emit(this.tempcourse.name);
    }

    callme()
    {
console.log('call me method');

    }
}
