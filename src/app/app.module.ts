import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { CustomersModule } from './customers/customers.module';
import {CustomersService} from './customers.service'
import {ServiceProvidedModule} from './service-provided/service-provided.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    CustomersModule,
    ServiceProvidedModule 
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
