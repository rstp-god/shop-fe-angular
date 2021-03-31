import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card//card.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { SinginComponent } from './singin/singin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ClientpageComponent } from './clientpage/clientpage.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductshowcaseComponent } from './productshowcase/productshowcase.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    SinginComponent,
    MainpageComponent,
    RegisterpageComponent,
    ClientpageComponent,
    ProductlistComponent,
    ProductshowcaseComponent
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
