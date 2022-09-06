import {Component, OnInit} from '@angular/core';
import {Product} from '../../common/interfaces/product';
import {ProductService} from '../../services/product.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  constructor(private productService: ProductService) {
  }

  public saleProducts: Product[] = [];
  public salePercent: number = 20;
  public isLoading: boolean = true;

  ngOnInit(): void {
    this.productService.getProducts().pipe(
      take(1)
    ).subscribe((res) => {
      res.forEach((elem) => {
        if (elem.type.indexOf('food') !== -1 &&
          elem.type.indexOf('vegetable') !== -1 ||
          elem.type.indexOf('fruit') !== -1) {
          this.saleProducts.push(elem);
        }
      });
      this.isLoading = false;
    });
  }

}
