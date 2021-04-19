import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../productlist/productlist.component'

@Component({
  selector: 'sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  constructor(private http:HttpClient) { }

  public saleproducts : Product[]  = []; 
  public salepercent : number  = 20;
  public showloading: boolean = true; 

  getProducts() {
    this.http.get<Product[]>('https://ilia.isupov.bhuser.ru/shop-be/products')
    .subscribe((res)=> {
      res.forEach((elem) => {
        if (elem.type.indexOf('food') != -1 && elem.type.indexOf('vegetable') != -1 || elem.type.indexOf('fruit') != -1 ) {
          this.saleproducts.push(elem); 
        }
      })
      this.showloading = false;
    })
  }

  ngOnInit(): void {
    this.getProducts(); 
  }

}
