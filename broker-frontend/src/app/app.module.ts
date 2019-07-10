import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MorgageApplicationFormComponent } from './morgage-application-form/morgage-application-form.component';
import { ApplicationdetailsComponent } from './applicationdetails/applicationdetails.component';
import { LoginComponent } from './login/login.component';
import { MyapplicationsComponent } from './myapplications/myapplications.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MorgageApplicationFormComponent,
    ApplicationdetailsComponent,
    LoginComponent,
    MyapplicationsComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
