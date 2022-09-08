import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {StoreModule} from '@ngrx/store';
import {mainReducer} from './store/reducer';
import {EffectsModule} from '@ngrx/effects';
import {Effects} from './store/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


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
    HttpClientModule,
    StoreModule.forRoot({mainReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([Effects]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
