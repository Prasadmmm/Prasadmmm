import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceFormComponent } from './components/finance-form/finance-form.component';
import { BmiFormComponent } from './components/bmi-form/bmi-form.component';
import { BmrFormComponent } from './components/bmr-form/bmr-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'finance-form', component: FinanceFormComponent },
  { path: 'bmi-form', component: BmiFormComponent },
  { path: 'bmr-form', component: BmrFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
