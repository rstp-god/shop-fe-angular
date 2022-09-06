import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  constructor(private http:HttpClient, private router : Router) { }

  public err : string = 'none';

  public firstName!: string;
  public lastName!: string;
  public phone!: string;
  public email!: string;
  public sex!: any;
  public bithDate!: Date ;
  public password!: string;

  public today: number = Date.now();

  postData() {

    if ( this.validationData() && this.isPhoneRegister()) {

      this.err = 'none';

    const body = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
      sex: this.sex,
      bithDate: this.bithDate,
      password: this.password,
    }
    this.http.post('https://api.sundancex.ru/users', body).subscribe(res => console.log(res));
    this.router.navigate(['/singin'])
    }

    this.err = 'block';
  }

  validationData() : boolean {

    if (this.firstName === undefined || this.lastName === undefined || this.phone === undefined || this.email === undefined || this.sex === undefined || this.bithDate === undefined || this.password === undefined){
      return false;
    }

    if(this.sex == 1){
      this.sex= true;
    } else {
      this.sex=false;
    }

    if(+this.phone === NaN && this.phone.length < 11){
      return false;
    }

    if (this.phone.length === 12 && this.phone[0] === '+') {
       this.phone = this.phone.substr(1);
    }

    if (this.email.indexOf('@') == -1) {
      return false;
    }

    return true ;
  }

  async isPhoneRegister() : Promise<boolean>{
    let flag : boolean = true ;
    await this.http.get(`https://api.sundancex.ru/users?phone=${this.phone}`).toPromise().then(() => {flag = false}).catch(() => {flag = true});
    return flag;
  }

  ngOnInit(): void {
  }

}
