import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  display1stmenu :string = 'none'; 
  display2ndmenu :string = 'none'; 

  toggle1stmenu() {
    if (this.display1stmenu === 'none')
    {
      this.display1stmenu = 'flex';
    } else {
      this.display1stmenu  = 'none';
    }
    
  }

  toggle2ndmenu() {
    if (this.display2ndmenu === 'none')
    {
      this.display2ndmenu = 'flex';
    } else {
      this.display2ndmenu  = 'none';
    }
    
  }




  ngOnInit(): void {
  }

}
