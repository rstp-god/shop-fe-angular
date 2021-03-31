import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SinginComponent } from './singin/singin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ClientpageComponent } from './clientpage/clientpage.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductshowcaseComponent } from './productshowcase/productshowcase.component'

const routes: Routes = [
{path:'', component:MainpageComponent },
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
