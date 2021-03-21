import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  containerWidth : string   = `${window.innerWidth-40}px`;

  changeContainerWidth() {
    this.containerWidth =`${window.innerWidth-40}px`; 
  }
}
