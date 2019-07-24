import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PendingrequestComponent } from './pendingrequest/pendingrequest.component';
import {GenerateQuoteComponent} from './generate-quote/generate-quote.component'

const routes: Routes = [
{path: '', component:LoginComponent },
{path:'pendingrequest', component:PendingrequestComponent},
{path:'generateQuote/:MortID', component:GenerateQuoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
