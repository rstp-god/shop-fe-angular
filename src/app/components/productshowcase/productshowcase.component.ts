import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../common/interfaces/product';
import {ProductService} from '../../services/product.service';
import {takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';


@Component({
  selector: 'app-productshowcase',
  templateUrl: './productshowcase.component.html',
  styleUrls: ['./productshowcase.component.css']
})
export class ProductshowcaseComponent implements OnInit, OnDestroy {

  public productInfo$: Observable<Product>;
  private destroy$: Subject<any> = new Subject<any>();

  constructor(private route: ActivatedRoute,
              private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.destroy$)
    ).subscribe(params => {
      this.productInfo$ = this.productService.getProduct(+params.id);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
