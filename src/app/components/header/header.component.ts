import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState, selectName} from '../../store/selectors';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {restore} from '../../store/actions';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private router: Router,
              private store: Store<AppState>) {
  }

  public displaymobilemenu: string = 'none';
  public displayclient: string = 'none';
  public name: string;
  public isLogin: boolean = false;

  private destroy$: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.store.select(selectName).pipe(
      takeUntil(this.destroy$)
    ).subscribe((value) => {
      if (value.length) {
        this.isLogin = true;
        this.name = value;
      } else {
        this.isLogin = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  public navigate(value: any): void {
    switch (value.target.value) {
      case 'main': {
        this.router.navigate(['/']);
        break;
      }
      case 'products': {
        this.router.navigate(['/products']);
        break;
      }
      case 'about': {
        this.router.navigate(['/about']);
        break;
      }
      case 'contact': {
        this.router.navigate(['/contact']);
        break;
      }
      default: {
        break;
      }
    }
  }


  public logout(): void {
    document.cookie = 'jwt = undefiend';
    this.store.dispatch(restore());
    this.router.navigate(['/']);
  }

  public toggleMobileMenu(): void {
    if (this.displaymobilemenu === 'none') {
      this.displaymobilemenu = 'flex';
    } else {
      this.displaymobilemenu = 'none';
    }
  }
}
