import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {error} from 'protractor';


@Component({
  selector: 'singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {

  constructor(private http: HttpClient, private router: Router) {
  }

  public phone!: string;
  public password!: string;
  public loading!: boolean;
  public logging: boolean = true;
  public err: boolean = false;


  async login() {
    this.loading = true;
    this.logging = false;
    const body: object = {
      phone: this.phone,
      password: this.password
    };
    await this.http.post('https://api.sundancex.ru/auth/login', body)
      .subscribe((res: any) => {
        document.cookie = `jwt = ${res.accessToken}`;
        this.loading = false;
        this.err = false;
        this.router.navigate(['/']).then(() => {
          location.reload();
        });
      });
  }
}
