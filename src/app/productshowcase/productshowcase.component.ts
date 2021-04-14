import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Product } from '../productlist/productlist.component'; 

@Component({
  selector: 'app-productshowcase',
  templateUrl: './productshowcase.component.html',
  styleUrls: ['./productshowcase.component.css']
})
export class ProductshowcaseComponent implements OnInit {

  constructor(private route: ActivatedRoute,private http:HttpClient) { }

  public productInfo!: Product; 

  getProduct(id: number)  {
    this.http.get<Product>(`https://ilia.isupov.bhuser.ru/shop-be/products/${id}`)
    .subscribe(res => {
      this.productInfo = res; 
    }
    )
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {this.getProduct(+params.id)}); 
  }

}
