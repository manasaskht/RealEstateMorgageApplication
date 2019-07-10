import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import {MortgageFormComponent} from './Mortgage-Form/MortgageAppln.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: EmployerLoginComponent},
  { path: 'Mortgage-Form', component: MortgageFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
