import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculatorsComponent } from './calculators/calculators.component';
import { FinanceFormComponent } from './components/finance-form/finance-form.component';
import { BmiFormComponent } from './components/bmi-form/bmi-form.component';
import { BmrFormComponent } from './components/bmr-form/bmr-form.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    CalculatorsComponent,
    FinanceFormComponent,
    BmiFormComponent,
    BmrFormComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
