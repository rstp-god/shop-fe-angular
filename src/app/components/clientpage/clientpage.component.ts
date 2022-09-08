import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState, selectUser} from '../../store/selectors';
import {User} from '../../common/interfaces/user';
import {Observable, Subject} from 'rxjs';


@Component({
  selector: 'clientpage',
  templateUrl: './clientpage.component.html',
  styleUrls: ['./clientpage.component.css'],
})
export class ClientpageComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private store: Store<AppState>) {
  }

  private destroy$: Subject<any> = new Subject<any>();
  public info$: Observable<User>;

  ngOnInit(): void {
    this.info$ = this.store.select(selectUser);
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  public discountCalc(sum: number): string {
    if (sum < 1000) {
      return `Need ${1000 - sum} for next 1% discount!`;
    }
    if (sum < 5000) {
      return `Need ${5000 - sum} for next 5% discount!`;
    }
    if (sum < 10000) {
      return `Need ${10000 - sum} for next 10% discount!`;
    }
    return 'Congratulations you rached max discount! 10%! yoohooo';
  }

  public getUserAvatar(sex: boolean): string {
    if (!sex) {
      return 'assets/img/female  avatar.jpg';
    }
    return 'assets/img/male  avatar.jpg';
  }
}
