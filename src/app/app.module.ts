import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SinginComponent } from './components/singin/singin.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { ClientpageComponent } from './components/clientpage/clientpage.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductshowcaseComponent } from './components/productshowcase/productshowcase.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SaleComponent } from './components/sale/sale.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SinginComponent,
    MainpageComponent,
    RegisterpageComponent,
    ClientpageComponent,
    ProductlistComponent,
    ProductshowcaseComponent,
    AboutComponent,
    ContactComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
