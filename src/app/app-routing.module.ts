import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CustomersComponent } from './customers/customers.component';
import { CompanyComponent } from './company/company.component';
import { CareersComponent } from './careers/careers.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full', 
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
