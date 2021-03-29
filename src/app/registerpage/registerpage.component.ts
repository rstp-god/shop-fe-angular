import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  constructor() { }

  public today :  number = Date.now(); 

  

  ngOnInit(): void {
    console.log(this.today); 
  }

}
