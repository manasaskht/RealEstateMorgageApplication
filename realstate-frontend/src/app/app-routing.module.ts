import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RequestAppraisalFormComponent } from './request-appraisal-form/request-appraisal-form.component';
import { PendingrequestComponent } from './PendingRequest/pendingrequest.component';
import {AppraisalQuoteComponent} from './AppraisalQuote/appraisalquote.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path:'pendingrequest',component:PendingrequestComponent},
  { path: 'appraisal-form', component: RequestAppraisalFormComponent},
  { path: 'generateAppraisalQuote/:MortID', component:AppraisalQuoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
