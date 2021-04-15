import { Component, OnInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router ) { }

  public display1stmenu :string = 'none'; 
  public display2ndmenu :string = 'none'; 
  public displaymobilemenu : string ='none'; 
  public displayclientpage: string = 'flex';
  public displayclient : string = 'none';
  public name!:string ; 
  public flag : boolean = true; 

  private id!:number; 

  getJWTkey () :string {
    let i = document.cookie.indexOf('jwt'); // find index 
    if( i === -1){
      return 'none' ;
    }
    let accKey = document.cookie.slice(i); // slice everythink that before jwt = 
    accKey= accKey.slice(4); // slice jwt 
    i = accKey.indexOf(';'); // find ; space for next cookie 
    if ( i === -1  ) { // if jwt key is alone cookie or last in cookie list 
      return accKey = 'Bearer ' + accKey; 
    }
    accKey = 'Bearer ' + accKey.slice(0,i); // slice everyrhink after ; 
    return accKey; 
  }

  async getInfo(accKey : string) { 
    await this.http.get('https://ilia.isupov.bhuser.ru/shop-be/auth/info',
    {
      headers: new HttpHeaders({
        Authorization: accKey
      })
    })
    .subscribe((res:any) => {this.id = res.id ; this.setName(); }); 
  }

  setName() {
      this.http.get(`https://ilia.isupov.bhuser.ru/shop-be/users/${this.id}`).subscribe((res:any) => {
      this.displayclientpage =  'none'; 
      this.displayclient = 'flex';
      this.name = res.firstName; 
    }); 
  }

  contact() {
    this.router.navigate(['/contact'])
  }

  about() {
    this.router.navigate(['/about'])
  }

  logout() {
    document.cookie = 'jwt = undefiend'; 
    this.router.navigate(['/']);
    this.flag = true; 
    location.reload(); 
  }

  mainmenu() {
    this.router.navigate(['/']);
  }

  products() {
    this.router.navigate(['/products']);
  }

  setNameFromPage(name : string) {
    this.displayclientpage = 'none';
    this.displayclient = 'flex';
    this.name = name; 
    this.flag = false; 
    }

  togglemobilemenu() {
    if (this.displaymobilemenu === 'none')
    {
      this.displaymobilemenu = 'flex';
    } else {
      this.displaymobilemenu  = 'none';
    }
    
  }

  ngOnInit(): void {
    const accKey = this.getJWTkey(); 
    if (accKey !== 'Bearer undefiend' && accKey !== 'none' && this.flag){
      this.getInfo(accKey) ;
    } 
  }
}
