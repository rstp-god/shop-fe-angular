import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {setJWT} from '../../store/actions';


@Component({
  selector: 'singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {

  public loginGroup: FormGroup = new FormGroup<any>({
    phone: new FormControl('', Validators.pattern(/^(?:[0-9]●?){6,14}[0-9]$/)),
    password: new FormControl(''),
  });
  public isLoading: boolean = false;

  constructor(private store: Store) {
  }

  public loginInto(): void {
    if (this.loginGroup.valid) {
      this.store.dispatch(setJWT({info: this.loginGroup.value}));
      this.isLoading = true;
    }
  }
}
