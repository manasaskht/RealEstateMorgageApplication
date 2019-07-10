import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MorgageApplicationFormComponent } from './morgage-application-form/morgage-application-form.component';
import { ApplicationdetailsComponent } from './applicationdetails/applicationdetails.component';
import { LoginComponent } from './login/login.component';
import { MyapplicationsComponent } from './myapplications/myapplications.component';



const routes: Routes = [
  { path: '',    component: HomeComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'mortgage-application', component: MorgageApplicationFormComponent},
  {path: 'mortgageApplicationDetail/:appid', component: ApplicationdetailsComponent},
  { path: 'myapplications', component: MyapplicationsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
