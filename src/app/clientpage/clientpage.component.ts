import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientpage',
  templateUrl: './clientpage.component.html',
  styleUrls: ['./clientpage.component.css']
})
export class ClientpageComponent implements OnInit {

  constructor() { }

  name : string = 'Ivan'; 
  surname : string = 'Petrov'; 
  email : string = 'ivan@emali.hg'; 
  purchasesSum: number =5020; 
  activated:boolean=false; 

  getUserAvatar() {
    return '///';
  }

  discountCalc() : string{
    if(this.purchasesSum < 1000){
      return `Need ${1000-this.purchasesSum} for next 1% discount!`
    }
    
    if(this.purchasesSum < 5000){
      return `Need ${5000-this.purchasesSum} for next 5% discount!`
    }

    
    if(this.purchasesSum < 10000){
      return `Need ${10000-this.purchasesSum} for next 10% discount!`
    }

    return 'Congratulations you rached max discount! 10%! yoohooo'
  }

  isActivated() :string {
    if(this.activated)  {
      return 'Yes! You activate account!'; 
    }
    return 'Nope, check your Email!'; 
  }

  ngOnInit(): void {
  }

}
