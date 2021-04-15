import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clientpage',
  templateUrl: './clientpage.component.html',
  styleUrls: ['./clientpage.component.css'], 
  providers: [HeaderComponent]
})
export class ClientpageComponent implements OnInit {

  constructor(private http :HttpClient, private header : HeaderComponent, private router : Router) { }

  public name!: string; 
  public surname! : string; 
  public email! : string; 
  public purchasesSum!: number; 
  public activated!:boolean; 
  public sex!:boolean; 
  private id! :number; 

  getUserAvatar() {
    if (!this.sex) {
      return 'assets/img/female  avatar.jpg'
    }
    return 'assets/img/male  avatar.jpg'
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


  logout() {
    this.header.logout(); 
    this.router.navigate(['/']);
  }

  async fillUserInfo () {
    await this.http.get(`https://ilia.isupov.bhuser.ru/shop-be/users/${this.id}`).subscribe((res:any) => {
      this.name = res.firstName; 
      this.surname = res.lastName; 
      this.email = res.email; 
      this.purchasesSum = res.purchasesSum; 
      this.activated = res.activate;
      this.sex =res.sex; 
      this.header.setNameFromPage(res.firstName); 
      this.header.ngOnInit(); 
    }); 
  }

  isActivated() :string {
    if(this.activated)  {
      return 'Yes! You activate account!'; 
    }
    return 'Nope, check your Email!'; 
  }


  // custom func to slice jwt key from cookies 
  getJWTkey () :string {
    let i = document.cookie.indexOf('jwt'); // find index 
    let accKey = document.cookie.slice(i); // slice everythink that before jwt = 
    accKey= accKey.slice(4); // slice jwt 
    i = accKey.indexOf(';'); // find ; space for next cookie 
    if ( i === -1  ) { // if jwt key is alone cookie or last in cookie list 
      return accKey = 'Bearer ' + accKey; 
    }
    accKey = 'Bearer ' + accKey.slice(0,i); // slice everyrhink after ; 
    return accKey; 
  }


  ngOnInit(): void {
     const accKey = this.getJWTkey(); 
    this.http.get('https://ilia.isupov.bhuser.ru/shop-be/auth/info',
      {
        headers: new HttpHeaders({
          Authorization: accKey
        })
      })
      .subscribe((res:any) => {this.id = res.id ; this.fillUserInfo();}); 
  }
}