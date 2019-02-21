import { Component } from '@angular/core';

@Component({
  selector: 'currentdate',
  template:`<h1>{{date}}</h1>
  <hello></hello>`,
  styleUrls: ['./app.component.css']
})
export class DateComponent {
  date = new Date();
}
