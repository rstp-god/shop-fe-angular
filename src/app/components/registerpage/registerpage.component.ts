import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {map, take, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Response, User} from '../../common/interfaces/user';


@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnDestroy {

  public registerForm: FormGroup = new FormGroup<any>({
    firstName: new FormControl('', [Validators.required, Validators.pattern(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)]),
    lastName: new FormControl(''),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^(?:[0-9]●?){6,14}[0-9]$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    sex: new FormControl(false, Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])[A-Za-z\d]{5,20}$/)]),
    bithDate: new FormControl(new Date().getDate())
  });
  public today: number = Date.now();
  public isLoading: boolean = false;
  public isError: boolean = false;

  private destroy$: Subject<any> = new Subject<any>();

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  public register(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.userService.createUser(this.registerForm.value).pipe(
        takeUntil(this.destroy$),
      ).subscribe((value: Response | {}) => {
        if (Object.keys(value).length) {
          this.isLoading = false;
          this.router.navigate(['/singin']);
        } else {
          this.isLoading = false;
          this.isError = true;
        }
      });
    }
  }

}
