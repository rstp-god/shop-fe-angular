import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component'
import { SinginComponent } from './components/singin/singin.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { ClientpageComponent } from './components/clientpage/clientpage.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductshowcaseComponent } from './components/productshowcase/productshowcase.component'
import { ContactComponent } from './components/contact/contact.component';

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
