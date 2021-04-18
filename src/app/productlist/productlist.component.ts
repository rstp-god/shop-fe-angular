import { Component, OnInit, Input } from '@angular/core';
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
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{

 

  constructor(private http:HttpClient) { 
    this.countItems = 0 ; 
  }

  @Input() countItems : number ; 

  public products! : Product[]; 
  public productsmall!:Product[];
  public showloading :boolean = true; 
  public showall: boolean = true; 
  public all: string = 'block';
  public flag:boolean = false;  

  getProducts() {
    this.http.get<Product[]>('https://ilia.isupov.bhuser.ru/shop-be/products')
      .subscribe(res => {
        this.showloading = false;
        this.products = res; 
        this.productsmall = res.slice(0,this.countItems); 
        this.flag = true; 
      }
      )
  }

  ngOnInit(): void {
    this.getProducts();
    if(this.countItems > 0 || this.flag) {
      this.showall = false; 
      this.all = 'none'; 
    }
  }
}
