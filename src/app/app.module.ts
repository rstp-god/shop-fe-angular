import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card//card.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { SinginComponent } from './singin/singin.component';
import { RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ClientpageComponent } from './clientpage/clientpage.component';

const appRoutes = [
  {path:'', component:MainpageComponent },
  {path:'singin', component:SinginComponent }, 
  {path:'register', component:RegisterpageComponent}, 
  {path:'clientpage', component:ClientpageComponent}
]

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
    ClientpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    BrowserAnimationsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
