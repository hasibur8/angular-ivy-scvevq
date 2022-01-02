import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  selectedDay;
  days = [
    {today: "Monday", msg: "Today Monday"},
    {today: "Tuesday", msg: "Today Tuesday"},
    {today: "Wednesday", msg: "Today Wednesday"},
    {today: "Thusday", msg: "Today Thusday"},
    {today: "Friday", msg: "Today Friday"},
    {today: "Saturday", msg: "Today Saturday"},
    {today: "Sunday", msg: "Today Sunday"}
  ];

  constructor(){
    this.selectedDay = 0;
  }
  selected = "----"
  
  update(e){
    this.selected = e.target.value
  }

}
