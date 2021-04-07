import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(private http: HttpClient , private router : Router) {}

  public phone! : string; 
  public password! :string;


  async login() { 
    const body : object = {
      phone : this.phone, 
      password : this.password
    }
    await this.http.post('https://ilia.isupov.bhuser.ru/shop-be/auth/login', body)
    .toPromise().then((res:any)=> 
    { 
     document.cookie = `jwt = ${res.accessToken}`; 
      this.router.navigate(['/clientpage']); 
    }); 
  }
  ngOnInit(): void {
  }

}
