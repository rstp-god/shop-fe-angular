import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Product {
    "id" : number, 
    "productName" : string,
    "type":string, 
    "description" : string; 
    "price" : number,
    "count": number
}

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private http:HttpClient) { }

  products : Product[] = []; 


  getProducts() {
    this.http.get<Product[]>('http://ilia.isupov.bhuser.ru/shop-be/products')
    .subscribe(res => {
      this.products = res;
      console.log(this.products)
    }
    )
  }

  ngOnInit(): void {
  this.getProducts();
  }
}
