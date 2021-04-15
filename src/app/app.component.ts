import { Component } from '@angular/core';
import { transition,trigger,animate,style } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  animations: [trigger ("objCreate" , 
  [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(15px)'}),
      animate('1000ms', style({ opacity: 1,transform: 'translateY(-15px)' }))
    ])
  ])
] 
})
export class AppComponent{}

