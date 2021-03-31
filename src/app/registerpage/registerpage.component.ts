import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Client {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  sex: boolean,
  bithDate: Date,
  password: string,
}

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  constructor(private http:HttpClient) { }

  firstName!: string;
  lastName!: string;
  phone!: string;
  email!: string;
  sex!: any;
  bithDate!: Date ;
  password!: string;

  public today: number = Date.now();
  

  setName(event: Event) {
    console.log(event);
  }

  postData() {
    
    if(this.sex == 1){
      this.sex= true; 
    } else {
      this.sex=false; 
    }

    const body = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
      sex: this.sex,
      bithDate: this.bithDate,
      password: this.password,
    }

    console.log( body); 

    this.http.put('http://ilia.isupov.bhuser.ru//shop-be/users', body).subscribe(res => console.log(res)); 
  }


  ngOnInit(): void {
  }

}
