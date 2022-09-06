import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../common/interfaces/product';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService) {
    this.countItems = 0;
  }

  @Input() countItems: number;

  public products: Product[] = [];
  public productSmall: Product[] = [];
  public isLoading: boolean = true;
  public isAllShow: boolean = true;
  public all: string = 'block';
  public flag: boolean = false;

  private destroy$: Subject<any> = new Subject<any>();


  ngOnInit(): void {
    this.productService.getProducts().pipe(
      takeUntil(this.destroy$)
    ).subscribe(res => {
        this.isLoading = false;
        this.products = res;
        this.productSmall = res.slice(0, this.countItems);
        this.flag = true;
      }
    );
    if (this.countItems > 0 || this.flag) {
      this.isAllShow = false;
      this.all = 'none';
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
