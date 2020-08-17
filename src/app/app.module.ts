import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CustomersComponent } from './customers/customers.component';
import { CompanyComponent } from './company/company.component';
import { CareersComponent } from './careers/careers.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CustomersComponent,
    CompanyComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SlickCarouselModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
