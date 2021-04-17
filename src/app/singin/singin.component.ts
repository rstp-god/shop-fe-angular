import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {

  constructor(private http: HttpClient , private router : Router) {}

  public phone! : string; 
  public password! :string;
  public loading! : boolean; 
  public logging: boolean = true; 
  public err: boolean = false; 


  async login() { 
    this.loading = true; 
    this.logging = false; 
    const body : object = {
      phone : this.phone, 
      password : this.password
    }
    await this.http.post('https://ilia.isupov.bhuser.ru/shop-be/auth/login', body)
    .toPromise().then((res:any)=> 
    { 
      document.cookie = `jwt = ${res.accessToken}`;
      this.loading = false;  
      this.err = false; 
      this.router.navigate(['/clientpage']); 
    })
    .catch((res) => {
      this.err = true; 
      this.loading = false; 
      this.logging = true; 
    }); 
  }
}
