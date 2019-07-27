import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RequestAppraisalFormComponent } from './request-appraisal-form/request-appraisal-form.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PendingrequestComponent } from './PendingRequest/pendingrequest.component';
import {AppraisalQuoteComponent} from './AppraisalQuote/appraisalquote.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RequestAppraisalFormComponent,
    HomeComponent,
    NavbarComponent,
    PendingrequestComponent,
    AppraisalQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
