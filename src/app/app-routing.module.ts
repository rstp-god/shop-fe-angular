import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component'
import { SinginComponent } from './singin/singin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ClientpageComponent } from './clientpage/clientpage.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductshowcaseComponent } from './productshowcase/productshowcase.component'
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{path:'', component:MainpageComponent },
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'singin', component:SinginComponent }, 
{path:'register', component:RegisterpageComponent}, 
{path:'clientpage', component:ClientpageComponent}, 
{path:'products', component:ProductlistComponent}, 
{path:'products/:id', component:ProductshowcaseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
