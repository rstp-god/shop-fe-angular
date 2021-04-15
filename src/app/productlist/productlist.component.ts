import { Component, OnInit, OnChanges } from '@angular/core';
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
export class ProductlistComponent implements OnInit, OnChanges {

  constructor(private http:HttpClient) { }

  public products : any; 
  public showloading :boolean = true; 

  ngOnChanges() {
    console.log('....'); 
  }

  async getProducts() {
    await this.http.get('https://ilia.isupov.bhuser.ru/shop-be/products')
    .subscribe(res=> {
      console.log('2');
      this.showloading = false; 
      this.products = res; 
    }
    )
  }

  ngOnInit(): void {
    console.log('1');
    this.getProducts();
  }
}
