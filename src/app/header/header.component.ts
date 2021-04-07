import { Component, OnInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http:HttpClient) { }

  public display1stmenu :string = 'none'; 
  public display2ndmenu :string = 'none'; 
  public displaymobilemenu : string ='none'; 
  public displayclientpage: string = 'flex';
  public displayclient : string = 'none';
  public name!:string ; 

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

  setName() {
    this.http.get(`https://ilia.isupov.bhuser.ru/shop-be/users/${this.id}`).subscribe((res:any) => {
      this.displayclientpage =  'none'; 
      this.displayclient = 'flex';
      this.name = res.firstName; 
    }); 
  }

  setNameFromPage(name : string) {
    this.displayclientpage = 'none';
    this.displayclient = 'flex';
    this.name = name; 
    }

  logout() {
    document.cookie = 'jwt = undefiend'; 
  }

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
    if (accKey !== 'Bearer undefiend' && accKey !== 'none'){
      this.http.get('https://ilia.isupov.bhuser.ru/shop-be/auth/info',
      {
        headers: new HttpHeaders({
          Authorization: accKey
        })
      })
      .subscribe((res:any) => {this.id = res.id ;  this.setName();}); 
    }
  }

}
