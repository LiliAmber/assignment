import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoBackBtnComponent } from './components/go-back-btn/go-back-btn.component';
import { AllCountriesBtnComponent } from './components/all-countries-btn/all-countries-btn.component';
import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { NoPageFoundsComponent } from './no-page-founds/no-page-founds.component';

@NgModule({
  declarations: [
    AppComponent,
    GoBackBtnComponent,
    AllCountriesBtnComponent,
    HomeComponent,
    AllCountriesComponent,
    CountryDetailsComponent,
    NoPageFoundsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
